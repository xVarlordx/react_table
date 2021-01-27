import React, {Component} from "react";
import Table from "../Table/Table";
import classes from './Main.module.css'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [
                {
                    number: 'number',
                    name: 'name',
                    power: 'power',
                    status: 'status',
                    id: 0

                },
                {
                    number: '1',
                    name: 'Joe',
                    power: '3',
                    status: 'disable',
                    id: 1

                },
                {
                    number: '2',
                    name: 'Donald',
                    power: '7',
                    status: 'disable',
                    id: 2

                },
                {
                    number: '3',
                    name: 'Herobrin',
                    power: '100',
                    status: 'disable',
                    id: 2

                },
                {
                    number: '4',
                    name: 'Artur',
                    power: '500',
                    status: 'disable',
                    id: 2

                }
            ]
        }
    }

    render() {
        const {rows} = this.state;
        return (
            <Table
                rows={rows}
            />
        )
    }

}

export default Main