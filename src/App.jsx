import React from 'react';
import Logo from './assets/images/Интернет-магазин светодиодного оборудования-0.svg'
import Contacts from './components/Contacts/Contacts';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import { info, orderInfo } from './assets/info/info';
import OrderDescription from './components/OrderDescription/OrderDescription';

const App = () => {
	return (
		<div className='Container'>
			<header>
				<a href="https://fulogy.com/" target='_blank'>
					<img src={Logo} alt="Logo"/>
				</a>
			</header>
			<article>
				<div className='Greeting'>
					<Greeting customerName={info.customerName} order={info.order}/>
				</div>
				<OrderDescription
					header={orderInfo.orderInfo.header}
					info={orderInfo.orderInfo.info}/>
				<OrderDescription
					header={orderInfo.setInfo.header}
					info={orderInfo.setInfo.info}/>
				<OrderDescription
					header={orderInfo.specifications.header}
					info={orderInfo.specifications.info}/>
				<OrderDescription
					header={orderInfo.orderAmount.header}
					info={orderInfo.orderAmount.info}/>
			</article>
			<footer>
				<Contacts/>
			</footer>
		</div>
	);
}

export default App;

