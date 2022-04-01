const INITIAL_STATE = {
  trainerName: ""
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
    case "GET_TRAINERNAME":
      return{
        ...state,
        trainerName: action.payload
      }
    default:
	    return state;
  }
}

export default reducer;