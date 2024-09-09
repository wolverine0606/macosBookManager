import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {useAppSelector} from '../store/hooks';

export const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const a = useAppSelector(state => state.booksReducer.books);
  console.log(a);

  return (
    <View style={styles.container}>
      <SearchBar value={query} setValue={setQuery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
