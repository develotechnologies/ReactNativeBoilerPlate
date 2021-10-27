import React from 'react';
import { Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import BGImage from '../../assets/images/bg.jpg';
import Button from '../../components/Button';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
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
