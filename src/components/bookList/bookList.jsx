import BookCard from "../bookCard/bookCard";
import './bookList.css';

const bookList = (props) => {
    let imgUrl = "";

    function checkImg(book){
        if(book.volumeInfo.imageLinks === undefined){       
            imgUrl = "../public/image/noImage.png";
        }
        else imgUrl = book.volumeInfo.imageLinks.thumbnail;
        return imgUrl;
    }

    function showCountResult(countResult){
        return(
            <p className="count-reult">
                Found {countResult} result
            </p>
        );
    }

    function loadMoreBooks(){
        return(
            <div >
                <p className="bookList-uploaded">
                    Uploaded {" " + props.books.length}
                </p>
                <div className="wrapper-load">
                    <p
                        className="bookList-loadMore"
                        onClick={props.getBookRequest}
                    >
                        Load more
                    </p>
                </div>
            </div>
        );
    }

    return (
    <>
        {showCountResult(props.countResult)}
        <div className='bookList'>
            {
                props.books.map((book) => {
                    return(
                        <BookCard
                            img = {checkImg(book)}                            
                            title = {book.volumeInfo.title}
                            category = {book.volumeInfo.categories}
                            autors = {book.volumeInfo.authors}
                            description = {book.volumeInfo.description}
                        />
                    );
                })
            }
        </div>
        {loadMoreBooks()}
    </>
    );
}

export default bookList;