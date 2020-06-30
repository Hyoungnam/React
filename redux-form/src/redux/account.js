
const LOAD = 'redux-form-examples/account/LOAD'

export const load = data => ({ type: LOAD, data })

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      }
    default:
      return state
  }
}

export default reducer;