import React from 'react';
import './57.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import imgTeam from './images/team-3.jpg';
function App() {
    return (
        <div className="container">
            <div className="row skil-member">
                <div className="col-md-4">
                    <div className="shadow-br">
                    <div className="hover-img">
                            <img src={imgTeam} className="img-fluid img-bg" />
                            <div className="dropdown-icon">
                                <div className="dropdown-menu1" >
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-facebook-official fa-icon" aria-hidden="true"></i></a>
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-google-plus-official fa-icon" aria-hidden="true"></i></a>
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-twitter-square fa-icon" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <h4 className="name-member">Marko Stoiber</h4>
                        <div className="cv">Supervisor</div>
                        <div className="labels">
                            <span>Code</span>
                            <span>80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                        <div className="labels mg-skill">
                            <span>Drupal</span>
                            <span>90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bar-2" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                        <div className="labels mg-skill">
                            <span>Opencart</span>
                            <span>75%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bar-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-md-4">
                    <div className="shadow-br">
                        <div className="hover-img">
                            <img src={imgTeam} className="img-fluid" />
                            <div className="dropdown-icon">
                                <div className="dropdown-menu1" >
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-facebook-official fa-icon" aria-hidden="true"></i></a>
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-google-plus-official fa-icon" aria-hidden="true"></i></a>
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-twitter-square fa-icon" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <h4 className="name-member">Marko Stoiber</h4>
                        <div className="cv">Supervisor</div>
                        <div className="labels">
                            <span>Design</span>
                            <span>80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                        <div className="labels mg-skill">
                            <span>Wordpress</span>
                            <span>90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bar-2" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                        <div className="labels mg-skill">
                            <span>Drupal</span>
                            <span>75%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bar-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="shadow-br">
                    <div className="hover-img">
                            <img src={imgTeam} className="img-fluid" />
                            <div className="dropdown-icon">
                                <div className="dropdown-menu1" >
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-facebook-official fa-icon" aria-hidden="true"></i></a>
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-google-plus-official fa-icon" aria-hidden="true"></i></a>
                                    <a className="dropdown-item item-menu" href="#"><i className="fa fa-twitter-square fa-icon" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <h4 className="name-member">Marko Stoiber</h4>
                        <div className="cv">Supervisor</div>
                        <div className="labels">
                            <span>Design</span>
                            <span>80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                        <div className="labels mg-skill">
                            <span>Drupal</span>
                            <span>90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bar-2" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                        <div className="labels mg-skill">
                            <span>Code</span>
                            <span>75%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bar-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
