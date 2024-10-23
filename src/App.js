import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ContextMeetUp from './components/ContextMeetUp'

// Replace your code here
class App extends Component {
  state = {input: '', option: '', isRegistered: ''}

  inputFunction = inputOption => {
    const {inputName, optionText, isRegistered} = inputOption
    this.setState({
      input: inputName,
      option: optionText,
      isRegistered,
    })
  }

  render() {
    const {input, option, isRegistered} = this.state
    return (
      <ContextMeetUp.Provider
        value={{input, option, isRegistered, inputFunction: this.inputFunction}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextMeetUp.Provider>
    )
  }
}

export default App
