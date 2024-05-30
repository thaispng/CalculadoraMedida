import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UnitPicker from './components/UnitPicker';
import InputField from './components/InputField';
import ConvertButton from './components/ConvertButton';
import ConvertedValue from './components/ConvertedValue';

const unidadeMedida: { [key: string]: number } = {
  centimetros: 1,
  metros: 100,
  quilometros: 100000,
  milhas: 160934,
};

const App: React.FC = () => {
  const [unidadeOrigem, setUnidadeOrigem] = useState<string>('centimetros');
  const [unidadeDestino, setUnidadeDestino] = useState<string>('metros');
  const [valorEntrada, setValorEntrada] = useState<string>('');
  const [valorConvertido, setValorConvertido] = useState<string>('');

  const handleConvert = () => {
    const valorEmCm = parseFloat(valorEntrada) * unidadeMedida[unidadeOrigem];
    const resultado = valorEmCm / unidadeMedida[unidadeDestino];
    setValorConvertido(resultado.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Unidades</Text>
      <UnitPicker selectedValue={unidadeOrigem} onValueChange={setUnidadeOrigem} />
      <UnitPicker selectedValue={unidadeDestino} onValueChange={setUnidadeDestino} />
      <InputField value={valorEntrada} onChangeText={setValorEntrada} />
      <ConvertButton onPress={handleConvert} />
      <ConvertedValue value={valorConvertido} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 150,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default App;
