import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import HabitPreview from './../components/HabitPreview';
export default () => {
  return (
    <ScrollView contentContainerStyle={styles.habitsContainer}>
      <HabitPreview />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  habitsContainer: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
