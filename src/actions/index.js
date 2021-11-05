import axios from 'axios'

const url = 'http://localhost:3333/smurfs'

const ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
}

const fetchStart = () => ({ type: ACTIONS.FETCH_START })
const fetchSuccess = (result) => ({ type: ACTIONS.FETCH_SUCCESS, payload: result })
const fetchError = (error) => ({ type: ACTIONS.FETCH_ERROR, payload: error })

const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchStart())

  axios
    .get(url)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

export { ACTIONS, fetchSmurfs }
