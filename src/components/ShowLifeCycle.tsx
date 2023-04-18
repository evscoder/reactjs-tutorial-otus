import React, { Component } from "react";

type ShowLifeCycleProps = {
  value: unknown;
  children: React.ReactNode;
};

type ShowLifeCycleState = {
  test: boolean;
  error: Error | null;
};

export class ShowLifeCycle extends Component<
  ShowLifeCycleProps,
  ShowLifeCycleState
> {
  constructor(props: ShowLifeCycleProps) {
    super(props);

    this.state = {
      test: false,
      error: null,
    };
  }

  changeState = () => {
    this.setState((prevState) => ({ test: !prevState.test }));
  };

  resetError = () => {
    this.setState({ error: null });
  };

  static getDerivedStateFromProps(
    props: ShowLifeCycleProps,
    state: ShowLifeCycleState
  ) {
    return null;
  }

  getSnapshotBeforeUpdate(
    prevProps: ShowLifeCycleProps,
    prevState: ShowLifeCycleState
  ) {
    return { context: "test" };
  }

  // // При ошибке изменить состояние
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  // Среагировать на ошибку, логировать ошибку
  componentDidCatch(error: Error, info: unknown) {
    this.setState({ error });
  }

  // Обязательный метод: создание разметки
  render() {
    if (this.state.error) {
      return (
        <div>
          Неожиданная ошибка, мы автоматически регистрируем все ошибки и скоро
          все исправим
          <div>
            <button onClick={this.resetError}>Сбросить ошибку</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.changeState}>Изменить внутренее состояние</button>
        {this.props.children}
        {this.props.value}
        <div>{`${this.state.test}`}</div>
      </div>
    );
  }
}
