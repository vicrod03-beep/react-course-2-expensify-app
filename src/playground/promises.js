const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({id:1, name:'pedro'})
        //reject('Something went wrong')
    }, 3500)
})

console.log('before')

promise.then((data) => {
    console.log('1', data)
    return 'some data'
}).then((data) => {
    console.log(data)
}).catch(error => {
    console.log('error: ', error)
})

console.log('after')

