import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import Home from '../components/Home'


class HomeContainer extends React.Component {

    render(){
        return(
            <Home />
        )
    }
    componentDidMount() {
        // console.log('MONTADOOO')
        // this.props.fetchHardcodedMovies()
    }
}

const mapStateToProps = function (state) {
    return {
        hardcodedMovies: state.movies.hardcodedMovies
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        // fetchHardcodedMovies: () => dispatch(fetchHardcodedMovies())
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)