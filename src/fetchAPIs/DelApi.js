export default function deleteApi(id){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/${id}`;
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