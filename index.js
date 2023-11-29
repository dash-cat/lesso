const crypto = require('crypto')
const start = Date.now()

crypto.pbkdf2('sdfshaeyhgfn', '3', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now()- start)
})

crypto.pbkdf2('sdfshaeyhgfn', '3', 1000000, 64, 'sha512', () => {
    console.log('2 end', Date.now()- start)
})

crypto.pbkdf2('sdfshaeyhgfn', '3', 1000000, 64, 'sha512', () => {
    console.log('3 end', Date.now()- start)
})

crypto.pbkdf2('sdfshaeyhgfn', '3', 1000000, 64, 'sha512', () => {
    console.log('4 end', Date.now()- start)
})

crypto.pbkdf2('sdfshaeyhgfn', '3', 1000000, 64, 'sha512', () => {
    console.log('4 end', Date.now()- start)
})

console.log(start)


function recursivePromise(promise) {
    return promise.then(() => {
        console.log('promise 1')
        recursivePromise(Promise.resolve())
    })
}

recursivePromise(Promise.resolve())

setTimeout(() => console.log('timeout'), 0)

for (let i = 0; i < Infinity; i++) {
    console.log(i)
    Promise.resolve().then(() => console.log('2'))
}