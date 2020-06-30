import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Images Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Colors Demo"
        onPress={() => navigation.navigate('Colors')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to TextScreen Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to BoxScreen Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30
  }
});

export default HomeScreen;
