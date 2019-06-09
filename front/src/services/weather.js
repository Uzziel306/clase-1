import axios from 'axios'
export  const getWeahter = (lat, lon) => {
    console.log(lat, lon)
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/clima/temp?lat=${lat}&lon=${lon}`)
            .then(function (response) {
                // handle success
                resolve(response.data.main.temp)
                console.log(response);
            })
            .catch(function (error) {
                // handle 
                reject(error)
                console.log(error);
            })
    })
}

