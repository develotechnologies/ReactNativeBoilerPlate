import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { showMessage } from 'react-native-flash-message';
import { setLoaderVisible } from '../../Redux/Actions/Config';
export interface Props {
  route: any,
  navigation: any
}
const Login: React.FC<Props> = ({ route, navigation }: Props) => {
  console.log(route?.params?.item);

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
    <ScreenWrapper statusBarColor={AppColors.white}>
      <View style={styles.mainViewContainer}>
        <Text> Login</Text>
        <Button title="Log ka log" onPress={loginMethod} />
      </View>
    </ScreenWrapper>
  );
}
export default Login

