import React from 'react';
import './App.css';

function App() {
	return (
		<main>
			<div className="signup__container">
				<div className="signup__info">
					<h1 className="signup__title">Learn to code by watching others</h1>
					<h3 className="signup__description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h3>
				</div>
				<div className="signup__content">
					<button href='#signup' className="button button--flex">Try it free 7 days then $20/mo. thereafter</button>
					<form className="signup__form">
						<div className="signup__form-div">
							<label className="form__tag">First Name</label>
							<input type="text" name="first name" className="signup__form-input" placeholder="First Name" />
						</div>
						<div className="signup__form-div">
							<label className="form__tag">Last Name</label>
							<input type="text" name="last name" className="signup__form-input" placeholder="Last Name" />
						</div>
						<div className="signup__form-div">
							<label className="form__tag">Email</label>
							<input type="email" name="email" className="signup__form-input" placeholder="Email" />
						</div>
						<div className="signup__form-div">
							<label className="form__tag">Password</label>
							<input type="text" name="password" className="signup__form-input" placeholder="Password" />
						</div>
						<button href="#signup" className="button button--flex">Claim your free trial</button>
						<p className="form__terms">By clicking the button, you are agreeing to our <a href='https://www.iubenda.com/terms-and-conditions/68783624' className="form__term-link">Terms and Services</a>.</p>
					</form>
				</div>
			</div>
		</main>
	);
}

export default App;
