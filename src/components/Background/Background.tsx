import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Background.style'

const Background: React.FC = () => {
    return (
        <View style={styles.background}>
        <LinearGradient
          colors={['#FFC371', '#FF5F6D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.circleGradient}
        >
        </LinearGradient>
      </View>
    );
  };
  
    
    
    


export default Background;

