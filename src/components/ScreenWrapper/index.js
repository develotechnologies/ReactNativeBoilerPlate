import React, { Fragment } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused } from '@react-navigation/native';
import AppColors from '../../utills/AppColors';
export const ScreenWrapper = ({
  children,
  statusBarColor = AppColors.white,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  contentContainerStyle = {},
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  backgroundColor = AppColors.white,
  barStyle = 'dark-content'
}) => {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (<>
      {headerUnScrollable()}
      <View style={[styles.mainViewContainer, containerViewStyle, { backgroundColor: transclucent ? AppColors.transparent : backgroundColor }]}>
        {scrollEnabled ? (
          <KeyboardAwareScrollView
            contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={height(8)}
            showsVerticalScrollIndicator={false}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
      </View>
      {footerUnScrollable()}
    </>
    )
  }
  return (
    <Fragment>
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
      {backgroundImage ? <ImageBackground source={backgroundImage} style={styles.container} resizeMode={'cover'}>
        {content()}
      </ImageBackground>
        :
        content()}
    </Fragment>
  );
};
