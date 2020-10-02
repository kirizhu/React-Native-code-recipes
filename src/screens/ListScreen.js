import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 22 },
    { name: 'Friend #3', age: 25 },
    { name: 'Friend #4', age: 29 },
    { name: 'Friend #5', age: 34 },
    { name: 'Friend #6', age: 40 },
    { name: 'Friend #7', age: 47 },
    { name: 'Friend #8', age: 55 },
    { name: 'Friend #9', age: 64 },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
