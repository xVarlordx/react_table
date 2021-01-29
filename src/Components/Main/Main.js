import React, {Component} from "react";
import Table from "../Table/Table";
import classes from './Main.module.css'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            rows: [
                {
                    number: '1',
                    name: 'Jesus',
                    power: '1000',
                    status: 'disable',
                    id: 0

                },
                {
                    number: '2',
                    name: 'Joe',
                    power: '3',
                    status: 'disable',
                    id: 1

                },
                {
                    number: '3',
                    name: 'Donald',
                    power: '7',
                    status: 'disable',
                    id: 2

                },
                {
                    number: '4',
                    name: 'Herobrin',
                    power: '100',
                    status: 'disable',
                    id: 3

                },
                {
                    number: '5',
                    name: 'Artur',
                    power: '500',
                    status: 'disable',
                    id: 4
                }
            ]
        }
    }

    onAddHandler = (event) => {
        const kek = {
            number: '6',
            name: this.state.value,
            power: '995',
            status: 'disable',
            id: 5
        }

        this.setState(state => {
            const rows = [...state.rows, kek];

            return {
                rows,
                kek
            };
        });
        event.preventDefault();
        this.setState({value: ''})
    }



    onChangeValueHandler = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        const {rows} = this.state;
        return (
         <div className={classes.Main}>
            <Table
                rows={rows}
            />
            <div className={classes.TableInput}>
                <input id={'Search'} placeholder={'Search'} type="text"/><label htmlFor="Search"/>
                <input value={this.state.value} id={'Add New Hero'} onChange={this.onChangeValueHandler} placeholder={'Add New Hero'} type="text"/><label htmlFor="Add New Hero"/>
                <div onClick={this.onAddHandler} className={classes.AddButton}>Add New Hero</div>
            </div>

         </div>
        )
    }

}

export default Main