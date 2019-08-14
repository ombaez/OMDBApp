import React from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'

export default class UserReg extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Login - Register</h1>
        <Link to="/user/login"><div>LOGIN</div></Link>
        <Link to="/user/register"><div>REGISTER</div></Link>
        <form>
          <button>Log Out</button>
        </form>
      </div>
    )
  }
}