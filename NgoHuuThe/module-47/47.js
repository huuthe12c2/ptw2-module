import React from 'react';
import './47.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
    return (
        <div className="container">
            <div className="benner-comment">
                <div className="title-comment">Comment</div>
                <div className="blog-new-comment">
                    <section>
                        <div className="befor-add"></div>
                        <h5>ADD NEW COMMENT</h5>
                        <form className="form-comment">
                            <div className="your-name">
                                <label>Your name</label>
                                <input type="text" size="30" className="form-text" />
                            </div>
                            <div className="subject">
                                <label>Subject</label>
                                <input type="text" size="30" className="form-text" />
                            </div>
                            <div className="comment">
                                <label>Comment</label>
                                <div className="comment-teatare">
                                    <textarea className="text-full-textarea " rows="5" cols="60" required="required" aria-required="true" />
                                </div>
                            </div>
                            <div className="filter-guidelines">
                                <ul>
                                    <li>You can align images (<code>data-align="center"</code>), but also videos, blockquotes, and so <a href="#" className="about-text">About text formats</a> on.</li>
                                    <li>You can caption images (<code>data-caption="Text"</code>), but also videos, blockquotes, and so on.</li>
                                </ul>
                            </div>
                            <button className="btn-action">Save</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
