import { Component } from "react";

import BookFull from "../components/bookFull/bookFull";
import Header from "../components/head/head";

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.getBookID(),
            title: 'No title',
            authors: 'No information about the authors',
            categories: '', 
            description: '',
            img: '',
            pageCount: 0,
            publishedDate: '',
            publisher: '',
        }
        this.getBookInfByID();
    }

    getBookID = () => {
        // this.setState({id: window.location.hash});
        // console.log('this.state.id: ', this.state.id)
        return window.location.hash.slice(1);
    }

    getBookInfByID = () => {
        fetch('https://www.googleapis.com/books/v1/volumes/' + this.state.id)
            .then((responce) => {
                return responce.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    title: data.volumeInfo.title,
                    authors: data.volumeInfo.authors,
                    categories: data.volumeInfo.categories,
                    description: data.volumeInfo.description,
                    img: data.volumeInfo.imageLinks.thumbnail,
                    pageCount: data.volumeInfo.pageCount,
                    publishedDate: data.volumeInfo.publishedDate,
                    publisher: data.volumeInfo.publisher,
                })
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render(){
        console.log('id: ', this.state.id)

        return(
            <>
                <div className="gradient toFix"><Header /></div>
                <BookFull 
                    title = {this.state.title}
                    authors = {this.state.authors}
                    categories = {this.state.categories} 
                    description = {this.state.description}
                    img = {this.state.img}
                    pageCount = {this.state.pageCount}
                    publishedDate = {this.state.publishedDate}
                    publisher = {this.state.publisher}
                />
            </>
        );
    }  
}

export default Book;