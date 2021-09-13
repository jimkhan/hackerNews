import {useState} from 'react';

export default useApi = (apiArrayFunc, apiItemFunc) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const request = async () => {
    const response = await apiArrayFunc();
    if (!response.ok) {
      setError(response.problem);
      setLoading(false);
    }
    var data = response.data;
    // console.log('IdArray', data);
    const promise = data.slice(0, 50).map(async id => {
      //   console.log('in map', id);
      var res = await apiItemFunc(id);
      // console.log('Result', res.data);
      return res.data;
    });
    const result = await Promise.all(promise);
    await setData(result);
    setLoading(false);
    // console.log('items', result);
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
