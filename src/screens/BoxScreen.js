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
    flexDirection: 'row',
    height: 100,
    justifyContent: 'flex-start',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 2,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 3,
  },
});
export default BoxScreen;
