export type InitialState = {
  books: Book[];
  isLoading: boolean;
  error: string | undefined;
};

export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    averageRating: number;
    description: string;
    imagelinks: {
      thumbnail: string;
    };
    pageCount: number;
  };
};
