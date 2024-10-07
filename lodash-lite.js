/**
 * @description lodash-lite get 方法实现；
 */

function lodashGet (obj, path) {
    if (typeof obj !== 'object' || !obj) {
        return null;
    }

    const keys = path.split('.');

    for (let i = 0;i < keys.length; i++) {
        if (!keys[i].includes('[')) {
            if (!obj[keys[i]]) {
                return undefined;
            }
            if (keys.length === 1) {
                return obj[keys[i]];
            }
            lodashGet(obj[keys[i]], keys.unshift().join('.'))
        }
    }

}

// 测试
const obj = {
    a: {
      b: {
        c: [1, 2, 3],
        d: { e: 'f' }
      }
    },
    g: null
  };
  



// 直接简单处理
function get(obj, path) {
    const keys = path.split('.');
    let result = obj;
    for (let key of keys) {

        if (key.includes('[') && key.includes(']')) {
            const arrKey = key.split('[')[0];
            const arrVal = parseInt(key.split('[')[1].split(']')[0]);
            if (!result[arrKey] || !Array.isArray(result[arrKey])) {
                return undefined;
            }
            result = result[arrKey][arrVal];
        }else {
            if (!result[key]) {
                return undefined;
            }
            result = result[key];
        }
    }

    return result;
}

console.log(get(obj, 'a.b.d.e')); // 输出: 2
