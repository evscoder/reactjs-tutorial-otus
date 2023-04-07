import React, { Component, memo } from "react";
import { WithStateQuery } from "components/WithStateQuery";

type State = {
  visible: boolean;
  count: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export class LifeCycle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      count: 1,
    };
  }

  render() {
    const { visible, count } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState((prevState) => ({ visible: !prevState.visible }));
          }}
        >
          Показать/скрыть
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
          }}
        >
          увеличить
        </button>
        <div>{visible.toString()}</div>
        <div>{count.toString()}</div>
        {visible && <WithStateQuery id={count.toString()} />}
      </div>
    );
  }
}
