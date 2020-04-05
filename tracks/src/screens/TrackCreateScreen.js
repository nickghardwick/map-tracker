import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';

let TrackCreateScreen = function() {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;