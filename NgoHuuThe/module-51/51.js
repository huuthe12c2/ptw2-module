import React from 'react';
import './51.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
    return (
        <div className="container">
            <div className="block-views">
                <h2 className="block-title"><span>Categories</span></h2>
                <div className="block-content">
                    <ul>
                        <li className="view-list-item"><a href="#" >Fashion</a></li>
                        <li className="view-list-item"><a href="#">Food</a></li>
                        <li className="view-list-item"><a href="#" >Lift Style</a></li>
                        <li className="view-list-item"><a href="#" >Music</a></li>
                        <li className="view-list-item"><a href="#" >Sport</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
