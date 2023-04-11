import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import styles from './BluetoothListLayout.style'

type Props={
    text:string;
    children:ReactNode
}



const Layout:React.FC<Props>=({text,children}:Props)=>{
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.text}>{text}</Text>
                {children}
            </View>
        </View>
    )
}

export default Layout;