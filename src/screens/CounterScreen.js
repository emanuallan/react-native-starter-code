import React, { userState, useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase_counter':
            return { counter: state.counter + 1 };
        case "decrease_counter":
            return { counter: state.counter - 1 };
        default:
            return state;
    }

}

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ type: 'increase_counter' })}
            />
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrease_counter' })}
            />
            <Text> Current Count : {state.counter}</Text>
        </View >
    );
};

const syles = StyleSheet.create({

});

export default CounterScreen;