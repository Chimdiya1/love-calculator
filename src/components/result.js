import React from 'react';
import Loading from './loading';
import Progress from './progress'

class Result extends React.Component {
    answer = {
        f: {
            status:'Friends!!!',
            percent: 40,
            advice:"You both will do just well as friends, cheers!!"
        },
        l: {
            status:'Lovers!!!',
            percent: 80,
            advice: "ooouu, I smell a love story coming up"
        },
        a: {
            status:'Admirers!!!',
            percent: 60,
            advice: "You both steal stares at each other when no one is looking"
        },
        m: {
            status:'Marriage!!!',
            percent: 90,
            advice: "I hear wedding bells!!! I hope I am invited?"
        },
        e: {
            status:'Enemies!!!',
            percent: 30,
            advice: "Ouch, do not go close to each other"
        },
        s: {
            status:'Secret Admirers!!!',
            percent: 70,
            advice: "You both should stop being shy and confess your feelings"
        }
    }
    render() {
        let loading = this.props.loading
        if (loading) {
            return <Loading />;
        }
        
        return (
                
                <div className="result">
                    <p id="status">{this.answer[this.props.result]["status"]}</p>
                    <div id="info">
                        <p>{this.props.name1}</p>
                        <Progress className="progress" percent={this.answer[this.props.result]["percent"]} />
                        <p>{this.props.name2}</p>
                    </div>
                    <p id="advice">{this.answer[this.props.result]["advice"]}</p>
                    <button onClick={this.props.reload}> Try Again</button>
                </div>
            
        );

    }

}

export default Result;

