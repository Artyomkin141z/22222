import './head.css'

import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <Link to='/'>
        <div className='container'>
            Book Search
        </div>
    </Link>
    );
}