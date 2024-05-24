
const initialState = {
  globalObject: {}
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_GLOBAL_OBJECT':
      return {
        ...state,
        globalObject: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;