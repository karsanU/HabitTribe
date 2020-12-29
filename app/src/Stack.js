import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Habits"
        component={Home}
        options={{title: 'My Habits'}}
      />
    </Stack.Navigator>
  );
};
