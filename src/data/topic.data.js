import request from 'utils/http/request';

export const topicList = async (query) => {
  const options = {
    url: '/topics',
    method: 'GET',
    params: {
      query: query,
    },
  };

  return request(options);
}
