import React from 'react';
import './OrderDescription.css';

const OrderDescription = ({customerName,
							  customerEmail,
							  customerAddress,
							  customerPhone,
							  performer,
							  performerManager,
							  performerPhone,
							  install}) => {
	return(
		<React.Fragment>
			<h2>Информация о заказе:</h2>
			<div className='OrderDescription-container'>
				<p>Заказчик:</p>
				<p>{customerName}</p>
				<p>Email:</p>
				<p>{customerEmail}</p>
				<p>Адрес:</p>
				<p>{customerAddress}</p>
				<p>Телефон:</p>
				<p>{customerPhone}</p>
				<p>Исполнитель:</p>
				<p>{performer}</p>
				<p>Менеджер:</p>
				<p>{performerManager}</p>
				<p>Телефон:</p>
				<p>{performerPhone}</p>
				<p>Монтаж:</p>
				<p>{install ? 'Да' : 'Нет'}</p>
			</div>
		</React.Fragment>
	);
};

export default OrderDescription;