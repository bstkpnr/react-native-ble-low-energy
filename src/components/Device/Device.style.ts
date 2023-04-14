import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../styles/color';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: Colors.defaultGreyColor,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  name: {
    fontSize:14
  },
  iconLeft: {
    width: 20,
    height: 20,
  },
});
