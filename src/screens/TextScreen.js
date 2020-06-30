import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View>
            <Text> Enter name:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={name}
                onChangeText={(newVal) => setName(newVal)}
            />
            <Text> Hello my name is {name}</Text>


            <Text> Enter password:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={pass}
                onChangeText={(newVal) => setPass(newVal)}
                secureTextEntry={true}
            />

            {pass.length > 5 ? null : <Text>Pass must be > 5 in length</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

});

export default TextScreen;