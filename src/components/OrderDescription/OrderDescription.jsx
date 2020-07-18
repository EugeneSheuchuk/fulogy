import React from 'react';
import './OrderDescription.css';

const OrderDescription = ({header, info}) => {


	return(
		<div className='Order-description'>
			<h2>{header}{header ? ':' : ''}</h2>
			<div className='OrderDescription-container'>
				{info.map(item => {
					return <React.Fragment>
						<p>{item[0]}:</p>
						<p>{item[1]}</p>
					</React.Fragment>
				})}
			</div>
		</div>
	);
};

export default OrderDescription;