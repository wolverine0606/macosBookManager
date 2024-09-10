import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from './types';

export const searchBooks = async (_query: string) => {
  //   const fields =
  //     'items( id, volumeInfo(title, authors, averageRating, description, imageLinks(thumbnail), pageCount, publishedDate))';
  //   const response = await axios.get(
  //     'https://www.googleapis.com/books/v1/volumes',
  //     {
  //       params: {
  //         q: query + 'intitle',
  //         fields,
  //       },
  //     },
  //   );
  const response = [
    {
      id: 'KZR9zQEACAAJ',
      volumeInfo: {
        authors: ['Array'],
        description:
          "Hardcover editions of all seven bestselling Harry Potter titles are included in this boxed set: Harry Potter and the Philosopher's Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet of Fire, Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince, Harry Potter and the Deathly Hallows.",
        imageLinks: ['Object'],
        publishedDate: '2007-11-19',
        title: 'Harry Potter',
      },
    },
    {
      id: 'p0mLvgEACAAJ',
      volumeInfo: {
        authors: ['Array'],
        description:
          "A fabulous opportunity to own all seven Harry Potter titles - Harry Potter and the Philosopher's Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet of Fire, Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince and Harry Potter and the Deathly Hallows- in a fantastic boxed set",
        imageLinks: ['Object'],
        pageCount: 607,
        publishedDate: '2007-10',
        title: 'Harry Potter',
      },
    },
    {
      id: 'HBVunAEACAAJ',
      volumeInfo: {
        authors: ['Array'],
        averageRating: 4,
        description:
          'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Witchcraft and Wizardry.',
        imageLinks: ['Object'],
        pageCount: 336,
        publishedDate: '2013-08-27',
        title: "Harry Potter and the Sorcerer's Stone",
      },
    },
    {
      id: 'gal9MtXKC68C',
      volumeInfo: {
        authors: ['Array'],
        averageRating: 4,
        description:
          'An Urdu language edition of the second Harry Potter tale.',
        imageLinks: ['Object'],
        pageCount: 314,
        publishedDate: '2004',
        title: '‏هيرى پوٹر اور رازوں کا کمره :‏',
      },
    },
    {
      id: 'ocwanwEACAAJ',
      volumeInfo: {
        authors: ['Array'],
        description:
          "'Harry Potter and the Deathly Hallows' is the seventh book in the Harry Potter series of novels by J.K. Rowling. Follow Harry's final adventures as he attempts to bring an end to his nemesis, Lord Voldemort.",
        imageLinks: ['Object'],
        publishedDate: '2007-08',
        title: 'Harry Potter and the Deathly Hallows',
      },
    },
    {
      id: 'Qu-JQgAACAAJ',
      volumeInfo: {
        authors: ['Array'],
        averageRating: 5,
        description:
          "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",
        imageLinks: ['Object'],
        pageCount: 223,
        publishedDate: '2001',
        title: "Harry Potter and the Philosopher's Stone",
      },
    },
    {
      id: 'LKjWuQEACAAJ',
      volumeInfo: {
        authors: ['Array'],
        imageLinks: ['Object'],
        publishedDate: '2011',
        title: 'Harry Potter - Das große Hörbuch mp3',
      },
    },
    {
      id: 'QCp6PQAACAAJ',
      volumeInfo: {
        authors: ['Array'],
        averageRating: 4.5,
        description:
          'The magical books that started it all are now available in paperback in a set of three: "Harry Potter and the Sorcerer\'s Stone; Harry Potter and the Chamber of Secrets"; and "Harry Potter and the Prisoner of Azkaban."',
        imageLinks: ['Object'],
        publishedDate: '2002-01-01',
        title: 'Harry Potter Boxed Set',
      },
    },
    {
      id: 'pDakQgAACAAJ',
      volumeInfo: {
        authors: ['Array'],
        averageRating: 4,
        description:
          "Dumbledore lowered his hands and surveyed Harry through his half-moon glasses. 'It is time,' he said, 'for me to tell you what I should have told you five years ago, Harry. Please sit down. I am going to tell you everything.' Harry Potter is due to start his fifth year at Hogwarts School of Witchcraft and Wizadry. He is desperate to get back to school and find out why his friends Ron and Hermione have been so secretive all summer. However, what Harry is about to discover in his new year at Hogwarts will turn his whole world upside down . . . But before he even gets to school, Harry has an unexpected and frightening encounter with two Dementors, has to face a court hearing at the Ministry of Magic and has been escorted on a night-time broomstick ride to the secret headquarters of a mysterious group called 'The Order of the Phoenix'. And that is just the start. A gripping and electrifying novel, full of suspense, secrets, and - of course - magic.",
        imageLinks: ['Object'],
        pageCount: 766,
        publishedDate: '2004',
        title: 'Harry Potter and the Order of the Phoenix',
      },
    },
    {
      id: 'Qu78XwAACAAJ',
      volumeInfo: {
        authors: ['Array'],
        title:
          'HARRY POTTER BOXED SET (Vol. 1 to 7) (Original English Title: HARRY POTTER BOXED SET ( Volumes 1 to 7 Boxed Set))',
      },
    },
  ];
  //console.log(response.data.items);
  return response;
};

export const getBooksThunk = createAsyncThunk<
  Book[],
  string,
  {rejectValue: string}
>('getBooksThunk', async (searchTerm: string, {rejectWithValue}) => {
  try {
    const response = await searchBooks(searchTerm);

    return response;
  } catch (error: any) {
    return rejectWithValue(error.message || 'error while fetching data');
  }
});
