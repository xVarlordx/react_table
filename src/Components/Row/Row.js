import React from "react";
import classes from './Row.module.css'

function Row(props) {

const {row} = props;

    return (
        <div className={classes.Row}>
            <div>{row.number}</div>
            <div>{row.name}</div>
            <div>{row.power}</div>
            <div>{row.status}</div>
        </div>
    )
}

export default Row