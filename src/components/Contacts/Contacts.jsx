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
			<a className='Contacts-item' href='tel:8-800-505-65-33'>
				<img src={Phone} alt="Phone"/>
				8 800 505-65-33
			</a>
			<a className='Contacts-item' href='mailto:info@fulogy.com'>
				<img src={Email} alt="Email"/>
				info@fulogy.com
			</a>
		</React.Fragment>
	);
}

export default Contacts;