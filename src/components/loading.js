import React from 'react';
import heart from "./Heart.gif"

class Loading extends React.Component {
    render() {
        return (
            <div className="loader center">
                <img src={heart} ></img>
                <br/>
                <p>LOADING...</p>
            </div>
        );

    }

}

export default Loading;