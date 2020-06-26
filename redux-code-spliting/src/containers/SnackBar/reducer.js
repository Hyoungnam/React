/* eslint-disable default-case */

export const initialState = {
  open: false,
  message: '',
};


const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW': 
        return {
          open: true,
          message: action.payload.message
        }
      case 'HIDE_SNACKBAR':
        return  {
          open: false,
          message: ''
        }
    default:
        return state
    }
}
export default snackbarReducer;