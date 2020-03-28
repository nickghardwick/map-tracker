import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

const signup =  function(dispatch) {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            navigate('TrackList');
        } catch (e) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    };
};

const signin = function(dispatch) {
    return ({email, password}) => {
        // Sign In
    };
};

const signout = function(dispatch) {
    return () => {
        // Sign Out
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
);