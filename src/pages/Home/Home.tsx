import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Navigation} from '../../types';
import Feather from 'react-native-vector-icons/Feather';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import styles from './Home.style';

type Props = {
  navigation: Navigation;
};

function Home({navigation}: Props) {
    const handlePress=()=>{

        navigation.navigate('DeviceList')
    }
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.dot, styles.center]}>
          {[...Array(3).keys()].map(index => {
            return (
              <MotiView
                from={{opacity: 1, scale: 1}}
                animate={{opacity: 0, scale: 4}}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  repeatReverse: false,
                  loop: true,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            );
          })}

          <Feather name="bluetooth" size={32} color={'#fff'} />
        </View>
      </View>
      <View style={{bottom:100}}>
        <TouchableOpacity style={styles.touchContainer} onPress={handlePress}>
          <Text style={{textAlign: 'center'}}>Hello</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
