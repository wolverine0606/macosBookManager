import {useRoute} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AppStackScreenProps} from '../navigation/types';
import {useGetBooks} from '../modules/books/hooks';
import {Screen} from 'react-native-screens';
import {useAppTheme} from '../theme';
import Icon from 'react-native-vector-icons/AntDesign';

export const BookScreen = () => {
  const info = useRoute<AppStackScreenProps<'Book'>['route']>();
  const {selectedBook} = useGetBooks();
  const book = selectedBook(info.params.id);
  const {styles} = useBookItemStyleSheet();
  console.log(book?.volumeInfo?.categories);

  return (
    <Screen style={styles.container}>
      <View style={styles.rawContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://books.google.com/books/publisher/content/images/frontcover/${book?.id}?fife=w800-h1200&source=gbs_api`,
          }}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{book?.volumeInfo?.title}</Text>
          {book?.volumeInfo?.averageRating ? (
            <View>
              <Icon name="star"></Icon>
              <Text style={styles.text}>
                Google Books rating: {book.volumeInfo?.averageRating}/5
              </Text>
            </View>
          ) : null}
          {book?.volumeInfo?.categories ? (
            <Text style={styles.text}>{book.volumeInfo?.categories}</Text>
          ) : null}
          {book?.volumeInfo?.authors ? (
            <Text style={styles.text}>
              {book.volumeInfo?.authors.join(', ')}
            </Text>
          ) : null}
          {book?.volumeInfo?.description ? (
            <Text style={styles.text}>{book.volumeInfo?.description}</Text>
          ) : null}
        </View>
      </View>
    </Screen>
  );
};
const useBookItemStyleSheet = () => {
  const {colors, spacing, borderRadii, fontSize} = useAppTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.mainBackground,
    },
    rawContainer: {
      flex: 1,
      padding: spacing.l,
      flexDirection: 'row',
      borderColor: 'white',
      borderWidth: 2,
      gap: spacing.m,
    },
    image: {
      aspectRatio: 3 / 4,
      height: 300,
      borderRadius: borderRadii.xl,
    },
    textContainer: {
      flex: 1,
      gap: spacing.m,
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
