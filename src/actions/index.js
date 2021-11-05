import axios from 'axios'

const url = 'http://localhost:3333/smurfs'

const ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  ADD_SMURF: 'ADD_SMURF',
}

const fetchStart = () => ({ type: ACTIONS.FETCH_START })
const fetchSuccess = (result) => ({ type: ACTIONS.FETCH_SUCCESS, payload: result })
const fetchError = (error) => ({ type: ACTIONS.FETCH_ERROR, payload: error })

const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchStart())

  axios
    .get(url)
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message))
    })
}

const addSmurf = (smurf) => (dispatch) => {
  smurf.id = Date.now()
  dispatch(fetchStart())

  axios
    .post(url, smurf)
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message))
    })
}

const setError = (error) => (dispatch) => dispatch(fetchError(error))

export { ACTIONS, fetchSmurfs, addSmurf, setError }
