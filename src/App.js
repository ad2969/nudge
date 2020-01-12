import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setLanguage, getLanguage } from 'assets/languages'

import LandingPage from 'components/Landing'
import SignUpPage from 'components/SignUp'
import SignInPage from 'components/SignIn'
import PasswordForgetPage from 'components/PasswordForget'
import HomePage from 'components/Home'
import AccountPage from 'components/Account'
import Jobs, { JobsCreateForm, TimePicker } from 'components/Jobs'

import Navigation from 'components/Navigation'

import * as ROUTES from 'constants/routes'
import { withAuthentication } from 'Session'

const App = () => {

  // Set language if not set yet
	useEffect(() => {
    if(!getLanguage) {
      setLanguage('en');
      console.log('App language code:', getLanguage());
    }
	});

	return (
		<Router>
			<div>
				<br />

				<Route exact path={ROUTES.LANDING} component={LandingPage} />
				<Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
				<Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
				<Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
				<Route exact path={ROUTES.HOME} component={HomePage} />
				<Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
				<Route exact path={ROUTES.JOBS} component={Jobs} />
				<Route exact path={ROUTES.JOBS + '/create'} component={JobsCreateForm} />
				<Route exact path={ROUTES.JOBS + '/create/timeupdate'} component={TimePicker} />
				<Route exact path={ROUTES.JOBS + '/create/timecreate'} component={TimePicker} />
				<Route exact path={'/nav'} component={Navigation} />
			</div>
		</Router>
	);
};

export default withAuthentication(App);
