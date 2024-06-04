import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectItem = (props) => {
	const stacks = props.stacks.split(', ')
	return (
		//ecrire code ici
		
		<div className='projectItem'>
			<NavLink to={`/project/${props.id}`}>
				<div className='bgImage' style={{backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}} />
					<div className='projectTitle'>{props.name}</div>
					<div className='stacks'>
					{
						stacks && stacks.map((stack, index) => {
							return <span key={index} className='ItemStack'>{stack}</span>
						})
					}
				</div>	
			</NavLink>	
		</div>
	);
}

export default ProjectItem;