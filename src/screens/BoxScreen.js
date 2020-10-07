import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>CHILD #1</Text>
      <Text style={styles.textTwoStyle}>CHILD #2</Text>
      <Text style={styles.textThreeStyle}>CHILD #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    alignItems: 'center',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    flex: 1,
    alignSelf: 'flex-end',
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    flex: 1,
    alignSelf: 'stretch',
  },
});
export default BoxScreen;
