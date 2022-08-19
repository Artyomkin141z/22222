import './bookCard.css';

import { Link } from 'react-router-dom';


const BookCard = (props) => {
    function checkLength (str){
        str = String(str);
        if(str.length > 45 && str){
            str = str.substr(0, 45) + "...";
        }
        else if(str === "undefined"){
            str = "--Can't ask for property--";
        }
        return str;
    }

    return(
        <>
            <Link to={'/book#' + props.id}>
                <div className='card'>
                    <img
                        className='card-img'
                        src={props.img} 
                        alt = "Book cover"
                    />
                    <div className='card-inform'>
                        <p className='card-category'>{props.category}</p>
                        <p className='card-title'>{checkLength(props.title)}</p>
                        <p className='card-autors'>{props.autors}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default BookCard;