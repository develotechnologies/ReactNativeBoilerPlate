import React from 'react';
import { Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { login } from '../../Redux/Actions/Auth';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const loginMethod = () => {
    dispatch(setLoaderVisible(true));
    setTimeout(() => {
      showMessage({
        message: 'Success',
        description: 'Succfully logged In',
        type: 'success',
      });
      dispatch(setLoaderVisible(false));
      dispatch(login({ userName: 'John Doe' }));
    }, 1500);
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.white} barStyle='dark-content'>
      <View style={styles.mainViewContainer}>
        <Text> Login</Text>
        <Button title="Login" onPress={loginMethod} />
      </View>
    </ScreenWrapper>
  );
}
