import './head.css'

import Search from '../search-form/search-form';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (  
        <Link to='/'>
            <div className='container'>
                Book Search
            </div>
        </Link>
    );
}