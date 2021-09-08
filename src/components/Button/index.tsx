import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export interface Props {
  title: string;
  onPress: () => void,
  disabled?: boolean,
  isLoading?: boolean,
  loaderColor?: string,
  activeOpacity?: number,
  containerStyle?: object,
  textStyle?: object,
}
const Button = ({ loaderColor = AppColors.white, activeOpacity = 0.7,
  containerStyle = {}, textStyle = {}, onPress = () => { }, disabled = false, isLoading = false, title = '' }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

export default Button;
