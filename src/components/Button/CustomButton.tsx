import React from 'react';
import {Text, TouchableOpacity, View,ViewStyle,StyleProp} from 'react-native';
import styles from './CustomButton.style';

type Props = {
  text: string;
  onPress: () => void;
  disabled:boolean;
  buttonStyle:StyleProp<ViewStyle>;
};

const CustomButton: React.FC<Props> = ({text, onPress,disabled,buttonStyle}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer,buttonStyle]} disabled={disabled}>
      <View style={{flex: 1}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
