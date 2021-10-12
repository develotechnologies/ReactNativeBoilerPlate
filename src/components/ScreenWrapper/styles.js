import { StyleSheet } from 'react-native';
import { height } from 'react-native-dimension'
import AppColors from '../../utills/AppColors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: height(2)
  },
});
export default styles;
