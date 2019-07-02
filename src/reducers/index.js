

const mainReducer = (state, action) => {
  if(action.type === "LOAD_USER"){
    return {
      ...state,
      user: action.user
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
