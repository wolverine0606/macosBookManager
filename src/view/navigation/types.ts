import {StackScreenProps} from '@react-navigation/stack';

export type AppStackParamList = {
  Home: undefined;
  Book: {id: string};
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;
