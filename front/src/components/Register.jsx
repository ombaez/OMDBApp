import React from "react";
import { connect } from "react-redux";
import { userAdd } from "../redux/action-creators/action-creator";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e)
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.userAdd(user).then(this.props.history.push("/user/login"));
  }
  handleClick(e) {
    this.handleSubmit();
  }

  render() {
    return (
      <div className="container" id="registerContainer">
        <strong>Register</strong>
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                onChange={(e)=>this.handleChange(e)}
                type="text"
                className="validate"
                name='email'
              />
              <label htmlFor="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                name='password'
                onChange={(e)=>this.handleChange(e)}
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <a onClick={(e)=>this.handleSubmit(e)}className="waves-effect waves-light btn">button</a>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  userAdd: user => dispatch(userAdd(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
