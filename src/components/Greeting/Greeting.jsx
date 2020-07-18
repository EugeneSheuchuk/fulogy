import React from 'react';
import './Greeting.css';

const Greeting = ({ customerName, order }) => {
    return (
        <div className="Greeting">
            <h1>Здравствуйте, {customerName}!</h1>
            <p>Ваш заказ {order} оформлен.</p>
            <p>Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.</p>
        </div>
    );
};

export default Greeting;
