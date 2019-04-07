import { ToastActions } from 'parts/Toasts'

export * from '#/customer/store/actions'
export * from '#/user/store/actions'
export * from '#/admin/store/actions'
export * from '#/contractor/store/actions'

export const { closeToast, setToastData } = ToastActions

export const CHOOSE_USER = 'CHOOSE_USER';

export const chooseUser = () => (dispatch) => {
  dispatch({ type: CHOOSE_USER, user: 'contractor' })
  // dispatch({ type: CHOOSE_USER, user: 'customer' })
};
