import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

let SignupScreen = function({navigation}) {
    return (
        <>
            <Text style={{fontSize: 48}}>Sign Up Screen</Text>
            <Button
                title="Go to Sign In"
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title="Go to Main Flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;