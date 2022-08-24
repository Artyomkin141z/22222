import './search-form.css';

import { Link } from 'react-router-dom';

function Search (props) {
    const changeLocation = (e) => {
        props.getBookRequest(e);
        e.preventDefault();
        return <Link to='/' />;
    }

    return(
        <form className='from-container'
            onSubmit={changeLocation}
        >
            <div className='inputContainer'>
                <div className='inputContainer-child'>
                    <input
                        className=''
                        maxLength="100" type="text"
                        onChange={props.handleSearch}
                    ></input>
                    <button
                        onClick={changeLocation}
                    ></button>
                </div>
            </div>
            <div className='filterContainer'>
                <div className='sortContainer filter-categories'>
                    <p>Categories</p>
                    <select
                        onChange={props.handleCategories}
                    >
                        <option>All</option>
                        <option>Art</option>
                        <option>Biography</option>
                        <option>Computers</option>
                        <option>History</option>
                        <option>Medical</option>
                        <option>Poetry</option>
                    </select>
                </div>
                <div className='sortContainer'>
                    <p>Sorting by</p>
                    <select
                        onChange={props.handleSorting}
                    >
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default Search;