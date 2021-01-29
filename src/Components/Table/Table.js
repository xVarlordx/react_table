import React, {Component} from "react";
import classes from './Table.module.css';
import Row from "../Row/Row";


class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {rows} = this.props
        return (
            <div className={classes.Table}>
                <div className={classes.Table__header}>
                    <div>Number</div>
                    <div>Name</div>
                    <div>Power</div>
                    <div>Status</div>
                </div>

                {rows.map((row) => {
                        return (<Row key={row.id} row={row}/>)
                    }
                )}
            </div>

        )
    }
}

export default Table