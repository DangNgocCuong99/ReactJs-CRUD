import * as types from "../constant";

const DEFAULT_SATE = {
    listItem: [],
    dataFetchet: false,
    isFetching: false,
    error: false,
    errorMessage: null
}
const itemsReducer = (state = DEFAULT_SATE, action) => {

    switch (action.type) {
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                dataFetchet: true,
                listItem: action.payload
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.CREATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetchet: true
            }
        case types.CREATE_ITEM_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: "ERROR"
            }
        case types.DELETE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                dataFetchet: true
            }
        case types.DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: "ERROR"
            }
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                dataFetchet: true
            }
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: "ERROR"
            }
        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                dataFetchet: true,
                listItem: action.payload.res,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
            }
        case types.SEARCH_ITEM_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: "ERROR"
            }
        case types.PAGING_PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.PAGING_PRODUCT_SUCCESS:

            return {
                ...state,
                dataFetchet: true,
                listItem: action.payload.res,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
            }
        case types.PAGING_PRODUCT_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        default:
            return state;
    }

}


export default itemsReducer