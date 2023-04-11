import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CustomButton.style';

type Props = {
  text: string;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
