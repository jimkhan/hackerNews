import ApiCall from './ApiCall';
const endPoint = '/beststories.json';

export const getBestNewsArray = () => ApiCall.get(endPoint);
export const getBestItem = id => ApiCall.get(`/item/${id}.json`);
