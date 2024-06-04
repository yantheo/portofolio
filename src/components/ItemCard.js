import React from 'react';

const ItemCard = (props) => {
	return (
		//ecrire code ici
		<div className='itemCard'>
			<div style={{background: props.color}} className='itemIcon'>
				{props.icon}
			</div>
			<div className='itemContent'>
				<h2>{props.children}</h2>
				<p>
					{props.skills}
				</p>
			</div>
		</div>
	);
} 

export default ItemCard;