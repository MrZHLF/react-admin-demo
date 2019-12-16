import React from 'react';
import { Provider } from 'react-redux'
import store   from './Store'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import routers from './Router'


import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header/>
          <div className="main">
            <Aside/>
            {
              routers.map((route,key) =>{
                if(route.exact) {
                  return (
                    <Route key={key} path={route.path} exact render={props=>(
                      <route.component {...props} />
                    )} />
                  )
                } else {
                  return (
                    <Route key={key} path={route.path} render={props=>(
                      <route.component {...props} />
                    )} />
                  )
                }
              })
            }
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
