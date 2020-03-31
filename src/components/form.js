import React from 'react';


class Form extends React.Component {

    render() {
        
        return (
            <form className="Form">
                
                <input
                        className="input"
                        id="name1"
                        onChange={this.props.nameChange}
                        type="text"
                        placeholder="Your Name"
                    />
                    <br/>
                <input
                        className="input"
                        id="name2"
                        onChange={this.props.nameChange}
                        type="text"
                        placeholder="Persons Name"
                />
                <br />
                <button
                    id="button"
                    onClick={this.props.submitHandler}
                >
                    CALCULATE
                </button>
                </form>
        );
        
    }
    
}

export default Form;