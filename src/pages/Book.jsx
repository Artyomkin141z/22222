import { render } from "@testing-library/react";
import { Component } from "react";
import Header from "../components/head/head";

class Book extends Component {
    render(){
        return(
            <Header />
        ); 
    };  
}

export default Book;