import Header from "../components/head/head";
import Search from "../components/search-form/search-form";
import BookList from "../components/bookList/bookList";

import Logics from '../utils/logics'

class Home extends Logics {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: "",
            categories: "All",
            sortingBy: "relevance",
            loadItems: 0,
            countResult: 0,
        }
    }

    render(){
        // console.log('book.state.books' , this.state.books);
        // console.log('book.state.searchField' , this.state.searchField);

        return(
        <>
            <Header />
            <Search 
                handleSearch = {this.handleSearch}
                handleCategories = {this.handleCategories}
                handleSorting = {this.handleSortingBy}
                getBookRequest = {this.getBookNewRequest}
            />
            <BookList 
                countResult = {this.state.countResult}
                books = {this.state.books}
                getBookRequest = {this.getBookRequest}
            />
        </>
        )
    }
    
}

export default Home;