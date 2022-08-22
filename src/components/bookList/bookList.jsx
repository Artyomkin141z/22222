import BookCard from "../bookCard/bookCard";
import './bookList.css';

const bookList = (props) => {
    let imgUrl = "";

    function checkImg(book){
        if(book.volumeInfo.imageLinks === undefined){ 
            console.log('no image');      
            imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm81P7TSBIArdAfY2iNZysOqa5FDoCqxG-IQ&usqp=CAU";
        }
        else imgUrl = book.volumeInfo.imageLinks.thumbnail;
        return imgUrl;
    }

    function showCountResult(countResult){
        // console.log('props.isLoaded: ',props.isLoaded);
        if (props.isLoaded){
            return(
                <p className="count-reult">
                    Found {countResult} result
                </p>
            );
        }
        else if(!props.isLoaded){
            return(
                <p className="count-reult">
                    Try to search something
                </p>
            );
        }
    }

    function loadMoreBooks(){
        if(props.isLoaded){
            if (props.books.length === props.countResult){
                return (
                    <div >
                        <p className="bookList-uploaded">
                            Uploaded {" " + props.books.length}
                        </p>
                        <div className="wrapper-load">
                            <p
                                className="bookList-loadMore bookList-End"
                            >
                                End
                            </p>
                        </div>
                    </div>
                );        
            }
            else return(
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
    }

    return (
    <>
        {showCountResult(props.countResult)}
        <div className='bookList'>
            {
                props.books.map((book) => {
                    return(
                        <BookCard
                            key = {book.id}
                            img = {checkImg(book)}                            
                            title = {book.volumeInfo.title}
                            category = {book.volumeInfo.categories}
                            autors = {book.volumeInfo.authors}
                            description = {book.volumeInfo.description}
                            id = {book.id}
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