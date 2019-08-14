import React from "react";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { receiveSearchTitle } from "../redux/action-creators/action-creator";
import { searchMovies } from "../redux/action-creators/action-creator";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      result: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.historyFunc = this.historyFunc.bind(this);
  }

  handleChange(e) {
    var val = e.target.value;
    this.props.receiveSearchTitle(val);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMovies(this.props.title);
    this.props.history.push("/search");
  }

  historyFunc(e) {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <NavBar
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
          userCheck={this.props.user}
          historyFunc={this.historyFunc}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.movies.title,
  result: state.movies.list,
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  receiveSearchTitle: input => dispatch(receiveSearchTitle(input)),
  searchMovies: movies => dispatch(searchMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
