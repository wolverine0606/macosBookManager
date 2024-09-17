import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {useBooks, useGetBooks} from '../modules/books/hooks';
import {Book} from '../modules/books/types';
import {BookItem} from '../components/BookItem';

export const HomeScreen = () => {
  const {getBooks, firstBooksRqst, getQuery} = useGetBooks();
  const query = getQuery();
  const books = useBooks();
  useEffect(() => {
    if (query) {
      getBooks(query);
    }
    console.log(firstBooksRqst);
  }, [getBooks, query, firstBooksRqst]);

  return (
    <View style={styles.container}>
      <SearchBar />
      {firstBooksRqst ? (
        // <ScrollView>
        //   {books && books.length > 0 ? (
        //     books.map((book: Book) => <BookItem book={book} key={book.id} />)
        //   ) : (
        //     <Text style={{paddingHorizontal: 30}}>No books available</Text>
        //   )}
        // </ScrollView>
        <FlatList
          data={books}
          renderItem={({item}) => <BookItem book={item} />}
          keyExtractor={item => item.id}></FlatList>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40}}>find your books</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
