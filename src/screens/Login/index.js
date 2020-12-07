import React, {Fragment} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import styles from './styles';
import Button from '../../components/Button/Button.component';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../Redux/Actions/Auth';
import Colors from '../../utills/Colors';
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.green} />
      <SafeAreaView
        style={(styles.container, {backgroundColor: Colors.green})}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainViewContainer}>
          <Text> Login</Text>
          <Button
            title="Login"
            onPress={() => dispatch(login({userName: 'John Doe'}))}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: Colors.green}} />
    </Fragment>
  );
}
