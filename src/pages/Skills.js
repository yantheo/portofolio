import React from 'react';
import '../styles/Skills.css';
import { skillsList } from '../helpers/SkillsList';
import ItemCard from '../components/ItemCard';

const Skills = (props) => {
	return (
			//ecrire code ici
			<div className='skills'>
				<h1 className='title'>Services</h1>
				
				<div className='contentItem'>
				<p className='serviceIntro'>
				Here is the list of services that I offer you as a Freelance Web Developer, this list explains globally what I do, but it is possible that you will not necessarily find what you are looking for, in this case do not hesitate to contact me . .
				</p>
				{skillsList.map((item, index) => {
					return <ItemCard key={index} color={item.color} icon={item.icon} skills={item.tasks}>{item.name}</ItemCard>
				})}		
				</div>
			</div>
		)
}

export default Skills;