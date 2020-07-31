import React from 'react';
import './59.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
    return (
        <div className="container">
            <div className="benner-partners">
                <div className="title-parners">
                    <h2>Parners</h2>
                </div>
                <div className="conten-parners">
                    <div className="desc-partners">
                        <p>Sanbro help clients worldwide stay ahead of the curve,
                            solve business challenges and navigate a new era in the financial services landscape.</p>
                    </div>
                    <div className="field-partners">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={require('./images/partners-1.jpg')} className="img-fluid img-slide" />
                            </div>
                            <div className="col-md-8">
                                <div className="title">
                                    <a href="#">
                                        Envato Company </a> </div>
                                <div className="info">
                                    <span className="category">Theme &amp; Marketing Consulting,</span>
                                    <span className="address">Victoria 8007 Australia</span>
                                </div>
                                <div className="content"><p>Envato is proudly based in Melbourne, Australia, but our people and community
                                    live and work from all over the world.</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
