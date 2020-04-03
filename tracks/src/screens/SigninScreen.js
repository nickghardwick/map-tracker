import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

let SigninScreen = function() {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage=""
                onSubmit={() => {}}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SigninScreen;