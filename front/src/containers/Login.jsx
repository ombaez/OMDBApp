import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../redux/action-creators/action-creator";
import NavBar from "../components/NavBar";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state,'login')
  }
  handleSubmit(e) {
    e.persist();
    const user = this.state;
    this.props.userLogin(user).then(()=> {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(userLogin(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
