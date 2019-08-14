import React from "react";
import NavBar from "./NavBar";
import {
  oneMovie,
  setfavMovie,
  fetchUser
} from "../redux/action-creators/action-creator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

var style = { height: "100vh" };

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
    const data = {
      movie: this.props.selected,
      userid: this.props.user.userlogged.id
    };
    console.log(data);
    this.props.setfavMovie(data);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.searchMovie(this.props.movieID);
  }

  render() {
    const { selected } = this.props;
    return (
      <div style={style}>
        <button className="favbut" onClick={this.handleClick}>
          {" "}
          Add to Favourites{" "}
        </button>
        <div className="container" >
          <div className="row">
            {selected.Title ? (
              <div key={selected.imdbID}>
                <img src={selected.Poster} />
                <div>
                  <h5>
                    <span className="muestra">
                      {" "}
                      {"Title : " + selected.Title}
                    </span>
                    <div className="muestra"> {"Year : " + selected.Year}</div>
                    <div className="muestra">
                      {" "}
                      {"Actors : " + selected.Actors}
                    </div>
                    {selected.Ratings && selected.Ratings.length > 0 ? (
                      selected.Ratings.map((rating, index = 0) => (
                        <li className="muestra" key={index++}>
                          {rating.Source} : {rating.Value}
                        </li>
                      ))
                    ) : (
                      <div>Loading Movie</div>
                    )}
                  </h5>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.movies.selected,
  favmovies: state.movies.favmovies,
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  searchMovie: movieID => dispatch(oneMovie(movieID)),
  setfavMovie: data => dispatch(setfavMovie(data)),
  fetchUser: () => dispatch(fetchUser())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMovie)
);
