const { default: axios } = require("axios")


// express template projesine istek gönderir. (get)
function sendGetRequestSync() {
    const url = "http://localhost:5000/api"
    console.log('Sending Get Request.');
    axios.get(url)
    .then((response) => {
        console.log('Get Response Data : ',response.data)
    })
    .catch((err) => {
        console.log("error: ",err.message)
    })
}

function sendPostRequestSync() {
    const url = "http://localhost:5000/api"
    console.log('Sending Post Request.');
    axios.post(url, {
        param1: "Param1-text",
        param2:"param2-text"
    })
    .then((response) => {
        console.log('Post-Request Response Data : ',response.data)
    })
    .catch((err) => {
        console.log("error: ",err.message)
    })
}

sendGetRequestSync()
sendPostRequestSync()
