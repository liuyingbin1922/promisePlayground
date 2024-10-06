class LRUCache {
    constructor(opcity) {
        this.opcity = opcity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        

        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    put(key, val) {
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        if (this.map.size >= this.opcity) {
            const oldestKey = this.map.keys().next().value;
            this.map.delete(oldestKey);
        }

        this.map.set(key, val);
    }
}

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); 
console.log(cache.get(2)); 