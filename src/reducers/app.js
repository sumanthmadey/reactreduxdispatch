import { APP_LOAD } from 'constants/action-types';

const initialState = {
  loaded: false,
  message:"sumanth is a good person"
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true,message:initialState.message};
      case "ADD_TODO":
      return { ...state, loaded: true,message:action.text };
    default:
      return state;
  }
}
