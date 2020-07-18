import React from 'react';

const Greeting = ({customerName, order}) => {
	return (
		<React.Fragment>
			<h1>Здравствуйте, {customerName}!</h1>
			<p>Ваш заказ {order} оформлен.</p>
			<p>Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.</p>
		</React.Fragment>
	)
};

export default Greeting;