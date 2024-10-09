/**
 * @description 查找字符串中出现数量最多的字母；
 * 统计字符串中每个字母出现的次数；
 */

function findMaxCode (str) {
    const arr = str.split('');
    const charObj = arr.reduce((prev,cur, idx) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    const result = Object.entries(charObj).reduce((prev, [cur, count]) => {
        return count > prev.count ? {char: cur, count} : prev;
    }, {char: '', count: 0});

    const keys = Object.keys(charObj);
    const val = [];
    for (let key of keys) {
        val.push(charObj[key]);
    }

    val.sort((a,b) => b - a);

    const max = val?.[0];

    for (let key of keys) {
        if (charObj[key] === max) {
            return key;
        }
    } 

    // return result.char;
}

console.log(findMaxCode("Hello World"), Object.entries({ H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 })); // 输出: "l"
