import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  StyleSheet, 
  ImageBackground 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputRenda = ({ onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Informe sua renda bruta mensal"
      keyboardType="numeric"
      onChangeText={(value) => onChange(value)}
    />
  );
};

const ResultadoImposto = ({ renda }) => {
  let aliquota, dedu, imposto;

  if (renda <= 1400) {
    aliquota = 0;
    dedu = 0;
  } else if (renda <= 2100) {
    aliquota = 10;
    dedu = 100;
  } else if (renda <= 2800) {
    aliquota = 15;
    dedu = 270;
  } else if (renda <= 3600) {
    aliquota = 25;
    dedu = 500;
  } else {
    aliquota = 30;
    dedu = 700;
  }

  imposto = renda * (aliquota / 100) - dedu;

  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoTexto}>
        Sua renda bruta mensal é R$ {renda.toFixed(2)}.
      </Text>
      <Text style={styles.resultadoTexto}>
        O imposto a ser pago é R$ {imposto.toFixed(2)}.
      </Text>
    </View>
  );
};

const TelaPrincipal = () => {
  const [renda, setRenda] = useState('');

  return (
    <ImageBackground source={require('./assets/fotoimpo2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de Imposto</Text>
        <InputRenda onChange={(value) => setRenda(parseFloat(value))} />
        {renda ? <ResultadoImposto renda={renda} /> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    padding: 15,
    margin: 15,
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
  },
  resultadoContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default TelaPrincipal;
