import React, { Component } from "react";
import Third from "./Third";

interface IState {}

interface IProps {
  key1: string;
  key2: number;
  key3: any[];
}

class Second extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Third
          key1={this.props.key1}
          key2={this.props.key2}
          key3={this.props.key3}
          key4={this.props.children}
        ></Third>
      </React.Fragment>
    );
  }
}

export default Second;
