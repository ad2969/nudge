import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { SignUpLink } from 'components/SignUp'
import { PasswordForgetLink } from 'components/PasswordForget'
import { withFirebase } from '../../Firebase'
import * as ROUTES from 'constants/routes'

import { Button } from 'antd'

import t from 'assets/languages'

const SignInPage = () => (
  <div className="container--margin">
    <div style={{display: "flex"}}>
      <h1 className="t--capitalize t--bold t--large">{t('welcome')} <br /> {t('back')}!</h1>
      <span style={{width: "100%", textAlign: "right"}}>
      <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="125" height="125" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0" transform="scale(0.001)"/>
      </pattern>
      <image id="image0" width="1000" height="1000" xlinkHref="data:image/png;base64,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"/>
      </defs>
      </svg>
      </span>
    </div>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    if( this.state.password === '' || this.state.email === '' ) {
      return
    }
    const { email, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.HOME)
      })
      .catch(error => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { email, password, error } = this.state

    return (
      <form onSubmit={this.onSubmit} style={{paddingTop: "8vh"}}>
        <h3 className="t--bold t--capitalize" style={{paddingTop: "2rem"}}>{t('email')}</h3>
        <input
          className="input--no-outline"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          style={{borderWidth: 0, touchAction: "none"}}
        />
        <hr />
        <h3 className="t--bold t--capitalize" style={{paddingTop: "2rem"}}>{t('password')}</h3>
        <input
          className="input--no-outline"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          style={{borderWidth: 0, touchAction: "none"}}
        />
        <hr />
        <Button type="submit" className="b--done t--capitalize t--bold"
                style={{left: "10vw", padding: "1rem", paddingTop: "1rem", paddingBottom: "3rem",
                fontSize: "1.2rem"}}>
          {t('LOGIN')}
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase)

export default SignInPage

export { SignInForm }
