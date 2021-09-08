import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
interface IState {}

interface IProps {
  key1: string;
  key2: number;
  key3: any[];
  key4: any;
}

class Third extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1> {this.props.key1} </h1>
        <h2> {this.props.key2} </h2>
        <h2> {this.props.key4} </h2>
        <TableContainer component={Paper} style={{ width: "50%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">SNO</TableCell>
                <TableCell align="right">NAME</TableCell>
                <TableCell align="right">PRICE</TableCell>
                <TableCell align="right">RATING</TableCell>
                <TableCell align="right">IMAGE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.key3.map((element, index) => (
                <TableRow key={index}>
                  <TableCell align="right"> {index + 1} </TableCell>
                  <TableCell align="right"> {element.name} </TableCell>
                  <TableCell align="right"> {element.price} </TableCell>
                  <TableCell align="right"> {element.rating} </TableCell>
                  <TableCell>
                    <Avatar src={element.image} variant="rounded"></Avatar>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

export default Third;
