import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useGetBooks} from '../modules/books/hooks';
import {useAppTheme} from '../theme';

export const SearchBar = () => {
  const {styles} = useSearchBarStyleSheet();
  const {setQuery} = useGetBooks();
  const [localValue, setLocalValue] = useState('');
  const inputRef = useRef<TextInput>(null);
  const {colors} = useAppTheme();
  const search = () => {
    setQuery(localValue);

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        blurOnSubmit
        onSubmitEditing={search}
        ref={inputRef}
        autoFocus
        value={localValue}
        onChangeText={setLocalValue}
        style={styles.input}
        placeholder="search books"
        placeholderTextColor={colors.darkText}
      />
      <Pressable style={styles.btn} onPress={search}>
        <Text style={styles.txt}>search</Text>
      </Pressable>
    </View>
  );
};
const useSearchBarStyleSheet = () => {
  const {colors, spacing, borderRadii, otherSizes, fontSize} = useAppTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: spacing.l,
      gap: spacing.m,
      marginHorizontal: spacing.xl,
    },
    input: {
      flex: 1,
      borderColor: colors.borderColor,
      borderWidth: otherSizes.xxxxxs,
      backgroundColor: colors.inputBackground,
      padding: spacing.m,
      fontSize: fontSize.sm,
      color: colors.darkText,
      margin: spacing.sm,
      borderRadius: borderRadii.xl,
    },
    btn: {
      paddingVertical: spacing.m,
      paddingHorizontal: spacing.l,
      backgroundColor: colors.inputBackground,
      borderWidth: otherSizes.xxxxxs,
      borderRadius: borderRadii.xl,
      borderColor: colors.borderColor,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    txt: {
      color: colors.darkText,
      fontSize: fontSize.sm,
      fontWeight: '600',
      textTransform: 'capitalize',
    },
  });
  return {styles};
};
