import { StyleSheet,Dimensions} from "react-native";
import Colors from "../../styles/color";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
    containerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    switch:{
        alignSelf: 'flex-end',
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
    },
    label: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
      },
     

   
})