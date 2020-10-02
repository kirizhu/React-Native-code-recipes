import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_counter':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease_counter':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        onPress={() => {
          // setCounter(counter + 1);
          dispatch({ type: 'increase_counter', payload: INCREMENT });
        }}
        title='Increase'
      />
      <Button
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({ type: 'decrease_counter', payload: INCREMENT });
        }}
        title='Decrease'
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
