/**
 * @description 版本引用的先后顺序；
 */

var tree2 = {
    name: "page.js",
    require: [
      {
        name: "a@0.1.0",
        require: [
          {
            name: "d@0.2.0",
          },
          {
            name: "c@0.1.0",
          }
        ]
      },
      {
        name: "b@0.1.1",
        require: [
          {
            name: "e@0.1.2",
          },
          {
            name: "c@0.1.2",
          }
        ]
      },
      {
          name: "c@0.2.0",
       }
    ]
  };

const versionResolve = (tree2) => {
    const require = tree2.require;

    const outerMap = [];
    const innerMap = [];

    require.map(item => {
        outerMap.push(item.name);
        item.require?.map(innerItem => {
            innerMap.push(innerItem.name);
        });
    });

    // innerMap处理
    const _ver = [];
    for (let i = 0;i < innerMap.length; i++) {
        _ver.push(innerMap[i]?.split('@')[0]);
    }

    const trimArr = Array.from(new Set([..._ver]));

    trimArr.forEach()

    const _innerMap = Array.from(new Set([...innerMap])); // 去重处理;



    return _innerMap.concat(outerMap);
    // return result;
}

console.log('versionResolve', versionResolve(tree2));