import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import CommonBackground from '../components/backgrounds/CommonBackground';
import Loader from '../components/common/Loader';
import FlatListRender from '../components/common/FlatListRender';
import Card from '../components/common/Card';
import AppTitle from '../components/common/AppTitle';
import {getJobNewsArray, getJObItem} from '../api/JobNewsCall';
import useApi from '../hooks/useApi';
const JobNews = () => {
  const [refresh, setRefresh] = useState(false);
  const {
    data,
    error,
    loading,
    request: loadJobNewsArray,
  } = useApi(getJobNewsArray, getJObItem);

  useEffect(() => {
    loadJobNewsArray();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CommonBackground>
          <AppTitle>Job Stories</AppTitle>
          <FlatListRender
            data={data}
            refreshing={loading}
            onRefresh={() => setRefresh(!refresh)}
          />
        </CommonBackground>
      )}
    </>
  );
};

export default JobNews;
