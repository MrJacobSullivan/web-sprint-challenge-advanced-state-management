import axios from 'axios'

const url = 'http://localhost:3333/smurfs'

const ACTIONS = {
  GET_START: 'GET_START',
  GET_ERROR: 'GET_ERROR',

  POST_START: 'POST_START',
  POST_ERROR: 'POST_ERROR',

  SUCCESS: 'SUCCESS',
}

const getStart = () => ({ type: ACTIONS.GET_START })
const getError = (error) => ({ type: ACTIONS.GET_ERROR, payload: error })

const postStart = () => ({ type: ACTIONS.POST_START })
const postError = (error) => ({ type: ACTIONS.POST_ERROR, payload: error })

const success = (smurfs) => ({ type: ACTIONS.SUCCESS, payload: smurfs })

const getSmurfs = () => (dispatch) => {
  dispatch(getStart())

  axios
    .get(url)
    .then((res) => {
      dispatch(success(res.data))
    })
    .catch((err) => {
      dispatch(getError(err.message))
    })
}

const postSmurf = (smurf) => (dispatch) => {
  dispatch(postStart())

  axios
    .post(url, { ...smurf, id: Date.now() })
    .then((res) => {
      dispatch(success(res.data))
    })
    .catch((err) => {
      dispatch(postError(err.message))
    })
}

const setValidationError = (error) => (dispatch) => dispatch(postError(error))

export { ACTIONS, getSmurfs, postSmurf, setValidationError }
