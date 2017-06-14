import React from 'react'
import {
  Header,
  Navbar,
} from './components'

class App extends React.Component {

  constructor(props) {
    super(props)

    // Binding methods
    this.greeting = this.greeting.bind(this)
  }

  greeting() {
    return 'hello world!'
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        { this.greeting() }
      </div>
    )
  }
}


export default App
