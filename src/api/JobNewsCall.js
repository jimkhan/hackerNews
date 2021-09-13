import ApiCall from './ApiCall';
const endPoint = '/jobstories.json';

export const getJobNewsArray = () => ApiCall.get(endPoint);
export const getJObItem = id => ApiCall.get(`/item/${id}.json`);
