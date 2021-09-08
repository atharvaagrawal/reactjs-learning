import React, { Component } from "react";

interface IState {}

interface IProps {
  key1: (data: any) => void;
}

class Child extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.key1("ReactJS with TypeScript");
          }}
        >
          {" "}
          Change{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default Child;
