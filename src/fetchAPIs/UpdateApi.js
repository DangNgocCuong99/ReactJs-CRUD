export default function updateApi(data){
    console.log(data,'fetch api update');
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/${data.id}`;
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