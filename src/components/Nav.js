import React from 'react'
import { NavLink } from 'react-router-dom'
 
class Nav extends React.Component{
    render(){
        return(
            <nav className="container-fluid center">
                <div className="row">
                    <div className="col s4">
                        <NavLink to="/">
                            <i className="fas fa-search"></i>
                        </NavLink>
                    </div>
                    <div className="col s4">
                        <NavLink to="/">
                            <i className="far fa-user"></i>
                        </NavLink>
                    </div>
                    <div className="col s4">
                        <NavLink to="/">
                            <i className="fas fa-shopping-cart"></i>
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;