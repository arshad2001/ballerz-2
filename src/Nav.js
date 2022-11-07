import React from 'react';
import './App.css';
import './nav.css';
import './index';
import logoColored from './assets/logo-colored.png';

function Nav() {
	return (
		<div>
			<nav class="navbar background ">
					<div className='nav-section'>
						<img src={logoColored} className='image-size-32 margin-8'/>
						<a className='font-size-16 font-weight-bold'>HIMATEKKOM</a>
					</div>
				<ul class="nav-list">
					<li><a href="#Home">Home</a></li>
					<li><a href="#Info">Info</a></li>
					<li><a href="#Academic">Academic</a></li>
				</ul>
                <div class="logo">
                    <a> </a>
                </div>
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
