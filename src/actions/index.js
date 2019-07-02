import axios from 'axios';

export function loadUser(){
  return(dispatch) => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      dispatch(fetchUser(res.data.slice(0, 4)));
    })
  }
}

export function fetchUser(user){
  return {
    type: "LOAD_USER",
    user:user
  }
}
