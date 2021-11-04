import { API_SUCCESS, API_REQUEST } from '../actions';

const INITIAL_STATE = {
  questions: {},
  token: '',
  loading: true,
};

function questionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      questions: action.payload.questions,
      token: action.payload.token,
      loading: false,
    };
  case API_REQUEST:
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default questionReducer;
