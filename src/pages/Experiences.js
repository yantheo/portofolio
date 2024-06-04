import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import '../styles/Experiences.css';

const Experiences = (props) => {
	return (
		//ecrire code ici
		<div className='experience'>
		<h1 className='title'>Experience</h1>
			<VerticalTimeline lineColor="#fff">
				<VerticalTimelineElement 
					className='vertical-timeline-element--education' 
					date="Sept 2019 - Dec 2019 (Paris, France)"
					iconStyle={{background:"#3e497a", color:'#fff'}}
					icon={<SchoolIcon/>}
					layout='1-column-left'
				><h3 className='vertical-timeline-element-title'>WebForce3 Paris IV</h3>
				<p>Web Developer</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement 
					className='vertical-timeline-element--work' 
					date="Jan 2020 - July 2020 (Aix-en-Provence, France)"
					iconStyle={{background:"#3e497a", color:'#fff'}}
					icon={<WorkIcon/>}
					layout='1-column-right'
				><h3 className='vertical-timeline-element-title'>Birds Retail Data Company</h3>
				<p>Python Developer</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement 
					className='vertical-timeline-element--education' 
					date="Mar 2021 - Mar 2023 (Barcelona, Spain)"
					iconStyle={{background:"#3e497a", color:'#fff'}}
					icon={<WorkIcon/>}
					layout='1-column-left'
				><h3 className='vertical-timeline-element-title'>WebAssist SL</h3>
				<p>Web Developer PHP/Wordpress</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement 
					className='vertical-timeline-element--education' 
					date="From June 2023 (Barcelona, Spain)"
					iconStyle={{background:"#3e497a", color:'#fff'}}
					icon={<IntegrationInstructionsIcon/>}
					layout='1-column-right'
				><h3 className='vertical-timeline-element-title'>Freelance</h3>
				<p>Web Developer</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<div className='min'>

			</div>
		</div>
	);
} 

export default Experiences;