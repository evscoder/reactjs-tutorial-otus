import React, { Component, memo } from "react";
import deepEqual from "fast-deep-equal";
import { ComponentWithState } from "components/WithState";

type State = {
  count: number;
  changed: boolean;
  obj: object;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const MemoComponentWithState = memo(ComponentWithState);

export class StateLifeCycle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      changed: false,
      obj: { test: "test", obj: { test1: "test1" } },
    };

    this.toggleChanged = this.toggleChanged.bind(this);
    this.doChanged = this.doChanged.bind(this);
    this.doUnchanged = this.doUnchanged.bind(this);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return !deepEqual(nextState, this.state);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ) {
    if (prevState.count === 5) {
      return this.setCountIsOne();
    }
  }

  increase = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  setCountIsOne = () => {
    this.setState({ count: 1 });
  };

  toggleChanged() {
    this.setState((prevState) => ({ changed: !prevState.changed }));
  }

  doChanged() {
    this.setState((v) => ({ changed: true }));
  }

  doUnchanged() {
    this.setState({ changed: false });
  }

  render() {
    const { count, changed, obj } = this.state;
    return (
      <div className="App">
        <div>
          <div>{JSON.stringify(obj)}</div>
          <button onClick={this.doChanged}>changed: true</button>
          <button onClick={this.doUnchanged}>changed: false</button>
          <button onClick={this.toggleChanged}>toggle changed</button>
          <button onClick={this.increase}>Увеличить счетчик</button>
          <button onClick={this.setCountIsOne}>счетчик = 1</button>
        </div>
        <MemoComponentWithState />
        <div>{count}</div>
        {changed.toString()}
      </div>
    );
  }
}
