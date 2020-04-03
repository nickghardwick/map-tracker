import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ""};
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signup =  function(dispatch) {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('TrackList');
        } catch (e) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    };
};

const signin = function(dispatch) {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('TrackList');
        } catch (e) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            })
        }
    };
};

const signout = function(dispatch) {
    return () => {
        // Sign Out
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage},
    {token: null, errorMessage: ''}
);