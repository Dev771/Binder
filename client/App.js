import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingScreen from './src/Screens/OnBoardingScreen/OnBoardingScreen';
import TabNavigation from './src/Components/StackNavigation/TabNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OnBoarding Screen' component={OnBoardingScreen} ></Stack.Screen>
            <Stack.Screen name='MainComponent' component={TabNavigation}></Stack.Screen>
          </Stack.Navigator>
          <StatusBar hidden />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
