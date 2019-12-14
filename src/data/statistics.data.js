import request from 'utils/http/request';

export const statistics = async () => {
  const options = {
    url: '/statistics',
    method: 'GET',
  };

  return await request(options);
}
