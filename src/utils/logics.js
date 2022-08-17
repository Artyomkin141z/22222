import { Component } from "react";
import request from "superagent";

class Logics extends Component {
    handleSearch = (e) => {
        // this.state.searchField = e.target.value;
        this.setState({searchField: e.target.value});
        console.log('handleSearch: ', this.state.searchField)
    }

    handleCategories = (e) => {
        // this.state.categories = e.target.value;
        this.setState({categories: e.target.value});
        console.log('handleCategories: ', this.state.categories)
    }

    handleSortingBy = (e) => {
        // this.state.sortingBy = e.target.value;
        this.setState({sortingBy: e.target.value});
        console.log('handleSortingBy: ', this.state.sortingBy)
    }

    getCategories = (categories) => {
        if(categories === "All"){
            return "";
        }
        else {
            return "+subject:" + categories;
        }
    }

    getBookRequest = (e) => {
        e.preventDefault();

        console.log(this.state.searchField + this.getCategories(this.state.categories) + this.state.sortingBy + this.state.startIndex);

        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({
                q: this.state.searchField + this.getCategories(this.state.categories), 
                maxResults: 30,
                orderBy: this.state.sortingBy,  
                startIndex: 0,
            })
            .then((data) => {
                console.log('data: ', data);
                
                // this.state.books = this.state.books.concat([...data.body.items]);
                // this.state.countResult = data.body.totalItems;
                // this.state.startIndex = this.state.startIndex + 30;
                this.setState({loadItems: this.state.loadItems});
                this.setState({books: [...data.body.items]});
                this.setState({countResult: data.body.totalItems});
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export default Logics;