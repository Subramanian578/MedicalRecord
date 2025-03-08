import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Typography} from '../../components';
import {moderateScale} from '../../utils';

export interface IListItem {
  id: number;
  name: string;
  borderColor: string; // Add borderColor property
}

export interface IListData {
  listData: IListItem[];
}

const ListComponent = ({listData}: IListData) => {
  return (
    <FlatList
      data={listData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={[styles.listContent, {borderColor: item.borderColor}]}>
          <View style={styles.listItem}>
            <View style={styles.imageContainer} />
            <Typography label={item.name} />
          </View>
        </View>
      )}
      ListHeaderComponent={<Typography label={'All Banks'} variant="h3" />}
      ListHeaderComponentStyle={{paddingBottom: moderateScale(15)}}
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  imageContainer: {
    width: moderateScale(15),
    height: moderateScale(15),
    backgroundColor: 'green',
  },
  listContent: {
    borderWidth: 1,
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(25),
  },
  listItem: {
    padding: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(16),
  },
});
