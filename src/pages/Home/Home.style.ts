import { StyleSheet,Dimensions} from "react-native";
import Colors from "../../styles/color";
const deviceSize=Dimensions.get('window');
const _color='#0A58CA';
const _size=80;
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
        flex: 1, alignItems: 'center', justifyContent: 'center',
        top:100
       
    },
    touchContainer:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    },
    text:{
        fontFamily:'Kanit-SemiBold',
        textAlign:'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFC371',
        marginTop: 50,
        marginBottom: 20,
    }
})