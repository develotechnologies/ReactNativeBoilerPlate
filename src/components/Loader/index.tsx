import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import AppColors from '../../utills/AppColors';
import styles from './styles'
export default function Loader() {
  const isLoaderVisible = useSelector((state) => state.Config.isLoaderVisible);
  return (
    <Modal isVisible={isLoaderVisible} backdropOpacity={0.4}>
      <View style = {styles.container}>
        <ActivityIndicator size="large" color={AppColors.black} />
      </View>
    </Modal>
  );
}
