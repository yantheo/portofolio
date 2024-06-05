import React, { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import axios from "axios";

const Projects = (props) => {
	const [stateProject, setStateProject] = useState({
		projects : null
	});

	const hostname = "https://yanicktheodose.site/portfolio/";
	//const hostname = "http://localhost/portfolio/";
	useEffect(() => {
		axios.get(`${hostname}api/projects`)
		.then((response) =>{ setStateProject({projects:response.data}) })
		.catch((error) => {console.log(error)})
	}, [])

	return (
		//ecrire code ici
		<div className="projects">
			<h1 className='title'>Projects</h1>
			
			<div className='projectList'>
			<p className='projectsIntro'>
			As a Freelance Web Developer, I developed websites mainly under the Wordpress CMS but also under other versions. Here are some examples that I am authorized to present to you.

			</p>
			{
				stateProject.projects && stateProject.projects.map((item, index) => {

					return (<ProjectItem id={item.project_id} key={index} stacks={item.project_stack} name={item.project_name} image={item.project_image}/>)
				})	
			}
			</div>
		</div>
		
	);
}

export default Projects;