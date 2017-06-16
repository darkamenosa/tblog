import React from 'react'
import {
  Header,
  Navbar,
  Button,
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
        <Button />
      </div>
    )
  }
}


export default App
