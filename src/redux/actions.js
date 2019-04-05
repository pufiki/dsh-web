export const CHOOSE_USER = 'CHOOSE_USER';

export const chooseUser = () => (dispatch) => {
  dispatch({ type: CHOOSE_USER, user: 'customer' })
};
