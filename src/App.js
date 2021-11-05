import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from './actions'

import AddForm from './components/AddForm'
import SmurfList from './components/SmurfList'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className='App'>
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    )
  }
}

export default connect(null, { getSmurfs })(App)
