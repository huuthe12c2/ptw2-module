import React from 'react';
import './22.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
    return (
        <div className="business">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content-business">
                            <h2>Looking for business solutions?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="read-more">
                            <button className="btn-action">Read More <i className="fa fa-arrow-right" aria-hidden="true"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
