import React, { Component } from "react";
import { ShowLifeCycle } from "components/ShowLifeCycle";

const SimpleChildren = () => <div>some component</div>;
const BrokenChildren = () => {
  throw new Error("some error");
};

type State = {
  error: boolean;
  random: number;
  mounted: boolean;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export class UpdateLifeCycle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: false,
      random: Math.random(),
      mounted: true,
    };

    this.toggleMounted = this.toggleMounted.bind(this);
  }

  toggleError = () => {
    this.setState((prevState) => ({ error: !prevState.error }));
  };

  toggleMounted() {
    this.setState((prevState) => ({ mounted: !prevState.mounted }));
  }

  updateRandom = () => {
    this.setState({ random: Math.random() });
  };

  static setDerivedStateFromError() {
    return { error: true };
  }

  render() {
    const { error, random, mounted } = this.state;
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleMounted}>
            {mounted ? "Размонтировать" : "Монтировать"}
          </button>
          <button onClick={this.toggleError}>
            {error ? "Убрать ошибку" : "Ошибка"}
          </button>
          <button onClick={this.updateRandom}>Обновить компонент</button>
        </div>
        {mounted && (
          <ShowLifeCycle value={random}>
            {error ? <BrokenChildren /> : <SimpleChildren />}
          </ShowLifeCycle>
        )}
      </div>
    );
  }
}
