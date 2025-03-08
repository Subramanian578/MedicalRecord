import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowbackIcon, SearchIcon} from '../../assets/icons';
import {Typography} from '../../components';
import {moderateScale} from '../../utils';
import ListComponent from './ListComponent';

export const Demo = () => {
  const [search, setSearchText] = useState('');

  const listData = [
    {id: 1, name: 'Easypaisa', borderColor: 'green'},
    {id: 2, name: 'JazzCash', borderColor: 'orange'},
    {id: 3, name: 'HBL Limited', borderColor: 'green'},
    {id: 4, name: 'Paypro', borderColor: 'orange'},
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <ArrowbackIcon />
        <Typography label={'Payment'} variant="h1" color="#071b3f" />
      </View>
      <View
        style={{
          paddingTop: moderateScale(30),
        }}>
        <Typography
          label={'Connect with bank account'}
          variant="h2"
          color="#071b3f"
        />
        <Typography
          label={'Search or select recepients bank'}
          variant="h6"
          color="grey"
        />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          placeholder={'Search Bank'}
          placeholderTextColor={'grey'}
          value={search}
          onChangeText={setSearchText}
        />
        <SearchIcon />
      </View>
      <ListComponent listData={listData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'white',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(16),
    paddingTop: moderateScale(16),
  },
  searchBar: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    marginVertical: moderateScale(20),
  },
  textInput: {
    flex: 1,
    color: 'black',
  },
  imageConatiner: {
    width: moderateScale(15),
    height: moderateScale(15),
    backgroundColor: 'green',
  },
  listContent: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: moderateScale(12),
  },
  listItem: {
    padding: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(16),
  },
});
