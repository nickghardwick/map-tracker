import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
};

const signup =  function(dispatch) {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            console.log(response.data);
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
    {isSignedIn: false, errorMessage: ''}
);