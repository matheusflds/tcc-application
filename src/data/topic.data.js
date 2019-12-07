import request from 'utils/http/request';

export const topicList = async (id) => {
  const options = {
    url: '/topics',
    method: 'GET',
    params: {
      id: id,
    },
  };

  return request(options);
}
