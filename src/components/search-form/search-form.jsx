import './search-form.css';

function Search (props) {
    return(
        <form className='from-container'>
            <div className='inputContainer'>
                <div className='inputContainer-child'>
                    <input
                        className=''
                        maxLength="100" type="text"
                        onChange={props.handleSearch}
                    ></input>
                    <button
                        onClick={props.getBookRequest}
                    ></button>
                </div>
            </div>
            <div className='filterContainer'>
                <div className='sortContainer'>
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