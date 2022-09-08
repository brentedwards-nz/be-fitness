import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sessions">Sessions</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Header