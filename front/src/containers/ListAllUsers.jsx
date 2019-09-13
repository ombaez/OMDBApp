import React from "react";
import NavBar from "../components/NavBar";
import {
  listAllUsers,
  fetchUser
} from "../redux/action-creators/action-creator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ListAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.handleClick = this.handleClick.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  handleClick() {
    const data = {
      movie: this.props.selected,
      userid: this.props.user.userlogged.id
    };
    console.log(data);
    this.props.setfavMovie(data);
  }

  deleteUser(e) {
    axios.delete("/user/delete ", { e }).then(data => console.log(data));
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.listAllUsers();
  }

  render() {
    console.log(this.props.user.allUsers);
    const { selected } = this.props;
    return (
      <div className="container-fluid">
        {this.props.user.allUsers
          ? this.props.user.allUsers.map((e, index = 0) => (
              <div key={index++} style={{ width: "100vw", height: "100vh" }}>
                <li>
                  {e.email + e.id}{" "}
                  <button onClick={() => this.deleteUser(e.id)}>
                    Eliminar
                  </button>
                </li>
              </div>
            ))
          : null}
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
  fetchUser: () => dispatch(fetchUser()),
  listAllUsers: () => dispatch(listAllUsers())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListAllUsers)
);
