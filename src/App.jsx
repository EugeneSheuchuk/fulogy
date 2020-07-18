import React from 'react';
import Logo from './assets/images/Интернет-магазин светодиодного оборудования-0.svg'
import Contacts from './components/Contacts/Contacts';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import { info } from './assets/info/info';
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
				<div className='Order-description'>
					<OrderDescription
						customerName={info.customerName}
						customerAddress={info.customerAddress}
						customerEmail={info.customerEmail}
						customerPhone={info.customerPhone}
						performer={info.performer}
						performerManager={info.performerManager}
						performerPhone={info.performerPhone}
						install={info.install}/>
				</div>
			</article>
			<footer>
				<Contacts/>
			</footer>
		</div>
	);
}

export default App;

