
/**
 * @description 深拷贝;
 * @param {*} obj 
 * @returns 
 */

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

/**
 * @description 实现对象合并，如果对象的key相同，字符串拼接，如果是数组，合并数组，如果是对象，递归合并;
 * @param {*} obj1 
 * @param {*} obj2 
 */
function merge(obj1, obj2) {
   if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return null;
    }

    Object.keys(obj2).forEach(key => {
        if (obj1[key] === undefined) {
            obj1[key] = obj2[key];
        } else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
            obj1[key] = obj1[key] + obj2[key];
        } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            obj1[key] = [...obj1[key], ...obj2[key]];
        } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            obj1[key] = merge(obj1[key], obj2[key]);
        }
    });

    return obj1;
}

const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, 5]
    }
};

const obj2 = {
    a: 2,
    e: 'str',
    b: {
        c: 3,
        d: [6, 7, 8]
    }
};

const mergedObj = merge(obj1, obj2);
console.log('mergedObj::',mergedObj);


function deepCompare(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// 使用示例
const originalObj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, 5]
    }
};

const clonedObj = deepClone(originalObj);
console.log(deepCompare(originalObj, clonedObj)); // 输出: true

clonedObj.b.d[0] = 6;
console.log(deepCompare(originalObj, clonedObj)); // 输出: false
