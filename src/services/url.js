import environmnet from '../configs/environmnet';

const url = {
  baseURL(uri) {
    if (typeof uri === 'undefined') {
      return environmnet[process.env.NODE_ENV]().url;
    }
    if (uri.substring(0, 1) === '/') {
      return (environmnet[process.env.NODE_ENV]().url + uri);
    }
    return (`${environmnet[process.env.NODE_ENV]().url}/${uri}`);
  },
};

export default url;
