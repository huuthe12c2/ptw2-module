import React from 'react';
import './86.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div className="container hight-staff">
      <div className="row">
        <div className="col-md-3">
          <div className="staff-img">
            <img src={require('./images/qservice-3.jpg')} className="img-fluid img-slide" />
          </div>
          <div className="border-hight">
           
              <div className="plan-list">
                  <a href="#" className="staff"> Professional Staff </a>
                  <div className="desc"><p>Maecenas tempus, tellus eget condi men tum rhon cus.</p></div>
              </div>
              <a href="#" className="more">Read More <i className="fa fa-arrow-right icon-more" aria-hidden="true" /></a>
            </div>
        
        </div>
        <div className="col-md-3">
          <div className="staff-img">
            <img src={require('./images/qservice-3.jpg')} className="img-fluid img-slide" />
          </div>
          <div className="border-hight">
           
              <div className="plan-list">
                  <a href="#" className="staff"> Professional Staff </a>
                  <div className="desc"><p>Maecenas tempus, tellus eget condi men tum rhon cus.</p></div>
              </div>
              <a href="#" className="more">Read More <i className="fa fa-arrow-right icon-more" aria-hidden="true" /></a>
            </div>
        
        </div>
        <div className="col-md-3">
          <div className="staff-img">
            <img src={require('./images/qservice-3.jpg')} className="img-fluid img-slide" />
          </div>
          <div className="border-hight">
           
              <div className="plan-list">
                  <a href="#" className="staff"> Professional Staff </a>
                  <div className="desc"><p>Maecenas tempus, tellus eget condi men tum rhon cus.</p></div>
              </div>
              <a href="#" className="more">Read More <i className="fa fa-arrow-right icon-more" aria-hidden="true" /></a>
            </div>
        
        </div>
        <div className="col-md-3">
          <div className="staff-img">
            <img src={require('./images/qservice-3.jpg')} className="img-fluid img-slide" />
          </div>
          <div className="border-hight">
           
              <div className="plan-list">
                  <a href="#" className="staff"> Professional Staff </a>
                  <div className="desc"><p>Maecenas tempus, tellus eget condi men tum rhon cus.</p></div>
              </div>
              <a href="#" className="more">Read More <i className="fa fa-arrow-right icon-more" aria-hidden="true" /></a>
            </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
