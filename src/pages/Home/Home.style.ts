import { StyleSheet,Dimensions} from "react-native";
import Colors from "../../styles/color";
const deviceSize=Dimensions.get('window');
const _color='#0A58CA';
const _size=100;
export default StyleSheet.create({
    dot:{
        width:_size,
        height:_size,
        borderRadius:_size,
        backgroundColor:_color
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    touchContainer:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    }
})