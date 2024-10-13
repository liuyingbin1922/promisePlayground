/**
 * @description 前K个元素排序;
 */

function sortFirstK(arr, k) {
    if (!Array.isArray(arr) || k <= 0 || k > arr.length) {
        return arr;
    }

    // 使用快速选择算法找到第k个元素
    function quickSelect(left, right, k) {
        if (left === right) return;

        let pivot = partition(left, right);

        if (k === pivot) {
            return;
        } else if (k < pivot) {
            quickSelect(left, pivot - 1, k);
        } else {
            quickSelect(pivot + 1, right, k);
        }
    }

    // 分区函数
    function partition(left, right) {
        let pivot = arr[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }

    quickSelect(0, arr.length - 1, k);

    // 对前k个元素进行排序
    return arr.slice(0, k).sort((a, b) => a - b).concat(arr.slice(k));
}

// 使用示例
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(sortFirstK(arr, k)); // 输出: [1, 2, 3, 5, 6, 4]


/**
 * @description 排序前K个元素;
 */
const sortK = (nums)  => {
    const len = nums.length;
    const arr = [...nums];
    if (len < k) {
        return arr.sort();
    }

    const partArr = nums.slice(0, k);

    return partArr.sort((a,b) => a - b);
}



/**
 * @description 排序前K个元素；
 */
const sortFirstK1 = (nums, k) => {
    const arr = [...nums];
    arr.sort();
    const result = [];
    
    for (let i = 0; i < k; i++) {
        result.push(arr[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (arr.indexOf(nums[i]) < 0) {
            result.push(nums[i])
        }
        continue;
    }

    return result;

} 

/**
 * @description add(1)(2)(3) 闭包实现;
 */
function myAdd  (num) {
    let sum = num;
    function add(num) {
        sum += num;
        return add;
    }
    add.toString = function() {
        return sum;
    }
    return add;
}

function _add(num) {
    myAdd.toString = function() {
        return myAdd(num);
    }
}


function addFunc(num) {
    const add2 = (num2) => {
        num = num + num2;
        add2.toString = () => num;
        return add2;
    }
    return add2;
}

console.log('addFunc::', addFunc(1)(2)(3).toString());


const addParamsFunc = (...args) => args.reduce((a,b) => a + b, 0);

function mycurrying(fn) {

    let args = [];
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }

}

const addParamsFuncWrapper = mycurrying(addParamsFunc);

console.log('addParamsFuncWrapper', addParamsFuncWrapper(1)(2)(3,4)());


/**
 * @description 判断是否是回文字符串/回文数;
 */
function isCycle(str) {
    const arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

    if (arr.length % 2 > 0) {
        const mid = arr.length / 2;
        while(right > mid && left < mid) {
            if (arr[left] !== arr[right]) {
                return false;
            }
            left++;
            right--;
        }
    }else {
        while(left < right) {
            if (arr[left] !== arr[right]) {
                return false;
            }
            left++;
            right--;
        }
    }

   

    return true
}


console.log('isCycle', isCycle('sddse'));


// 限定长度；
/**
 * @description 函数curry 实现；
 */
function practiceCurry (args) {
    function add(num) {
        args = num + args;
        return add;
    }
    add.toString = function() {
        return args;
    }
    return add;
}

console.log('practiceCurry', practiceCurry(1)(2)(3)(1).toString());