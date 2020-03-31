import React from 'react';
function Alert(props) {
    if (props.error) {
        return (
            <div style={{ textAlign: 'center', color: 'red', fontSize:'.7em' }}>
                oops, Check your inputs and try again,
                 make sure they are real names
            </div>
        );
    }
    return (
        <div>

        </div>
    )
}

export default Alert;
