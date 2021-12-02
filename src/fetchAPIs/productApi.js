import { LIMIT } from "../constants";
export function pagingProduct(data) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3005/catalogue/paging?page=${data.activePage}&limit=${LIMIT}`;
      const config = {
        method: "GET",
      };
      fetch(url, config)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }


  export default function callApi(){
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/ListStudent';
        fetch(url, { 
            method: 'GET'
    
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res) 
            console.log(res,'tra ve.............');
        })
        .catch((error) =>{
            reject(error);
        })
    })
    }


    export default function deleteApi(id){
        return new Promise((resolve, reject) => {
            const url = `http://localhost:3001/ListStudent/${id}`;
            fetch(url, { 
                method: 'DELETE'
            })
            .then((response) => response.json())
            .then((res) => {
                resolve(res)
            })
            .catch((error) =>{
                reject(error);
            })
        })
        }
        
        export default function postApi(data){
            console.log(data);
            return new Promise((resolve, reject) => {
                const url = 'http://localhost:3001/ListStudent';
                fetch(url, { 
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then((res) => {
                    resolve(res)
                })
                .catch((error) =>{
                    reject(error);
                })
            })
            }

            export default function searchApi(data){
                console.log(data,'log data gửi đi');
                return new Promise((resolve, reject) => {
                    const url = `http://localhost:3001/ListStudent?q=${data.textSearch}`;
                    fetch(url, { 
                        method: 'GET'
                    })
                    .then((response) => response.json())
                    .then((res) => {
                        resolve(res)
                        console.log(res,'log data gửi về');
                    })
                    .catch((error) =>{
                        reject(error);
                    })
                })
                }
                export default function updateApi(data){
                    console.log(data,'fetch api');
                    return new Promise((resolve, reject) => {
                        const url = `http://localhost:3001/ListStudent/${data.id}`;
                        fetch(url, { 
                            method: 'PUT',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(data)
                        })
                        .then((response) => response.json())
                        .then((res) => {
                            resolve(res)
                        })
                        .catch((error) =>{
                            reject(error);
                        })
                    })
                    }