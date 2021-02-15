import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        let { title, position } = this.props
        return (
            <nav className={`container-fluid center`} style={position == 'top' ? { top: '0', position: "fixed" } : { bottom: '0', position: "fixed" }} >
                {title ?
                    <div className="row">
                        <div className="col s2" >
                            <NavLink to="/" ><i className="fa fa-arrow-left back-icon" ></i></NavLink>
                        </div>
                        <div className="col s10" >
                            <p className="title">{title}</p>
                        </div>
                    </div> :
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
                            <NavLink to="/cart">
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                <span className="notification"></span>
                            </NavLink>
                        </div>
                    </div>}
            </nav>
        )
    }
}

export default Nav;