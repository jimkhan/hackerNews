import {create} from 'apisauce';

const ApiCall = create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

export default ApiCall;
