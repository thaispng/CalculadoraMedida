import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ConvertedValueProps {
  value: string;
}

const ConvertedValue: React.FC<ConvertedValueProps> = ({ value }) => {
  return (
    <Text style={styles.result}>Valor Convertido: {value}</Text>
  );
};

const styles = StyleSheet.create({
  result: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default ConvertedValue;
