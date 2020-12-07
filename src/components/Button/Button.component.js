import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Button.Styles';

const Component = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>);
};

export default Component;
