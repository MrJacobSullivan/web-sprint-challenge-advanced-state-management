import { ACTIONS } from '../actions'

const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        smurfs: [],
        isLoading: true,
        error: '',
      }

    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isLoading: false,
        error: '',
      }

    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: action.payload,
      }

    case ACTIONS.ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        isLoading: false,
        error: '',
      }

    default:
      return state
  }
}

export { initialState }
export default reducer
