import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import About from './pages/About/About'
import { Cpu } from './pages/Cpu'

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/basket' component={Basket} />
            <Route path='/about' component={About} />
            <Route path='/cpu/:id' component={Cpu} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;

