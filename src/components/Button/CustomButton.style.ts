import { StyleSheet,Dimensions} from "react-native";
import Colors from "./styles/color";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
    buttonText:{
        color:Colors.defaultWhiteColor,
        fontSize:12,
        textAlign:'center'

    },
    buttonContainer:{
        backgroundColor:Colors.defaultBlueColor,
        height:48,
        width:338,
        borderRadius:10,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center'
    }
   
})