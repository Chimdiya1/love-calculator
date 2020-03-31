import React from 'react';
import Form from "./form"
import Alert from "./alert"
function MainCalc(props) {
    return (
        <div className="MainCalc">
            <p>LOVE CALCULATOR </p>
            <Alert className="alert" error={props.error}/>
            <Form
                submitHandler={props.submitHandler}
                nameChange={props.nameChange}
                values={props.values}
                error={props.error}
            />
        </div>
    );
}

export default MainCalc;
