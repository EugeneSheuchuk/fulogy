import React from 'react';
import Logo from './assets/images/Интернет-магазин светодиодного оборудования-0.svg';
import Contacts from './components/Contacts/Contacts';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import { info, orderInfo } from './assets/info/info';
import OrderDescription from './components/OrderDescription/OrderDescription';

const App = () => {
    return (
        <div className="Container">
            <header>
                <a href="https://fulogy.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Logo} alt="Logo" />
                </a>
            </header>
            <article>
                <Greeting customerName={info.customerName} order={info.order} />
                <OrderDescription header={orderInfo.orderInfo.header} info={orderInfo.orderInfo.info} />
                <OrderDescription header={orderInfo.setInfo.header} info={orderInfo.setInfo.info} />
                <OrderDescription header={orderInfo.specifications.header} info={orderInfo.specifications.info} />
                <OrderDescription header={orderInfo.orderAmount.header} info={orderInfo.orderAmount.info} />
            </article>
            <hr />
            <footer>
                <Contacts />
            </footer>
        </div>
    );
};

export default App;
