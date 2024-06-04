import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';


const Navbar = (props) => {
	const [expendNavbar, setExpendNavbar] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setExpendNavbar(false);
	}, [location])
	return(
		//ecrire code ici
		<div className='navbar' id={expendNavbar ? "open" : "close"}>
			<div className='logo'>
				<div className='imgLogo'>
				</div>
			</div>
			<div className='toggleButton'>
				<button onClick={() => {setExpendNavbar((prev) => !prev)}}>
					<ReorderIcon/>
				</button>
			</div>
			<div className='links'>
				<Link to="/">Home</Link>
				<Link to="/skills">Services</Link>
				<Link to="/experiences">Experience</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</div>
	);
}

export default Navbar;