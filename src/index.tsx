import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home/Home';
import DeviceList from './pages/DeviceList';

const Stack = createStackNavigator();

function StackApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DeviceList" component={DeviceList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackApp;
