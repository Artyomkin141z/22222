const BookFull = (props) => {
    return(
        <>
            <div>
                <div>
                    <h1 className="bookFull-title">
                        {props.title}
                    </h1>
                    <p className="bookFull-authors">
                        {props.authors}
                    </p>
                    <div>
                        <p className="bookFull-pablisher">
                            {props.publisher}
                        </p>
                        <p className="bookFull-date">
                            {props.publishedDate}
                        </p>
                    </div>
                    <div>
                        <p className="bookFull-pageCount">
                            {props.pageCount}
                        </p>
                        <p>Page count</p>
                    </div>
                </div>
                <img src={props.img} alt='Book image'/>
            </div>
            <div className="bookFull-aboutBookContainer">
                <h2>About book</h2>
                <p className="bookFull-aboutBook"
                    dangerouslySetInnerHTML={{__html: props.description}}
                >
                </p>
            </div>
        </>
    );
}

export default BookFull;