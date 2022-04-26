import * as React from 'react';

import {
  Button,
  Linking
} from 'react-native';

import SearchScreen from "./src/screens/SearchScreen";
import WordDetailsScreen from './src/screens/WordDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY_COLOR } from './src/constants/styles';

const Stack = createNativeStackNavigator();

const openWhatsAppLink = (ikun, translation) => {
  let message = "Quiero sugerir una nueva palabra, esta es:\n"
  let whatsappLink = "https://api.whatsapp.com/send?phone=573203888113&text=" + encodeURIComponent(message)
  Linking.openURL(whatsappLink);
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Diccionario Ikʉn">
        <Stack.Screen
          name="Diccionario Ikʉn"
          component={SearchScreen}
          options={
            {
              headerTitleStyle: {
                fontFamily: "CircularStd-Book"
              },
              headerRight: () => (
                <Button
                  onPress={() => openWhatsAppLink()}
                  title="Sugerir palabra"
                  color={PRIMARY_COLOR}
                />
              )
            }
          }
        />
        <Stack.Screen
          name="Significado"
          component={WordDetailsScreen}
          options={
            {
              headerTitleStyle: {
                fontFamily: "CircularStd-Book"
              },
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
