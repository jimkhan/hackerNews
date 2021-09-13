import React, {useEffect, useState} from 'react';

import CommonBackground from '../components/backgrounds/CommonBackground';
import Loader from '../components/common/Loader';
import FlatListRender from '../components/common/FlatListRender';
import AppTitle from '../components/common/AppTitle';
import {getBestItem, getBestNewsArray} from '../api/BestNewsCall';
import useApi from '../hooks/useApi';
const BestNews = () => {
  const [refresh, setRefresh] = useState(false);
  const {
    data,
    error,
    loading,
    request: loadBestNewsArray,
  } = useApi(getBestNewsArray, getBestItem);

  useEffect(() => {
    loadBestNewsArray();
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

export default BestNews;
