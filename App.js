import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


import { StyleSheet, Text, View, ScrollView, FlatList, Switch } from 'react-native';

export default function App() {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [pickerValue, setPickerValue] = useState('item1');

  const data = [
    { key: '1', value: 'SP' },
    { key: '2', value: 'PR' },
    { key: '3', value: 'SC' },
    { key: '4', value: 'RS' },
  ];

  const renderListItem = ({ item }) => {
    return (
      <Text style={styles.listItem}>{item.value}</Text>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ScrollView exemplos</Text>
      <View style={styles.section}>
        <Text style={styles.title}>item 1</Text>
        <Text style={styles.paragraph}>
        Caro(a) amigo(a),

Gostaria de convidá-lo(a) a participar de uma pesquisa sobre seu estado, cidade e idade. Esta pesquisa tem como objetivo coletar informações valiosas que podem ser usadas para melhorar a qualidade de vida das pessoas em sua comunidade.

Ao responder a esta pesquisa, você terá a oportunidade de compartilhar suas opiniões e experiências, ajudando a criar um retrato mais preciso e completo de sua região. Suas respostas podem ser usadas para informar políticas públicas, projetos de desenvolvimento comunitário e outras iniciativas importantes.


Agradeço antecipadamente pela sua contribuição.

Atenciosamente,
                        </Text>
      </View>
      
      <View style={styles.section}>
      <Text style={styles.header}>Qual estado você reside ? </Text>
        <Text style={styles.title}>FlatList</Text>
        <FlatList
          data={data}
          renderItem={renderListItem}
        />
      </View>
      <View style={styles.section}>
      <Text style={styles.header}>Qual capital do seu estado</Text>
        <Text style={styles.title}>Picker</Text>
        <Picker
          selectedValue={pickerValue}
          onValueChange={(itemValue) => setPickerValue(itemValue)}
        >
          <Picker.Item label="São Paulo" value="1" />
          <Picker.Item label="Curitiba" value="2" />
          <Picker.Item label="Florianopolis" value="3" />
          <Picker.Item label="PortoAlegre" value="4" />
        </Picker>
      </View>
      <View style={styles.section}>
      <Text style={styles.header}>Qual sua idade ?</Text>
        <Text style={styles.title}>Slider</Text>
        <Slider
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
          minimumValue={0}
          maximumValue={100}
          step={1}
        />
        <Text style={styles.sliderValue}>{sliderValue} Anos</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Concorda em participar da nossa pesquisa ?</Text>
        <Text style={styles.title}>Switch</Text>
        <Switch
          value={switchValue}
          onValueChange={(value) => setSwitchValue(value)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
  sliderValue: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
