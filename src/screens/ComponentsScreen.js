import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const text = 'My name is Allan';

    return (
        <View>
            <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
            <Text style={styles.subStyle}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subStyle: {
        fontSize: 15
    }
});

export default ComponentsScreen;