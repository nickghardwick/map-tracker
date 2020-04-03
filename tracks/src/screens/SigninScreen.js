import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

let SigninScreen = function() {
    let {state, signin} = useContext(Context);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    headerShown: false,
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SigninScreen;