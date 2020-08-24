import { toast } from 'react-toastify';

import {
  registrationRequest,
  authenticationRequest,
  verificationRequest,
  resendVerificationRequest,
  updateUserDetailsRequest,
} from '../../api/auth';

import { setToken, encodeUserObject } from '../../api/helpers';

const REGISTRATION_PROCCESS = 'REGISTRATION_PROCCESS';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
const AUTHENTICATION_PROCCESS = 'AUTHENTICATION_PROCCESS';
const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
const VERIFICATION_PROCCESS = 'VERIFICATION_PROCCESS';
const VERIFICATION_SUCCESS = 'VERIFICATION_SUCCESS';
const VERIFICATION_ERROR = 'VERIFICATION_ERROR';
const RESEND_VERIFICATION_PROCCESS = 'RESEND_VERIFICATION_PROCCESS';
const RESEND_VERIFICATION_SUCCESS = 'RESEND_VERIFICATION_SUCCESS';
const RESEND_VERIFICATION_ERROR = 'RESEND_VERIFICATION_ERROR';

export const register = (user, history, redirectUrl) => async dispatch => {
  try {
    dispatch({ type: REGISTRATION_PROCCESS });
    const { data } = await registrationRequest(user);
    setToken(data.data.token);
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: { user: data.data, email: user.email },
    });
    toast.success(
      'Account successfully created. Please check your email to verify your account',
    );
    history.push(redirectUrl);
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: REGISTRATION_ERROR, payload: error.response.data });
  }
};

export const authenticate = (user, history, redirectUrl) => async dispatch => {
  try {
    dispatch({ type: AUTHENTICATION_PROCCESS });
    const { data } = await authenticationRequest(user);
    setToken(data.data.token);
    encodeUserObject(data.data.authenticatedUser);
    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: data.data.authenticatedUser,
    });
    toast.success('You have been logged in successfully');
    history.push(redirectUrl);
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: AUTHENTICATION_ERROR, payload: error.response.data });
  }
};

export const verify = (code, history, redirectUrl) => async dispatch => {
  try {
    dispatch({ type: VERIFICATION_PROCCESS });
    await verificationRequest(code);
    dispatch({ type: VERIFICATION_SUCCESS });
    toast.success('Your Account has been activated');
    history.push(redirectUrl);
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: VERIFICATION_ERROR, payload: error.response.data });
  }
};

export const resendVerificationCode = () => async dispatch => {
  try {
    dispatch({ type: RESEND_VERIFICATION_PROCCESS });
    await resendVerificationRequest();
    dispatch({ type: RESEND_VERIFICATION_SUCCESS });
    toast.success('Verification code has ben sent to your mail');
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: RESEND_VERIFICATION_ERROR, payload: error.response.data });
  }
};

const DEFAULT_STATE = {
  error: {},
  isLoading: false,
  status: undefined,
  loggedInUser: null,
  unverifiedEmail: '',
};

export const authReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case REGISTRATION_PROCCESS:
    case AUTHENTICATION_PROCCESS:
    case VERIFICATION_PROCCESS:
    case RESEND_VERIFICATION_PROCCESS:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTRATION_SUCCESS:
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: 'success',
        loggedInUser: payload.user,
        unverifiedEmail: payload.email,
      };
    case VERIFICATION_SUCCESS:
    case RESEND_VERIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTRATION_ERROR:
    case AUTHENTICATION_ERROR:
    case VERIFICATION_ERROR:
    case RESEND_VERIFICATION_ERROR:
      return {
        ...state,
        isLoading: false,
        status: 'error',
        error: payload,
      };
    default:
      return state;
  }
};
