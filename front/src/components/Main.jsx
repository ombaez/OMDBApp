import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import Header from "../containers/Header";
import SingleMovie from "./SingleMovie";
import UserReg from "./UserReg";
import Login from "../containers/Login";
import Register from "./Register";
import { connect } from "react-redux";
import { fetchUser } from "../redux/action-creators/action-creator";
import Profiles from "../containers/Profiles";
import ListAllUsers from "../containers/ListAllUsers";
import Footer from "./Footer";
import ListItems from "./ListItems";
import Carousel from "./Carousel";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchUser().then(res => console.log(res));
    console.log("monta");
  }

  render() {
    return (
      <div id="appContainer" className="container-fluid">
        <Route
          render={({ history }) => (
            <Header user={this.props.user.userlogged} history={history} />
          )}
        />
        <Switch>
          <Route exact path={"/"} render={() => <Carousel />} />
          <Route
            exact
            path={"/search"}
            render={() => <ListItems movies={this.props.result} />}
          />
          <Route
            exact
            path={"/movies/:id"}
            render={({ match }) => <SingleMovie movieID={match.params.id} />}
          />
          <Route exact path={"/user"} render={() => <UserReg />} />
          <Route
            exact
            path={"/user/login"}
            render={({ history }) => <Login history={history} />}
          />
          <Route
            exact
            path={"/user/register"}
            render={({ history }) => <Register history={history} />}
          />
          <Route
            exact
            path={"/user/profile/"}
            render={({ match }) => <Profiles userid={match.params.id} />}
          />
          <Route
            exact
            path={"/user/listAllUsers/"}
            render={() => <ListAllUsers />}
          />
          <Route exact path={"/modal"} render={() => <Modal />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.movies.title,
  result: state.movies.list,
  movies: state.movies,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  receiveSearchTitle: input => dispatch(receiveSearchTitle(input)),
  searchMovies: movies => dispatch(searchMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
