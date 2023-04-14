import { StyleSheet,Dimensions} from "react-native";
import Colors from "../../styles/color";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
    buttonText:{
        color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign:'center'
    },
    buttonContainer:{
        height:48,
        width:338,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: '#FF6347', // arkaplan rengi
        paddingVertical: 12, // yatay boşluk
        paddingHorizontal: 24, // dikey boşluk
        borderRadius: 25, // kenar yarıçapı
        justifyContent: 'center',
    }
   
})