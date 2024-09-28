/**
 * @description 防抖函数实现
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}

/**
 * @description 节流函数实现
 */
function throttle(func, wait) {
    let timeout;
    let lastArags;
    let lastContext;
    let lastTime = 0;

    return function(...args) {
        const context = this;
        const now = Date.now();
        const remainingTime = wait - (now - lastTime);

        lastArgs = args;
        lastContext = context;

        clearTimeout(timeout);
        if (remainingTime <= 0) {
            lastTime = now;
            func.apply(context, args);
        } else {
            timeout = setTimeout(() => {
                lastTime = Date.now();
                func.apply(lastContext, lastArgs);
            }, remainingTime);
        }
    }
}
    

/**
 * @description 实现函数的apply 和 call 方法
 */
function myapply(func, context, args) {
    context = context || window;
    context.fn = func;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

function mycall(func, context, ...args) {
    return myapply(func, context, args);
}

function mydebounce(func,wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}

function mythrottle(func,wait) {
    let myargs;
    let mycontext;
    let mytimeout;
    let mylastTime = 0;
    return function(...args) {
        const context = this;
        const now = Date.now();
        const remainingTime = wait - (now - mylastTime);

        myargs = args;
        mycontext = context;

        clearTimeout(mytimeout);
        if (remainingTime <= 0) {
            mylastTime = now;
            func.apply(context, args);
        } else {
            mytimeout = setTimeout(() => {
                mylastTime = Date.now();
                func.apply(mycontext, myargs);
            }, remainingTime);
        }
    }
}


/**
 * @description 实现bind方法
 */
function mybind(func, context, ...args) {
    return function(...args2) {
        return func.apply(context, args.concat(args2));
    }
}

/**
 * @description 实现函数curry 化；
 */

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) { 
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(...args2));
            }
        }
    }
}




