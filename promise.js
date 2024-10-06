
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
const arrs = [
    promise1,
    promise2,
    promise3,
]


const promiseAll =  (promiseArr) => {
    return new Promise((resolve, reject) => {
        const arrs = Array.from(promiseArr);
        const len = arrs.length;
        const result = new Array(len);
        let count = 0;
        arrs.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = {
                    value: res,
                    status: 'fullfilled'
                }
                count++;
                if (count === len) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        })
    })
}

console.log('promiseAll', 
    promiseAll(arrs).then(res => {
    console.log('res', res)}).catch(err => {
        console.log('err', err);
    })
);