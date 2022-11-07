import React from 'react';
import './App.css';
import './nav.css';
import './index';

function Nav() {
	return (
		<div>
			<nav class="navbar background ">
					<div class="logo">
						<img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" />
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
