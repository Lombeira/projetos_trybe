export const SEND_EMAIL_ADDRESS = 'SEND_EMAIL_ADDRESS';
export const API_SUCCESS = 'API_SUCCESS';
export const ADD_NEW_TRANSACTION = 'ADD_NEW_TRANSACTION';

export const addEmailAddress = (emailAddress) => ({
  type: SEND_EMAIL_ADDRESS,
  emailAddress,
});

export const apiSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data,
});

export const addNewTransaction = (payload) => ({
  type: ADD_NEW_TRANSACTION,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(apiSuccess(data));
  } catch (error) {
    console.log(error.message);
  }
};
