import React, { Component } from "react";
// eslint-disable-next-line @typescript-eslint/ban-types
type ComponentWithStateProps = {};
type ComponentWithStateState = {
  test: boolean;
};

export class ComponentWithState extends Component<
  ComponentWithStateProps,
  ComponentWithStateState
> {
  constructor(props: ComponentWithStateProps) {
    super(props);
    this.state = {
      test: false,
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(1);
  }

  render() {
    // eslint-disable-next-line no-console
    console.log("render child");
    return (
      <div
        onClick={() =>
          this.setState((prevState) => ({ test: !prevState.test }))
        }
      >
        ComponentWithState
      </div>
    );
  }
}
