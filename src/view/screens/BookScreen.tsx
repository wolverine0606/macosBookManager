import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {AppStackScreenProps} from '../navigation/types';
import {useGetBooks} from '../modules/books/hooks';

export const BookScreen = () => {
  const info = useRoute<AppStackScreenProps<'Book'>['route']>();
  const {selectedBook} = useGetBooks();
  const book = selectedBook(info.params.id)?.volumeInfo;

  return (
    <View>
      <Text>{book?.title}</Text>
      <Text>{book?.publishedDate}</Text>
      <Text>{book?.infoLink}</Text>
    </View>
  );
};
