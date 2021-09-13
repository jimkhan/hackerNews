import React, {useState, useRef, useEffect} from 'react';

import CommonBackground from '../components/backgrounds/CommonBackground';

import Loader from '../components/common/Loader';
import FlatListRender from '../components/common/FlatListRender';
import AppTitle from '../components/common/AppTitle';
import {getTopNewsArray, getTopItem} from '../api/TopNewsCall';
import useApi from '../hooks/useApi';

const TopNews = ({navigation}) => {
  //// * hook section ///

  const [refresh, setRefresh] = useState(false);

  const {
    data,
    error,
    loading,
    request: loadTopnewsArray,
  } = useApi(getTopNewsArray, getTopItem);

  useEffect(() => {
    loadTopnewsArray();
    console.log('effe call');
  }, [refresh]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CommonBackground>
          <AppTitle>Top Stories</AppTitle>
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

export default TopNews;
