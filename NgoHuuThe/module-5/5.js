import React from 'react';
import './5.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
    return (
        <div className="container">

            <div className="mg-bg">
                <div className="gsc-heading ">
                    <h2 className="title"><span>Featured Categories</span></h2>
                    <div className="title-desc"><p>What do you need to find?</p>
                    </div>
                </div>
                <div className="hover-slide-next">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="slide-img">
                                <div className="img-scale">
                                    <img src={require('./images/listing-9.jpg')} className="img-slide" />
                                </div>
                                <div className="cat-icon"><i className="fa fa-coffee" aria-hidden="true"></i></div>
                                <div className="name-slide">
                                    <a href="#" className="new-post">Food & Drink</a>
                                    <div className="desc-post">Enjoy the best places in…</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="slide-img">
                                <div className="img-scale">
                                    <img src={require('./images/listing-7.jpg')} className="img-slide" />
                                </div>
                                <div className="cat-icon"><i className="fa fa-coffee" aria-hidden="true"></i></div>
                                <div className="name-slide">
                                    <a href="#" className="new-post">Food & Drink</a>
                                    <div className="desc-post">Enjoy the best places in…</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="slide-img">
                                <div className="img-scale">
                                    <img src={require('./images/listing-9.jpg')} className="img-slide" />
                                </div>
                                <div className="cat-icon"><i className="fa fa-coffee" aria-hidden="true"></i></div>
                                <div className="name-slide">
                                    <a href="#" className="new-post">Food & Drink</a>
                                    <div className="desc-post">Enjoy the best places in…</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="hover-slide-next">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="slide-img">
                                <div className="img-scale">
                                    <img src={require('./images/listing-7.jpg')} className="img-slide" />
                                </div>
                                <div className="cat-icon"><i className="fa fa-coffee" aria-hidden="true"></i></div>
                                <div className="name-slide">
                                    <a href="#" className="new-post">Food & Drink</a>
                                    <div className="desc-post">Enjoy the best places in…</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="slide-img">
                                <div className="img-scale">
                                    <img src={require('./images/listing-9.jpg')} className="img-slide" />
                                </div>
                                <div className="cat-icon"><i className="fa fa-coffee" aria-hidden="true"></i></div>
                                <div className="name-slide">
                                    <a href="#" className="new-post">Food & Drink</a>
                                    <div className="desc-post">Enjoy the best places in…</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="slide-img">
                                <div className="img-scale">
                                    <img src={require('./images/listing-7.jpg')} className="img-slide" />
                                </div>
                                <div className="cat-icon"><i className="fa fa-coffee" aria-hidden="true"></i></div>
                                <div className="name-slide">
                                    <a href="#" className="new-post">Food & Drink</a>
                                    <div className="desc-post">Enjoy the best places in…</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default App;
