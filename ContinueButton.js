//Necessary Imports
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// Creates and exports the continue button function
export default function ContinueButton(props) {
  // Const which stores information about the continue button
  const { onPress, title = 'Save' } = props;
  // Returns the actual elements of the continue button
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

// Styles for the continue button
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c62f4e',
    borderRadius: 30,
    width: 250,
    height: 60,
    justifyContent: 'center',
    top: '60%'
  },
  text: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center'
  },
});