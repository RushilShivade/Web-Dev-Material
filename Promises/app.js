const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}

fakeRequest('youtube.com/codeWithHarry')
    .then(() => {
        console.log('Done with request!')
    })
    .catch(() => {
        console.log("Request failed")
    })