import React from "react";
import Items from '../components/index';
import * as actions from "../actions/index";
import {connect} from "react-redux"

class ItemsPageContainer extends React.Component {
    componentDidMount(){
        // this.props.initload()
        this.props.pagingProduct({activePage : 1})
    }
    render() { 
        console.log(this.props,'container')
        
        return (
            <Items 
            {...this.props}
            />
        );
    }
}
// lấy dữu liệu từ store reduser
const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,    
    }
}

const mapDispatchToProps = (dispatch) =>{
    
    return {
        initload : () => { dispatch(actions.getAction())
        },
        createItem:(data)=>{
            dispatch(actions.createActionRequest(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteActionRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateActionRequest(data))
        },
        searchItem:(data)=>{
            dispatch(actions.searchActionRequest(data))
        },
        pagingProduct: (data) => {
            dispatch(actions.pagingProductRequest(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPageContainer)