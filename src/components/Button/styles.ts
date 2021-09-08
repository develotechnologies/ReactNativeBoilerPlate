import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(3),
    backgroundColor: AppColors.green,
    width: width(80),
    alignSelf: 'center',
    paddingVertical: height(1.5),
    marginTop: height(2),
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  }
});
export default styles;
