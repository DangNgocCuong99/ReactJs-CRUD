export default function postApi(data){
    console.log(data);
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3008';
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