import ApiCall from './ApiCall';
const endPoint = '/newstories.json';
export const getNewNewsArray = () => ApiCall.get(endPoint);
export const getNewItem = id => ApiCall.get(`/item/${id}.json`);
