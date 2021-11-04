import { SEND_LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  gravatarEmail: '',
  name: '',
};

function userInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_LOGIN_INFO:
    return ({
      ...state,
      gravatarEmail: action.loginInfo.gravatarEmail,
      name: action.loginInfo.name,
    });
  default:
    return state;
  }
}

export default userInformation;
