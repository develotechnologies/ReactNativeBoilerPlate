import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/Auth';
import BGImage from '../../assets/images/bg.jpg';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { showMessage } from 'react-native-flash-message';
import { ApiManager } from '../../backend/ApiManager'
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    const response = await ApiManager.getData(`https://reactnative.dev/movies.json`)
    if (response?.ok)
      console.log(response.data);
    else
      console.log("Error", response.error)
    // showMessage({
    //   message: 'Logged Out',
    //   description: 'Succfully logged out',
    //   type: 'danger',
    // });
    // dispatch(logout());
  };
  return (
    <ScreenWrapper backgroundImage={BGImage} transclucent statusBarColor={AppColors.transparent} barStyle="light-content">
      <View style={styles.mainViewContainer}>
        <Text style={styles.text}>Dashboard</Text>
        <Text style={styles.text}>{user.userName}</Text>
        <Button title="Logout" onPress={logoutMethod} />
      </View>
    </ScreenWrapper>
  );
}
