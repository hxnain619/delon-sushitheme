import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from '../components/Nav'
import Slider from '../screens/Slider'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/" component={Slider} exact/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;