import React from 'react'

import { PasswordForgetForm } from 'components/PasswordForget'
import PasswordChangeForm from 'components/PasswordChange'
import { AuthUserContext, withAuthorization } from 'Session'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
)

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(AccountPage)
