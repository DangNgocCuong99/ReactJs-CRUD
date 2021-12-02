import React, { Component } from "react";

class Items extends Component {
    state = {
        id: '',
        name: '',
        age: '',
        activePage: 1,

    };

    render() {
        let listData = [];
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{key + 1}</th>
                        <th>{item.name}</th>
                        <th><button onClick={() => this.props.deleteItem(item._id)} >DELETE</button>
                            <button onClick={() => this.setState({ id: item._id, name: item.name })} >FIX</button></th>
                    </tr>
                )
            })
        }
        let BtnPage = []
        for (let i = 1; i <= this.props.totalPage; i++) {
            BtnPage.push(
                <button key={i}
                    onClick={() => {
                        this.state.name
                            ? this.props.searchItem({
                                activePage: i,
                                name: this.state.name
                            })
                            : this.props.pagingProduct({
                                activePage: i
                            })
                    }}

                    style={
                        this.props.activePage === i
                            ? { backgroundColor: "rgb(65 15 227)" }
                            : { backgroundColor: null }}

                >{i}</button>
            )
        }

        return (
            <div>
                <table>
                    <tbody><tr>
                        <th>
                            <input placeholder="nhap du lieu " value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                        </th>
                        <th>
                            <button onClick={() => { return (this.props.createItem({ name: this.state.name, activePage: this.state.activePage }), this.setState({ name: '' })) }} >ADD</button>
                            <button onClick={() => this.props.updateItem({ id: this.state.id, name: this.state.name, activePage: this.state.activePage })} >UPDATE</button>
                            <button onClick={() => this.props.searchItem({ name: this.state.name, activePage: this.state.activePage })} >SEARCH</button>
                        </th>
                    </tr></tbody></table>
                <table className="List-Item">
                    <tbody>
                        <tr >
                            <th style={{ width: '10%' }} className='id'>STT</th>
                            <th style={{ width: '30%' }} className='name'>Tên Của Sinh Viên</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
                <div>{BtnPage}</div>
            </div>

        )
    }
}
export default Items