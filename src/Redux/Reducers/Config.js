import {SETLOADERVISIBLE} from '../Types';
const intialState = {
  isLoaderVisible: false,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SETLOADERVISIBLE: {
      return {
        ...state,
        isLoaderVisible: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
