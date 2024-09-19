import axios from 'axios';
import {Book} from '../../view/modules/books/types';

export const searchBooks = async (query: string): Promise<Book[]> => {
  const q = query;
  const fields =
    'items(id, selfLink, volumeInfo(title, authors, averageRating, description, imageLinks(thumbnail, smallThumbnail, small ), pageCount, publishedDate, infoLink, language, categories)), totalItems';
  const response = await axios.get(
    'https://www.googleapis.com/books/v1/volumes',
    {
      params: {
        q,
        fields,
        printType: 'books',
      },
    },
  );

  const data: Book[] = response.data.items;

  return data;
};
