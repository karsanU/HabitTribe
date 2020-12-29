import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.card}>
      <Text> fsdfsdfsdfsdfsd </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    minWidth: '95%',
    height: 100,
    backgroundColor: 'blue',
  },
});
