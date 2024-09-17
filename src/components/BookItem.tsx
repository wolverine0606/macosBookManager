import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Book} from '../modules/books/types';

interface IBookItem {
  book: Book;
}

export const BookItem = (props: IBookItem) => {
  const {book} = props;

  return book.volumeInfo?.title ? (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api` ||
            'https://images.unsplash.com/photo-1601073283537-f246319362b3?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {book.volumeInfo?.title}
        </Text>
        {book.volumeInfo?.averageRating ? (
          <Text style={styles.text}>
            Google Books rating: {book.volumeInfo?.averageRating}/5
          </Text>
        ) : null}
        {book.volumeInfo?.authors ? (
          <Text style={styles.text}>{book.volumeInfo?.authors.join(', ')}</Text>
        ) : null}
        {book.volumeInfo?.description ? (
          <Text numberOfLines={6} style={styles.text}>
            {book.volumeInfo?.description}
          </Text>
        ) : null}
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 5,
    borderRadius: 60,
    backgroundColor: '#4B5360',
  },
  image: {
    width: 300,
    height: undefined,
    aspectRatio: 1,
  },
  info: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#D3D3D3',
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: '#C0C0C0',
  },
});
