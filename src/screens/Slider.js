import React from 'react'
import hamburger from '../images/hamburger.png'

class Slider extends React.Component{


    componentDidMount(){
        
        document.body.removeChild(document.getElementById('h26k2'));
        let js = document.createElement('script');
        js.setAttribute('id','h26k2');
        js.innerHTML = `$(".owl-carousel").owlCarousel({margin:40,nav:true,responsiveClass : true , responsive:{
            0:{
                items:1,
                nav : true
            },
            600:{
                items:2,
                nav : true
            },
            1100:{
                items:3,
                nav : true
            }
        }});`;
        document.body.appendChild(js);

    }


    render(){
        return(
            <div className="slider">
                <div className="container">
                    <div className="row">
                        <div className="owl-carousel owl-theme">
                            
                            <div className="col s12">
                                <div className="item">
                                    <div className="heading">
                                        <h4>let's eat</h4>
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>
                                    </div>
                                    <div className="product-card">
                                        
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>

                                        <img src={hamburger} alt=""/>
                                        <div className="image"></div>
                                        <h3>Burgers</h3>
                                        <h5>46 items</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12">
                                <div className="item">
                                    <div className="heading">
                                        <h4>let's eat</h4>
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>
                                    </div>
                                    <div className="product-card">
                                        
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>

                                        <img src={hamburger} alt=""/>
                                        <div className="image"></div>
                                        <h3>Burgers</h3>
                                        <h5>46 items</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12">
                                <div className="item">
                                    <div className="heading">
                                        <h4>let's eat</h4>
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>
                                    </div>
                                    <div className="product-card">
                                        
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>

                                        <img src={hamburger} alt=""/>
                                        <div className="image"></div>
                                        <h3>Burgers</h3>
                                        <h5>46 items</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12">
                                <div className="item">
                                    <div className="heading">
                                        <h4>let's eat</h4>
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>
                                    </div>
                                    <div className="product-card">
                                        
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>

                                        <img src={hamburger} alt=""/>
                                        <div className="image"></div>
                                        <h3>Burgers</h3>
                                        <h5>46 items</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12">
                                <div className="item">
                                    <div className="heading">
                                        <h4>let's eat</h4>
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>
                                    </div>
                                    <div className="product-card">
                                        
                                        <span className="ball ball1"></span>
                                        <span className="ball ball2"></span>
                                        <span className="ball ball3"></span>

                                        <img src={hamburger} alt=""/>
                                        <div className="image"></div>
                                        <h3>Burgers</h3>
                                        <h5>46 items</h5>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;