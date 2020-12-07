import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: Colors.white
  }
});
export default styles;
