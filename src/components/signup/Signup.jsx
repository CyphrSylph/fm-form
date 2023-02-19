import React from 'react';
import './signup.css';

const Signup = () => {
	return (
		<div className="signup__container">
			<div className="signup__info">
				<h1 className="signup__title">Learn to code by watching others</h1>
				<p className="signup__description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
			</div>
			<div className="signup__content">
				<button href='#signup' className="button flex__button"><b>Try it free 7 days</b> then $20/mo. thereafter</button>
				<form className="signup__form">
						<input type="text" name="first name" className="signup__form-input" placeholder="First Name" />
						<input type="text" name="last name" className="signup__form-input" placeholder="Last Name" />
						<input type="email" name="email" className="signup__form-input" placeholder="Email Address" />
						<input type="text" name="password" className="signup__form-input" placeholder="Password" />
					<button href="#signup" className="button submit__button">Claim your free trial</button>
					<p className="form__terms">By clicking the button, you are agreeing to our <a href='https://www.iubenda.com/terms-and-conditions/68783624' className="form__term-link"><b>Terms and Services</b></a>.</p>
				</form>
			</div>
		</div>
	);
}

export default Signup;