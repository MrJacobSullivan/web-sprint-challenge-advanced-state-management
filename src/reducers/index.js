import { ACTIONS } from '../actions'

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
        smurfs: [],
        isLoading: true,
        getError: '',
        postError: '',
      }

    case ACTIONS.GET_ERROR:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        getError: action.payload,
        postError: '',
      }

    case ACTIONS.POST_START:
      return {
        ...state,
        smurfs: state.smurfs,
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
        postError: action.payload,
      }

    case ACTIONS.SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
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
