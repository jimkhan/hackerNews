import React, {useEffect, useState} from 'react';

import CommonBackground from '../components/backgrounds/CommonBackground';

import Loader from '../components/common/Loader';
import FlatListRender from '../components/common/FlatListRender';
import AppTitle from '../components/common/AppTitle';
import {getNewItem, getNewNewsArray} from '../api/NewNewsCall';
import useApi from '../hooks/useApi';

const NewNews = () => {
  const [refresh, setRefresh] = useState(false);
  const {
    data,
    error,
    loading,
    request: loadNewNewsArray,
  } = useApi(getNewNewsArray, getNewItem);

  useEffect(() => {
    loadNewNewsArray();
  }, [refresh]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CommonBackground>
          <AppTitle>New Stories</AppTitle>
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

export default NewNews;
