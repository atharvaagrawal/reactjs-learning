// importing component
import { Component } from "react";

// declaring state
interface IState{}
// declaring props 
interface IProps{}

// create component
class First extends Component<IProps,IState>{
     //receive props at booting time
    constructor(props:IProps){
        super(props);
    }

    // import function:- presentational logic
    render(){
        return(
            <h1> Welcome to ReactJS with TypeScript !!! </h1>
        )
    }
};

//export first component
export default First;