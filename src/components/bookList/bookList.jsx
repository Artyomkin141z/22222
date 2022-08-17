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

    function showCountResult(countResult = 0){
        return(
            <p className="count-reult">
                Found {countResult} result
            </p>
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
    </>
    );
}

export default bookList;