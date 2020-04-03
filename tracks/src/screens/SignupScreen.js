import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

let SignupScreen = function({navigation}) {
    let {state, signup} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({email, password}) => signup({email, password})}
            />

            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead"
            />
        </View>
    );
};

SignupScreen.navigationOptions = {
    headerShown: false,
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SignupScreen;