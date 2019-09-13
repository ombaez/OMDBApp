import { connect } from "react-redux";
import React, { PureComponent } from "react";
import Home from "../components/Home";

class HomeContainer extends React.Component {
  render() {
    return <Home />;
  }
}

export default connect(
  null,
  null
)(HomeContainer);
