import React, { Component } from "react";

import Second from "./Second";
interface IState {
  key1: string;
  key2: number;
  key3: any[];
}

interface IProps {}

class First extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      key1: "React-JS",
      key2: 17.2,
      key3: [
        {
          name: "Shirt",
          price: 100,
          rating: 2.5,
          image:
            "https://pisco.meaww.com/6ec1615c-5a8d-45ab-b7e1-04e1ad228f7d.634818810",
        },
        {
          name: "Polo Shirt",
          price: 200,
          rating: 2.5,
          image:
            "https://pisco.meaww.com/6ec1615c-5a8d-45ab-b7e1-04e1ad228f7d.634818810",
        },
        {
          name: "American Shirt",
          price: 300,
          rating: 2.5,
          image:
            "https://pisco.meaww.com/6ec1615c-5a8d-45ab-b7e1-04e1ad228f7d.634818810",
        },
        {
          name: "Pant",
          price: 400,
          rating: 2.5,
          image:
            "https://pisco.meaww.com/6ec1615c-5a8d-45ab-b7e1-04e1ad228f7d.634818810",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Second
          key1={this.state.key1}
          key2={this.state.key2}
          key3={this.state.key3}
        ></Second>
      </React.Fragment>
    );
  }
}

export default First;
