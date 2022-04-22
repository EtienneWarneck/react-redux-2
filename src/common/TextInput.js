import React from 'react';

function TextInput(props) {
    return (
        <div >
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="text"
                    onChange={props.onChange}
                    name={props.name}
                    className="form-control"
                    value={props.title}
                />
            </div>
        </div>
    );
}

export default TextInput;