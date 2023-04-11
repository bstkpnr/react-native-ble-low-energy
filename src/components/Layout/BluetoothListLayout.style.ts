import { StyleSheet,Dimensions} from "react-native";
import Colors from "../../styles/color";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
    text:{
        color:Colors.defaultWhiteColor,
        fontSize:12,
        textAlign:'center'

    },
    container:{
        backgroundColor:Colors.defaultLightColor
    }
   
})