import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

let SignupScreen = function({navigation}) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sign Up for Tracker!</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer>
            <Button title="Sign Up" />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    }
});

export default SignupScreen;