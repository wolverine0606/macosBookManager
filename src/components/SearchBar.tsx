import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = (props: ISearchBar) => {
  const [localValue, setLocalValue] = useState('');
  const {setValue} = props;
  const inputRef = useRef<TextInput>(null);
  const search = () => {
    setValue(localValue);

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        blurOnSubmit
        onSubmitEditing={search}
        ref={inputRef}
        autoFocus
        selectTextOnFocus
        value={localValue}
        onChangeText={setLocalValue}
        style={styles.input}
        placeholder="search books"
        placeholderTextColor={'#001B2E'}
      />
      <Pressable style={styles.btn} onPress={search}>
        <Text style={styles.txt}>search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    gap: 10,
    marginHorizontal: 30,
  },
  input: {
    flex: 1,
    borderColor: '#294C60',
    borderWidth: 2,
    backgroundColor: '#ADB6C4',
    padding: 15,
    fontSize: 15,
    color: '#001B2E',
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
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
