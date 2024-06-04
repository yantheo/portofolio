import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/ProjectDisplay.css";

const ProjectDisplay = (props) => {
	const {id} = useParams();
	const [singleProject, setSingleProjet] = useState({
		project : null
	})
	//const hostname = "https://yanicktheodose.site/portfolio/";
	const hostname = "http://localhost/portfolio/";
	useEffect(() => {
		axios.get(`${hostname}api/project/${id}`)
		.then((response) =>{ setSingleProjet({project:response.data}) })
		.catch((error) => {console.log(error)})
	}, [id])
	return (
		//ecrire code ici
		<>
			<div className='projectPage'>
			{singleProject.project && singleProject.project.map((project, index) => {
				return (
					<div key={index} className='projectDisplay'>
						<h1 className='title'>{project.project_name} </h1>
						<div className='projectCard'>
							<div className='projectDescription'>
							<img className='projectbg' src={project.project_image} alt={project.project_name} />
							{project.project_description}
							<div className='stack'>
							Main stack : {project.project_stack}
							</div>
							<div className='projectLink'>
							<a className='projectLinkUrl' rel='nofollow' href={project.project_website}>Visit {project.project_name}</a>
							</div>
							</div>
						</div>
					</div>
				)
			})}
			</div>
			
		</>
	);
}

export default ProjectDisplay;