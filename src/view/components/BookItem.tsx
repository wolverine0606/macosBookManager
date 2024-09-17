import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Book} from '../modules/books/types';
import {useAppTheme} from '../theme';

interface IBookItem {
  book: Book;
}

export const BookItem = (props: IBookItem) => {
  const {book} = props;
  const {styles} = useBookItemStyleSheet();

  return book.volumeInfo?.title ? (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w800-h1200&source=gbs_api` ||
            'https://images.unsplash.com/photo-1601073283537-f246319362b3?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{book.volumeInfo?.title}</Text>
        {book.volumeInfo?.averageRating ? (
          <Text style={styles.text}>
            Google Books rating: {book.volumeInfo?.averageRating}/5
          </Text>
        ) : null}
        {book.volumeInfo?.authors ? (
          <Text style={styles.text}>{book.volumeInfo?.authors.join(', ')}</Text>
        ) : null}
        {book.volumeInfo?.description ? (
          <Text numberOfLines={10} style={styles.text}>
            {book.volumeInfo?.description}
          </Text>
        ) : null}
      </View>
    </View>
  ) : null;
};

const useBookItemStyleSheet = () => {
  const {colors, spacing, borderRadii, fontSize} = useAppTheme();

  const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
      flexDirection: 'row',
      marginHorizontal: spacing.xl,
      marginVertical: spacing.xs,
      borderRadius: borderRadii.xxxl,
      backgroundColor: colors.cardBackground,
    },
    image: {
      width: 300,
      height: undefined,
      aspectRatio: 2 / 3,
    },
    info: {
      padding: spacing.l,
      flex: 1,
      gap: spacing.l,
    },
    title: {
      fontSize: fontSize.xl,
      fontWeight: '800',
      color: colors.lightText,
    },
    text: {
      fontSize: fontSize.m,
      fontWeight: '500',
      color: colors.grayText,
    },
  });
  return {styles};
};
