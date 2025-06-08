// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Work from './src/components/list/Work';
import Detail from './src/components/detail/Detail';
import { WorkData } from './src/api/interface';

export type RootStackParamList = {
  Work: undefined;
  Detail: { work: WorkData; isEdit: boolean };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Work">
      <Stack.Screen name="Work" component={Work} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
