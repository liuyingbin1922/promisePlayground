/**
 * @description 数据结构;
 */

/**
 * @description 版本比较;
 */
const compareVersion = (version1, version2) => {
    const versionArr1 = version1.split('.');
    const versionArr2 = version2.split('.');
    const len = Math.min(version1.length, version2.length);
    for (let j= 0; j < len; j++) {
        if (Number(versionArr1[j]) < Number(versionArr2[j])) {
            return -1;
        }else if(Number(versionArr1[j]) > Number(versionArr2[j])) {
            return 1;
        }
        continue;
    }
    return 0;
}

const versionArr = ['1.1.1.1', '2.0', '1.2.1', '2.1.1'];

versionArr.sort((a,b) => compareVersion(a, b));

console.log('compareversion versionArr', versionArr);
