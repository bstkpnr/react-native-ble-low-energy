import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  Button,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import Layout from '../../components/Layout/BluetoothListLayout';
import Device from '../../components/Device/Device';
import styles from './DeviceList.style';
import CustomButton from '../../components/Button/CustomButton';
import LinearGradient from 'react-native-linear-gradient';

const manager = new BleManager();

const requestPermisson = async (): Promise<boolean> => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Request for Location Permission',
      message: 'Bluetooth Scanner requires access to Fine Location Permission',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const DeviceList = (): JSX.Element => {
  const [logData, setLogData] = useState<string[]>([]);
  const [scanDevices, setScanDevices] = useState<{[key: string]: any}>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const subs = manager.onStateChange(async state => {
      console.log(state);
      const newLogData = [...logData];
      newLogData.push(state);
      await setLogData(newLogData);
    }, true);
    return () => subs.remove();
  }, [logData]);

  const onBluetooth = async () => {
    const btState = await manager.state();
    if (btState === 'Unsupported') {
      console.log('Bluetooth is not supported');
      setIsEnabled(false);
      return false;
    }
    if (btState !== 'PoweredOn') {
      await manager.enable();
      setIsEnabled(true);
    } else {
      await manager.disable();
      setIsEnabled(false);
      manager.stopDeviceScan();
    }
  };
  const scanBluetoothDevice = async () => {
    const btState = await manager.state();
    if (btState !== 'PoweredOn') {
      console.log('Bluetooth is not powered on');
      return false;
    }
    const permission = await requestPermisson();
    if (isEnabled && permission) {
      manager.startDeviceScan(null, null, async (error, device) => {
        if (error) {
          console.log(error);
          return;
        }
        if (device) {
          console.log(`${device.name} (${device.id})`);
          const newScanDevices = {...scanDevices};
          newScanDevices[device.id] = device;
          await setScanDevices(newScanDevices);
        }
      });
    }
    return true;
  };

  const renderItem = ({item}: any) => {
    return (
      <Device
        {...item}
        name={`${item.name} (${item.id})`}
        iconLeft={require('../../../assets/img/bluetooth.png')}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
  <LinearGradient
colors={isEnabled ? ['#4F6D7A', '#A7B6C7'] : ['#4F6D7A', '#A7B6C7', '#C2CAD0']}
style={{ flex: 1 }}
>
    <View style={{ padding: 10 }}>
    <SwitchButton
  label={isEnabled ? 'ON' : 'OFF'}
  value={isEnabled}
  onValueChange={(value) => setIsEnabled(value)}
  disabled={isLoading}
  labelStyle={{ color: isEnabled ? '#FF6347' : '#C2CAD0' }}/>
<CustomButton
  text="Scan"
  onPress={scanBluetoothDevice}
  disabled={!isEnabled || isLoading}
  buttonStyle={{ backgroundColor: isEnabled ? '#FF6347' : '#C2CAD0'  }}
/>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      />
      {isLoading && <ActivityIndicator size="large" color="#fff" />}
      <FlatList
        data={Object.values(scanDevices)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ marginTop: 20, color: '#fff' }}>
            No devices found
          </Text>
        }
      />
    </View>
  </LinearGradient>
</View>


  );
};

export default DeviceList;
