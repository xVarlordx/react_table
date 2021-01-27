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
                {rows.map((row) => {
                        return (<Row key={row.id} row={row}/>)
                    }
                )}
            </div>

        )
    }
}

export default Table