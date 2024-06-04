import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

const Footer = (props) => {
	return (
		//ecrire code ici
		<footer className='footer'>
			<div className='socialMedia'>
			<a href="https://www.linkedin.com/in/yanick-theodose-27236baa/">
				<LinkedInIcon/>
			</a>
			<a href="https://github.com/yantheo">
				<GitHubIcon/>
			</a>
			<a href="mailto:yanick.theodose@gmail.com"><EmailIcon/></a>
			</div>
			<p>&copy; 2024 yanicktheodose.site</p>
		</footer>
	);
}


export default Footer;