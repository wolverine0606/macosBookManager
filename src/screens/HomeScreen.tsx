import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {useBooks, useGetBooks} from '../modules/books/hooks';

export const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const {getBooks, getBooksRqst} = useGetBooks(query);
  const books = useBooks();
  console.log(books, getBooksRqst.state);

  useEffect(() => {
    getBooks();
  }, [getBooks, query]);

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
