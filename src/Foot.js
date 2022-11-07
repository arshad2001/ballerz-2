import React from 'react';
import './App.css';
import './index.css'
import './foot.css'

function Foot() {
	return (
		<div className='footer-background font-color-white'>
			<footer className="footer">
				<div class="footerSection font-size-24 ">
					<img src = "logo.svg" alt=""/>
					<a className='font-weight-bold'>HIMATEKKOM ITS</a>
				</div>
				<div class="footerSection font-size-20">
					<a className=''>Join Us</a>
				</div>
				<div class="footerSection font-weight-light font-size-20">
					<a className='font-weight-light'>2022 | RELCOM CONVERGENCE HIMATEKKOM ITS</a>
				</div>
			</footer>
		</div>
	)
}

export default Foot
