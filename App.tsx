import { Platform, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './test.tsx';
const Stack = createNativeStackNavigator()
const Home = () => {
  const navigation = useNavigation()
  return  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text onPress={()=> navigation.navigate('Test')}>GO TO LIST</Text>
  </View>
}
const App = () => {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Test'} component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
};

export default App;