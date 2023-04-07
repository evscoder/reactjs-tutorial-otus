import React, { Component } from "react";

type WithStateQueryProps = {
  id?: string;
};

type WithStateQueryState = {
  data: unknown;
};

export class WithStateQuery extends Component<
  WithStateQueryProps,
  WithStateQueryState
> {
  controller: null | any;

  constructor(props: WithStateQueryProps) {
    super(props);
    this.state = {
      data: null,
    };

    this.controller = null;
  }

  componentDidMount() {
    this.controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.id || 1}`, {
      signal: this.controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        if (!this.controller.signal.aborted) {
          this.setState({ data });
        }
      });
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    return (
      <div>
        ComponentWithQuery
        <div>{JSON.stringify(this.state.data)}</div>
      </div>
    );
  }
}
