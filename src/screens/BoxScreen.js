import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}></View>
            <View style={styles.boxThree}></View>

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    boxOne: {
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    boxTwo: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        alignSelf: 'flex-end'
    },
    boxThree: {
        backgroundColor: 'purple',
        height: 50,
        width: 50
    }
});

export default BoxScreen;