import { ACTIONS } from '../actions'

// seperated error into getError and postError
// getError will handle errors from axios.get()
// postError will handle errors from axios.post() as well as validation errors
// this allows for SmurfsList to render smurfs AND AddForm to render error message
const initialState = {
  smurfs: [],
  isLoading: false,
  getError: '',
  postError: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_START:
      return {
        ...state,
        smurfs: [], // reset to ampty array, will be populated on success
        isLoading: true,
        getError: '',
        postError: '',
      }

    case ACTIONS.GET_ERROR:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        getError: action.payload, // set error from axios.get()
        postError: '',
      }

    case ACTIONS.POST_START:
      return {
        ...state,
        smurfs: state.smurfs, // maintain previous state in case of validation error
        isLoading: true,
        getError: '',
        postError: '',
      }

    case ACTIONS.POST_ERROR:
      return {
        ...state,
        smurfs: state.smurfs,
        isLoading: false,
        getError: '',
        postError: action.payload, // set error from axios.get() OR from setValidationError
      }

    case ACTIONS.SUCCESS:
      return {
        ...state,
        smurfs: action.payload, // set to received value
        isLoading: false,
        getError: '',
        postError: '',
      }

    default:
      return state
  }
}

export { initialState }
export default reducer
