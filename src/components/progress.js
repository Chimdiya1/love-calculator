import React from 'react';
import './progress.css';
class Result extends React.Component {
    
    render() {
        return (
            <div>
                <ul className="display-container">
                    <li className="note-display" data-note="8.1">
                        <div className="circle">
                            <svg width="84" height="84" className="circle__svg">
                                <circle cx="41" cy="41" r="38" className="circle__progress circle__progress--fill"></circle>
                            </svg>

                            <div className="percent">
                                <span className="percent__int">{this.props.percent}</span>
                            </div>
                        </div>

                    </li>

                </ul>
            </div>
        );

    }

}

export default Result;

