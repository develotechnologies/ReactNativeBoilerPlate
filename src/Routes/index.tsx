import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Log from '../screens/Log';
import Dashboard from '../screens/Dashboard';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader'
type RootStackParamList = {
  Login: undefined,
  Dashboard: undefined,
  Log: undefined
};
const RootStack = createStackNavigator<RootStackParamList>();
export interface Props {
}
const Routes: React.FC<Props> = (props) => {
  const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <RootStack.Navigator initialRouteName="Login" headerMode="none">
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Log" component={Log} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator initialRouteName="Dashboard" headerMode="none">
          <RootStack.Screen name="Dashboard" component={Dashboard} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes