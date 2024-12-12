// write by "Amrik"
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../counter/counterSlice';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function CounterScreen() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  console.log('render counter screen...');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button onPress={() => dispatch(increment())} title="Increment" />
      </View>

      <View style={styles.container}>
        <Button onPress={() => dispatch(decrement())} title="Decrement" />
      </View>

      <View style={styles.container}>
        <Button
          onPress={() => dispatch(incrementByAmount(5))}
          title="Increment 5"
        />
      </View>

      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Result : {count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
});
