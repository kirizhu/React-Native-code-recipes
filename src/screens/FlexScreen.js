import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    // marginTop:50,
    alignSelf: 'flex-end',
    // top: 50,
  },
  viewThreeStyle: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
  },
});
export default FlexScreen;
