import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function ContinueButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

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