import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {useBooks, useGetBooks} from '../modules/books/hooks';
import {BookItem} from '../components/BookItem';
import {useAppTheme} from '../theme';

export const HomeScreen = () => {
  const {getBooks, firstBooksRqst, getQuery} = useGetBooks();
  const query = getQuery();
  const books = useBooks();
  const {colors, fontSize} = useAppTheme();

  useEffect(() => {
    if (query) {
      getBooks(query);
    }
  }, [getBooks, query, firstBooksRqst]);

  return (
    <View style={{flex: 1, backgroundColor: colors.mainBackground}}>
      <SearchBar />
      {firstBooksRqst ? (
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
          <Text style={{fontSize: fontSize.xxl, color: colors.lightText}}>
            find your favorite books
          </Text>
        </View>
      )}
    </View>
  );
};
