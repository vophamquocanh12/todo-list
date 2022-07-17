import React, {Fragment} from 'react'
import './App.css';

import {Header, Todos} from "./components/index"

const App = () => {
  return(
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  )
}

export default App;
