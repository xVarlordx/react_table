import React from "react";
import classes from './Row.module.css'
function Row(props) {



    return (
        <div className={classes.Row}>
            <div>{props.row.number}</div>
            <div>{props.row.name}</div>
            <div>{props.row.power}</div>
            <div>{props.row.status}</div>
        </div>
    )
}

export default Row