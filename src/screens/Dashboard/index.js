import React, {Fragment} from 'react';
import {View, Text, StatusBar, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import Button from '../../components/Button/Button.component';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Redux/Actions/Auth';
import Colors from '../../utills/Colors';
import BGImage from '../../assets/images/bg.jpg'
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.green}
      />
      <SafeAreaView
        style={(styles.container, {backgroundColor: Colors.green})}
      />
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.mainViewContainer}
        source = {BGImage}>
          <Text style = {styles.text}>Dashboard</Text>
          <Text style = {styles.text}>{user.userName}</Text>
          <Button title="Logout" onPress={() => dispatch(logout())} />
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: Colors.green}} />
    </Fragment>
  );
}
