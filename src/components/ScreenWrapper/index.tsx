import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused } from '@react-navigation/native';
import AppColors from '../../utills/AppColors';
import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react';
export interface Props {
  children: React.ReactNode,
  transclucent?: boolean,
  scrollEnabled?: boolean,
  statusBarColor?: string,
  backgroundImage?: any,
  headerUnScrollable?: () => void,
  footerUnScrollable?: () => void,
  barStyle?: string
}
const ScreenWrapper = ({
  children,
  statusBarColor = AppColors.green,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  barStyle = 'dark-content'
}: Props) => {
  function FocusAwareStatusBar(props: any) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (<View style={styles.container}>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView
          style={(styles.container, { backgroundColor: statusBarColor })}
        />
      )}
      {headerUnScrollable()}
      {scrollEnabled ? (
        <KeyboardAwareScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
      {footerUnScrollable()}
    </View>)
  }
  return (
    backgroundImage ? <ImageBackground source={backgroundImage} style={styles.container} resizeMode={'cover'}>
      {content()}
    </ImageBackground>
      :
      content()
  );
};

export default ScreenWrapper;
