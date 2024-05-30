import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';

interface UnitPickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const UnitPicker: React.FC<UnitPickerProps> = ({ selectedValue, onValueChange }) => {
  return (
    <RNPickerSelect
      onValueChange={onValueChange}
      items={[
        { label: 'Centímetros', value: 'centimetros' },
        { label: 'Metros', value: 'metros' },
        { label: 'Quilômetros', value: 'quilometros' },
        { label: 'Milhas', value: 'milhas' },
      ]}
      value={selectedValue}
      style={pickerSelectStyles}
      placeholder={{ label: 'Selecione a unidade', value: null }}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16,
  },
});

export default UnitPicker;
