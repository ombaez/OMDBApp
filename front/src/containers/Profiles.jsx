import React from 'react'
import { connect } from 'react-redux'
import { fetchUser, getfavmovies } from '../redux/action-creators/action-creator'
import { withRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'

class Profiles extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser()
        this.props.getfavmovies(this.props.user.userlogged.id)
    }

    render() {
        return (<div>
            <div>{this.props.user.userlogged.email}</div>
            <div>{this.props.user.userlogged.id}</div>
            <div>{this.props.movies.favmovies[0] ? this.props.movies.favmovies.map((e,index=0)=>(<ul key={index++}><li>{e.movies}</li></ul>)):<h1>Loading</h1> }
            </div>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    movies: state.movies
});
const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser()),
    getfavmovies: (id) => dispatch(getfavmovies(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profiles))