import React from 'react'
import { connect } from 'react-redux'

import Smurf from './Smurf'

const SmurfList = ({ smurfs, isLoading, error }) => {
  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div className='listContainer'>
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  isLoading: state.isLoading,
  error: state.error,
})

export default connect(mapStateToProps)(SmurfList)
