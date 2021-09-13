import React from 'react';
import {FlatList} from 'react-native';
import Card from './Card';

import {useNavigation} from '@react-navigation/native';

const FlatListRender = ({data, onRefresh, refreshing}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      refreshing={refreshing}
      onRefresh={onRefresh}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <>
            <Card
              title={item.title}
              score={item.score}
              by={item.by}
              time={item.time}
              onPress={() => navigation.navigate('ViewInWeb', {url: item.url})}
            />
          </>
        );
      }}
    />
  );
};

export default FlatListRender;
