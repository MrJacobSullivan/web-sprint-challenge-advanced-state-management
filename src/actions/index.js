import axios from 'axios'

const url = 'http://localhost:3333/smurfs'

const ACTIONS = {
  GET_START: 'GET_START',
  GET_ERROR: 'GET_ERROR',
  POST_START: 'POST_START',
  POST_ERROR: 'POST_ERROR',
  SUCCESS: 'SUCCESS',
}

// action helpers
const getStart = () => ({ type: ACTIONS.GET_START })
const getError = (error) => ({ type: ACTIONS.GET_ERROR, payload: error })
const postStart = () => ({ type: ACTIONS.POST_START })
const postError = (error) => ({ type: ACTIONS.POST_ERROR, payload: error })
const success = (smurfs) => ({ type: ACTIONS.SUCCESS, payload: smurfs })

// calls getStart() and makes an API call to get data
// tries to call success() using response data
// otherwise calls getError using error message
const getSmurfs = () => async (dispatch) => {
  dispatch(getStart())

  try {
    const res = await axios.get(url)
    dispatch(success(res.data))
  } catch (err) {
    dispatch(getError(err.message))
  }
}

// calls postStart() and makes an API call to post data
// tries to call success() using response data
// otherwise calls postError using error message
const postSmurf = (smurf) => async (dispatch) => {
  dispatch(postStart())

  try {
    const res = await axios.post(url, smurf)
    dispatch(success(res.data)) // [POST] from API returns all smurfs in res.data
  } catch (err) {
    dispatch(postError(err.message))
  }
}

// calls postError using received error message, i.e. name is required
const setValidationError = (error) => (dispatch) => dispatch(postError(error))

export { ACTIONS, getSmurfs, postSmurf, setValidationError }
