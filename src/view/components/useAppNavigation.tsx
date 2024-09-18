import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../navigation/types';

export const useAppNavigation = () => {
  return useNavigation<StackNavigationProp<AppStackParamList>>();
};
