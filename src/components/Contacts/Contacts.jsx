import React from 'react';
import Address from './../../assets/images/address.png';
import Phone from './../../assets/images/phone.png';
import Email from './../../assets/images/email.png';
import './Contacts.css';

const Contacts = () => {
	return(
		<React.Fragment>
			<div className='Contacts-item'>
				<img src={Address} alt="Address"/>
				141544, МО, Пятницкое шоссе, 2, д.Юрлово
			</div>
			<div className='Contacts-item'>
				<img src={Phone} alt="Phone"/>
				8 800 505-65-33
			</div>
			<div className='Contacts-item'>
				<img src={Email} alt="Email"/>
				info@fulogy.com
			</div>
		</React.Fragment>
	);
}

export default Contacts;