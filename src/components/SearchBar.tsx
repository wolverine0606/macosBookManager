import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = (props: ISearchBar) => {
  const {value, setValue} = props;
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder="search books"
        placeholderTextColor={'#001B2E'}></TextInput>
      <Pressable style={styles.btn}>
        <Text style={styles.txt}>search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    gap: 20,
  },
  input: {
    flex: 1,
    borderColor: '#294C60',
    borderWidth: 2,
    backgroundColor: '#ADB6C4',
    padding: 15,
    fontSize: 15,
    color: '#fff',
    marginLeft: 30,
    margin: 5,
    borderRadius: 15,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ADB6C4',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#294C60',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#001B2E',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
