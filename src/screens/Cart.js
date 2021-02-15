import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav'
import EMPTY from '../images/empty.png'
import Rider from '../images/ride.png'

export default class Cart extends React.Component {
    render() {
        let ITEMS = [{name: 'food', total: 2, price: 12}]
        return (<>
            <Nav content="back" position="top" title="Cart" />
            <br/>
            <br/>
            <br/>
            {ITEMS.length > 0 ? <>
                <div style={{ marginTop: '10%' }}>
                    <div className="container">

                        <div className="card">
                            <div className="row">
                                <div className="col s4">
                                    <img src={Rider} alt="approx delivery" />
                                </div>
                                <div className="col s8 center">
                                    <small style={{ textTransform: 'capitalize', fontSize: 12, color: 'gray' }}>estimate delivery</small>
                                    <p className="title center">NOW (45 min)</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ padding: "10px" }}>
                            {ITEMS.map((item, key) => {
                                return (
                                    <div className="row" key={key}>
                                        <div className="col s6">
                                            <div className="col s6">
                                                <input type="number" className='count center' value={item.total} />
                                            </div>
                                            <div className="col s6">
                                                <p style={{ color: '#ff978f', textAlign: 'left', textTransform: 'capitalize', fontSize: 14 }}>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <p style={{ color: 'gray', textAlign: 'right', fontSize: 14 }}>${item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="card" style={{ padding: 10 }}>
                            <table>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$ 244</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td style={{background: '#ff978fbd'}}>- $ 244</td>
                                </tr>
                                <tr>
                                    <td>Delivery fee</td>
                                    <td>$ 40</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <nav className="container-fluid center total" style={{ height: 'auto' }}>
                    <div className="row" style={{ marginBottom: 0 }}>
                        <div className="col s6 title" style={{ lineHeight: 3 }}>
                            Total <small style={{ textTransform: 'capitalize', fontSize: 12, color: 'gray' }}>(inlcude VAT) </small>
                        </div>
                        <div className="col s6">
                            <p style={{ fontSize: 18, margin: 0, textAlign: 'right' }}>$ 12,3234</p>
                        </div>
                        <div className="col s12">
                            <NavLink to="/payment" className="btn">review address and pay</NavLink>
                        </div>
                    </div>
                </nav>
            </>
                :
                <div className="row" style={{ marginTop: '40%' }}>
                    <div className="col s12 center">
                        <img src={EMPTY}
                            width="100%" height="200px" syle={{ minHeight: 200 }} alt="empty" />
                        <NavLink to="/" className="btn">Go Back</NavLink>
                    </div>
                </div>}
        </>)
    }
}