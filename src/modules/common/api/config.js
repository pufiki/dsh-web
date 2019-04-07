export const baseUrl = 'https://pufiki-api.herokuapp.com/';

export const authToken = localStorage.getItem('authToken') || '';

export const commonHeaders = {
  'Access-Content-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Authorization: authToken ? 'Bearer ' + authToken : '',
  Accept: 'application/json',
};
