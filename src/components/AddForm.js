import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postSmurf, setValidationError } from '../actions'

const AddForm = ({ error, postSmurf, setValidationError }) => {
  const initialValues = { name: '', position: '', nickname: '', description: '' }
  const [state, setState] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // if validation passes: call postSmurf, otherwise call setValidationError
    if (state.name && state.position && state.nickname) {
      postSmurf({
        name: state.name,
        position: state.position,
        nickname: state.nickname,
        description: state.description,
      })
      setState(initialValues) // reset form to initial state for convenience
    } else setValidationError('name, position, and nickname are required')
  }

  return (
    <section>
      <h2>Add Smurf</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name='name'
            id='name'
            placeholder='required'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='position'>Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name='position'
            id='position'
            placeholder='required'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='nickname'>Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name='nickname'
            id='nickname'
            placeholder='required'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name='description'
            id='description'
          />
        </div>

        {error && (
          <div data-testid='errorAlert' className='alert alert-danger' role='alert'>
            Error: {error}
          </div>
        )}

        <button>Submit Smurf</button>
      </form>
    </section>
  )
}

const mapStateToProps = (state) => ({ error: state.postError })

export default connect(mapStateToProps, { postSmurf, setValidationError })(AddForm)
