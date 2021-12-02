export default function searchApi(data){

    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/search?q=${data.textSearch}`;
        fetch(url, { 
            method: 'GET'
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