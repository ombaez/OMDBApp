import axios from 'axios';
import { LIST_ALLUSERS, RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_SEARCH, RECEIVE_FAVMOVIES, SET_USER, CREATE_USER, RECEIVE_ID, RECEIVE_FAVMOVIESDB,CREATE_USERCHECK } from '../constants';


export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const listUsers = (users) => ({
  type: LIST_ALLUSERS,
  users,
});

export const receiveFavMovies = (favmovies) => ({
  type: RECEIVE_FAVMOVIES,
  favmovies,
});

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const receiveSearchTitle = (title) => ({
  type: RECEIVE_SEARCH,
  title
});

export const receiveSearchId = (id) => ({
  type: RECEIVE_ID,
  id
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
})

export const createUser = (user) => ({
  type: CREATE_USER,
  userCheck,
})

export const userCheck = (check) => ({
  type: CREATE_USER,
  check,
})

export const userAddCheck = () => ({
  type: CREATE_USERCHECK,
  userAddcheck,
})

export const searchMovies = input => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${input}`)
    .then(res => res.data.Search)
    .then(movies => dispatch(receiveMovies(movies)))

export const oneMovie = idInput => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${idInput}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)))

export const setfavID = data => dispatch => {
  return axios.post('/user/addfav', data)
    .then(data => {
      return data.data
    })
    .then(id => dispatch(receiveSearchId(id)))
}

export const getfavmovies = id => dispatch => {
  axios.post('/usuarios/getfav',{ id } )
    .then(res => {
      return res.data[0].favourites})
    .then(fav => dispatch(receiveFavMovies(fav)))
}

export const userLogin = user => dispatch => {
  return axios.post('/usuarios/login', user)
    .then(res => 
      dispatch(setUser(res.data)))
  }

export const fetchUser = () => dispatch => {
  return axios.get('/usuarios/me')
    .then(res => {
      return res.data
    })
    .then(user => {
      dispatch(setUser(user));
    });
};

export const listAllUsers = () => dispatch => {
  return axios.get('/usuarios/listAll')
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .then(users => {
      dispatch(listUsers(users));
    });
};

export const userAdd = user => dispatch => {
  return axios.post('/usuarios/register', user)
    .then(data => {
      console.log(data.data)
      return dispatch(createUser(data))
    }
    )
}

export const setfavMovie = data => dispatch => {
  return axios.post('/favoritos', data)
    .then(data => {
      return data.data.movies
    })
    .then(movieTitle => dispatch(receiveSearchId(movieTitle)))
}



