import request from 'utils/http/request';

export const termCloudList = async () => {
  const options = {
    url: '/terms',
    method: 'GET',
    params: {
      quantity: 10,
      completed: 1,
    }
  };

  return await request(options);
}

export const termList = async () => {
  const options = {
    url: '/terms',
    method: 'GET',
  }

  return await request(options);
}

export const termSearch = async (term) => {
  const options = {
    url: '/terms',
    method: 'POST',
    params: {
      term_text: term,
    }
  };

  return await request(options);
}
