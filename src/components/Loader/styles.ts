import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension'
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.white,
        width: width(60),
        paddingVertical: height(3),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius: width(5)
    }
});
export default styles;
