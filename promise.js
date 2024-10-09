
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


/**
 * @description 实现promise并发数控制；
 */

const limitPromise = (tasks, maxCount) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        let taskIndex = 0;

        function runTask (task) {
            count++;
            task().then(res => {
                results.push(res);
                count--;
                if (taskIndex < tasks.length) {
                    runTask(tasks[taskIndex++]);
                }else if (count === 0) {
                    resolve(results);
                }
            }).catch(Err => {
                reject(Err);
            })
        }

        while(count < maxCount && taskIndex < tasks.length) {
            runTask(tasks[taskIndex++]);
        }

        if (tasks.length === 0) {
            resolve(
                results
            )
        }
    })
}


// 并发数控制；
const mylimitPromise = (tasks, maxCount) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        const result = [];
        let taskIndex = 0;
        const runTask = (task) => {
            count++;
            task().then(res => {
                result.push(res);
                count--;
                if (taskIndex < tasks.length) {
                    runTask(tasks[taskIndex++]);
                }else if (count === 0) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        }

        while(count < maxCount && taskIndex < tasks.length) {
            runTask(tasks[taskIndex++]);
        }

        if (tasks.length === 0) {
            resolve(result);
        }
    })
}