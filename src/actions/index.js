import * as type from "../constant"

export function getAction(){
    return({
        type: type.GET_ITEM_REQUEST,
    })
}
export function createActionRequest(payload){
    return({
        type: type.CREATE_ITEM_REQUEST,
        payload
    })
}
export function createActionSuccess(){
    return({
        type: type.CREATE_ITEM_SUCCESS
    })
}
export function createActionFailure(payload){
    return({
        type: type.CREATE_ITEM_FAILURE,
        payload
    })
}
export function deleteActionRequest(payload){
    return({
        type: type.DELETE_ITEM_REQUEST,
        payload
    })
}
export function deleteActionSuccess(){
    return({
        type: type.DELETE_ITEM_SUCCESS
    })
}
export function deleteActionFailure(payload){
    return({
        type: type.DELETE_ITEM_FAILURE,
        payload
    })
}

export function updateActionRequest(payload){
    return({
        type: type.UPDATE_ITEM_REQUEST,
        payload
    })
}
export function updateActionSuccess(){
    return({
        type: type.UPDATE_ITEM_SUCCESS
    })
}
export function updateActionFailure(payload){
    return({
        type: type.UPDATE_ITEM_FAILURE,
        payload
    })
}
export function searchActionRequest(payload){
    return({
        type: type.SEARCH_ITEM_REQUEST,
        payload
    })
}
export function searchActionSuccess(payload){
    return({
        type: type.SEARCH_ITEM_SUCCESS,
        payload
    })
}
export function searchActionFailure(payload){
    return({
        type: type.SEARCH_ITEM_FAILURE,
        payload
    })
}

export function pagingProductRequest(payload) {
    return {
      type: type.PAGING_PRODUCT_REQUEST,
      payload,
    };
  }
  export function pagingProductSuccess(payload){
    return({
        type: type.PAGING_PRODUCT_SUCCESS,
        payload
    })
}
export function pagingProductFailure(payload){
    return({
        type: type.PAGING_PRODUCT_FAILURE,
        payload
    })
}