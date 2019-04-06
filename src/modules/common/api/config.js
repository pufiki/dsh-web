export const baseUrl = 'https://pufiki-api.herokuapp.com/';

export const commonHeaders = {
  'Access-Content-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('authToken') || '',
  Accept: 'application/json',
};
