import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Cart from '../screens/Cart'
import Slider from '../screens/Slider'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Slider} exact/>
                    <Route path="/cart" component={Cart} exact/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;