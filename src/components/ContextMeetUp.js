import React from 'react'

const ContextMeetUp = React.createContext({
  input: '',
  option: '',
  isRegistered: false,
  inputFunction: () => {},
})

export default ContextMeetUp
