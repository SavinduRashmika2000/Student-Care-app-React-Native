import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Divider, PaperProvider,Text } from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native-web';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <PaperProvider>
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
