const { default: axios } = require("axios")


// express template projesine istek gönderir.
function sendGetRequestSync() {
    const url = "http://localhost:5000/api"
    console.log('Sending Request.');
    axios.get(url).then((response) => {
        console.log('data : ',response.data)
    }).catch((err) => {
        console.log("error: ",err.message)
    })
}

sendGetRequestSync()

