import React from 'react'
import { NavLink } from 'react-router-dom'
 
class Nav extends React.Component{
    render(){
        return(
            <nav className="container-fluid center">
                <div className="row">
                    <div className="col s4">
                        <NavLink to="/">
                            <i className="fas fa-search fa-lg"></i>
                        </NavLink>
                    </div>
                    <div className="col s4">
                        <NavLink to="/">
                            <i className="far fa-user fa-lg"></i>
                        </NavLink>
                    </div>
                    <div className="col s4">
                        <NavLink to="/">
                            <i className="fas fa-shopping-cart fa-lg"></i>
                            <span className="notification"></span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;