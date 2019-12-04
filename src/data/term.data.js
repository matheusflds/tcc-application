import request from 'utils/http/request';

export const termCloudList = async () => {
  const options = {
    url: '/terms',
    method: 'GET',
    params: {
      quantity: 10,
    }
  };

  return await request(options);
}
