import * as types from "../constant";
export default function pagingProduct(data) {

    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/?activePage=${data}&limit=${types.LIMIT}`;
        fetch(url, {
            method: 'GET'

        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error);
            })
    })
}