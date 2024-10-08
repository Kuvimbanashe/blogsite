import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
    
    <nav className="navbar navbar-default border border-secondary">
        <div className="form form-inline">
            <Link to="/"
            className="btn btn-outline-danger mx-3">Cama Blog App </Link></div>
		<div className="form form-inline">
		    
		   <Link to="/" 
		   className="btn btn-outline-secondary" 
		   role="button"	> Home</Link>
		
		<Link to="/create"
		className="btn btn-outline-primary mx-3" 
		   role="button">New Blog</Link>
		 
		</div>
		
	</nav>
	);
}

export default Navbar;