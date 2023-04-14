import React, { useEffect, useState } from "react";
import {StyleSheet, View,TouchableOpacity,Text, PermissionsAndroid} from 'react-native'
import {BleManager} from 'react-native-ble-plx';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import Layout from "../../components/Layout/BluetoothListLayout";
import Device from "../../components/Device/Device";



const manager=new BleManager();

const requestPermisson=async():Promise<boolean>=>{
    const granted=await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Request for Location Permission',
            message: 'Bluetooth Scanner requires access to Fine Location Permission',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
    );
    return granted===PermissionsAndroid.RESULTS.GRANTED;
};



const  DeviceList=():JSX.Element=>{
    const [logData,setLogData]=useState<string[]>([]);
    const [scanDevices,setScanDevices]=useState<{[key:string]:any}>({});
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [isEnabled,setIsEnabled]=useState(false);

    useEffect(()=>{
        const subs=manager.onStateChange(async (state)=>{
            console.log(state);
            const newLogData=[...logData];
            newLogData.push(state);
            await setLogData(newLogData);
        },true);
        return()=>subs.remove();
    },[logData]);

    const onBluetooth=async()=>{
        const btState=await manager.state();
        if(btState === 'Unsupported'){
            console.log('Bluetooth is not supported');
            setIsEnabled(false);
            return false;
        }
        if(btState !== 'PoweredOn'){
            await manager.enable();
            setIsEnabled(true);
        }
        else {
            await manager.disable();
            setIsEnabled(false);
            manager.stopDeviceScan();
        }
    };

    const scanBluetoothDevice=async ()=>{
        const btState=await manager.state();
        if(btState !== 'PoweredOn'){
            console.log("Bluetooth is not poweredon");
            return false;
        }
        const permission=await requestPermisson();

        if(isEnabled && permission){
            manager.startDeviceScan(null,null,async (error,device)=>{
                if(error){
                    console.log(error);
                    return;
                }
                if(device){
                    console.log(`${device.name} (${device.id})`);
                    const newScanDevices={...scanDevices};
                    newScanDevices[device.id]=device;
                    await setScanDevices(newScanDevices);
                }
            });
        }
        return true;
    }

    const renderItem=({item}:any)=>{
        return(
            <Device {...item} iconLeft={require('../../../assets/img/bluetooth.png')}  />
        )
    }



    return(
        <View></View>
    )
}

export default DeviceList;

