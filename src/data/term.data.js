import request from 'utils/http/request';

export const termList = async () => {
  const options = {
    url: '/terms',
    method: 'GET',
  };

  return await request(options);
}
