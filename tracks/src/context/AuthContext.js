import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = function(dispatch) {
    return ({email, password}) => {
        // Sign Up
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
    {isSignedIn: false}
);