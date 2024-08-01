import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home,{HomeScreenOptions} from './Home';
import Blog,{BlogScreenOptions}from './Blog';
import Search from './Search';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator  >
      <Stack.Screen  name="Home" component={Home} options={HomeScreenOptions}></Stack.Screen>
      <Stack.Screen  name ="Blog" component={Blog} options={BlogScreenOptions}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
