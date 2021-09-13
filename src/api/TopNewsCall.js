import ApiCall from './ApiCall';
const endPoint = '/topstories.json';

export const getTopNewsArray = () => ApiCall.get(endPoint);
export const getTopItem = id => ApiCall.get(`/item/${id}.json`);
