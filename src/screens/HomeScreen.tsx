import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {useBooks, useGetBooks} from '../modules/books/hooks';
import {Book} from '../modules/books/types';
import {BookItem} from '../components/BookItem';

export const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const {getBooks} = useGetBooks(query);
  const books = useBooks();

  useEffect(() => {
    getBooks();
  }, [getBooks, query]);

  return (
    <View style={styles.container}>
      <SearchBar value={query} setValue={setQuery} />
      <ScrollView>
        {books && books.length > 0 ? (
          books.map((book: Book) => (
            // <Text
            //   style={{
            //     padding: 15,
            //     margin: 15,
            //     gap: 15,
            //     borderWidth: 3,
            //     borderColor: '#000',
            //   }}
            //   key={book.id}>
            //   {book.volumeInfo?.description}
            // </Text>
            <BookItem book={book} key={book.id} />
          ))
        ) : (
          <Text style={{paddingHorizontal: 30}}>No books available</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
