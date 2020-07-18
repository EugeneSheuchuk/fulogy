import React from 'react';
import Logo from './assets/images/Интернет-магазин светодиодного оборудования-0.svg'
import Contacts from './components/Contacts/Contacts';
import './App.css'

const App = () => {
	return (
		<div className='Container'>
			<header>
				<a href="https://fulogy.com/" target='_blank'>
					<img src={Logo} alt="Logo"/>
				</a>
			</header>
			<article>

			</article>
			<footer>
				<Contacts/>
			</footer>
		</div>
	);
}

export default App;

