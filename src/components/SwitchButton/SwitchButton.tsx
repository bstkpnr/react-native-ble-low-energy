import React from 'react';
import {StyleProp, View, ViewStyle, Text, Switch} from 'react-native';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled: boolean;
}

const SwitchButton: React.FC<Props> = ({
  label,
  value,
  onValueChange,
  containerStyle,
  disabled,
}) => {
  return (
    <View
      style={[{flexDirection: 'row', alignItems: 'center'}, containerStyle]}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} disabled={disabled} />
    </View>
  );
};

export default SwitchButton;
