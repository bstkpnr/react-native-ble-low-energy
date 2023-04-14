import React from 'react'
import { ImageSourcePropType, View ,TouchableOpacity,Image,Text} from 'react-native'
import styles from './Device.style'

interface Props {
    onPress:()=>void;
    iconLeft:ImageSourcePropType;
    name:string;
}



const Device:React.FC<Props>=({onPress,iconLeft,name})=>{
    return(
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            <View style={styles.wrapperLeft}>
                <Image style={styles.iconLeft} source={iconLeft} />
            </View>
            <View style={styles.wrapperName}>
                <Text style={styles.name}>{name}</Text>
            </View>

        </TouchableOpacity>

    )
}

export default Device;