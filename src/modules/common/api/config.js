export const baseUrl = 'https://pufiki-api.herokuapp.com/';

const token = localStorage.getItem('authToken') || '';

export const commonHeaders = {
  'Access-Content-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Authorization: token ? 'Bearer ' + token : '',
  Accept: 'application/json',
};
