import React from 'react';

const Button = (props) => {
    const {buttonText, onClickFunction} = props;
    return (
    <button onClick={onClickFunction}>{buttonText}</button>
    )
};

export {Button};