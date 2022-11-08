import React from 'react';
import './App.css';
import './nav.css';
import './index.css';
import logoColored from './assets/logo-colored.png';
import logoText from './assets/logo-colored-text.png'

function Nav() {
	return (
		<div className=' '>
			<nav class="navbar ">
				<div className='nav-section'>
					<img src={logoColored} className='image-size-32 margin-8 logo-hima-navbar'/>
					<a className='font-size-18 font-weight-bold'>HIMATEKKOM ITS</a>
					{/* <a className='font-size-16 font-weight-bold'>HIMATEKKOM</a> */}
				</div>
				<ul class="nav-list font-size-20 font-weight-normal">
					<li><a href="#Home">Home</a></li>
					<li><a href="#Info">Info</a></li>
					<li><a href="#Academic">Academic</a></li>
				</ul>
{/* 
				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div> */}
                
			</nav>
		</div>
	)
}

export default Nav
