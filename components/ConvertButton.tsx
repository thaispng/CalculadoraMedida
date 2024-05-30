import React from 'react';
import { Button } from 'react-native';

interface ConvertButtonProps {
  onPress: () => void;
}

const ConvertButton: React.FC<ConvertButtonProps> = ({ onPress }) => {
  return (
    <Button title="Converter" onPress={onPress} />
  );
};

export default ConvertButton;