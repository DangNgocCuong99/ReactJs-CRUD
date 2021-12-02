import { put, takeEvery } from 'redux-saga/effects'
// import getItems from '../fetchAPIs/callAPI'
import postApi from '../fetchAPIs/PostApi'
import deleteApi from '../fetchAPIs/DelApi'
import updateApi from '../fetchAPIs/UpdateApi'
import searchApi from '../fetchAPIs/searchpagiApi'
import pagingProduct from '../fetchAPIs/pagingApi'
import * as types from '../constant'
import * as type from "../actions"

// function* getListItems() {
//     try {
//         const res = yield getItems()
//         yield put({
//             type: types.GET_ITEM_SUCCESS,
//             payload: res
//         })

//     } catch (error) {
//         yield put({
//             type: types.GET_ITEM_FAILURE,
//             payload: { errorMessage: error.message }
//         })
//     }
// }
function* createListItem({ payload }) {
    try {
        yield postApi(payload);
        yield put(type.createActionSuccess());
        yield put(type.pagingProductRequest(payload));
    } catch (error) {
        yield put(type.createActionFailure(error));
    }
}
function* deleteListItems({ payload }) {
    try {
        yield deleteApi(payload);
        yield put(type.deleteActionSuccess());
        yield put(type.pagingProductRequest(payload));
        
    } catch (error) {
        yield put(type.deleteActionFailure(error));
    }

}
function* updateListItems({ payload }) {
    try {
        yield updateApi(payload);
        yield put(type.updateActionSuccess());
        yield put(type.pagingProductRequest(payload));
    } catch (error) {
        yield put(type.updateActionFailure(error));
    }

}
function* searchListItems({ payload }) {
    try {
        const res = yield searchApi(payload);
        yield put({
            type: types.SEARCH_ITEM_SUCCESS,
            payload: {res: res.listData , totalPage:res.totalPage, activePage: payload.activePage}
        })
    } catch (error) {
        yield put(type.searchActionFailure(error));
    }

}
function* pagingListItems({ payload }) {
 
    try {
        const res = yield pagingProduct(payload.activePage);
        yield put({
            type: types.PAGING_PRODUCT_SUCCESS,
            payload: {res: res.listData , totalPage:res.totalPage , activePage: payload.activePage}
        })
    } catch (error) {
        yield put(type.pagingProductFailure(error));
    }

}
export const ItemSaga = [
    // takeEvery(types.GET_ITEM_REQUEST, getListItems),
    takeEvery(types.CREATE_ITEM_REQUEST, createListItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteListItems),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateListItems),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchListItems),
    takeEvery(types.PAGING_PRODUCT_REQUEST, pagingListItems),

]
