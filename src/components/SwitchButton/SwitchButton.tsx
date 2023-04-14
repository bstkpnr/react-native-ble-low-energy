import React from 'react';
import {StyleProp, View, ViewStyle, Text, Switch,TextStyle} from 'react-native';
import styles from './SwitchButton.style'

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled: boolean;
  labelStyle:StyleProp<TextStyle>;
}

const SwitchButton: React.FC<Props> = ({
  label,
  value,
  onValueChange,
  containerStyle,
  disabled,
  labelStyle
}) => {
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, styles.containerStyle]}>
  <Text style={[styles.label, {color: '#3f51b5'},labelStyle]} >{label}</Text>
  <Switch 
    value={value} 
    onValueChange={onValueChange} 
    disabled={disabled}  
    trackColor={{false: '#C2CAD0', true: '#FF6347'}}
    thumbColor={value ? '#fff' : '#fff'}
    style={styles.switch}
  />
</View>
  );
};

export default SwitchButton;
