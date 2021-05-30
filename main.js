'use strict';

class HashTable {
    constructor() {
        this.values = {};
        this.length =  0;
        this.size =  0;
    }

    addOne(elem) {
        const hash = ++this.size;
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        for (const key in elem) {
            if (!this.values[hash].hasOwnProperty(key)) {
                this.length++;
            }
            this.values[hash][key] = elem[key];
        }
    }

    addMany(arr) {
        for(const item of arr) {
            this.addOne(item);
        }
    }
    
    search(key) {
        const find = {};
        for (const hash in this.values) {
            find[hash] = this.values[hash];
        }
        if (typeof key === 'string') {
            for (const hash in this.values) {
                if (!this.values[hash].hasOwnProperty(key)) {
                    delete find[hash];
                }
            }
        }
        else if (typeof key === 'object') {
            for (const hash in this.values) {
                for (const keys in key) {
                    if (this.values[hash][keys] !== key[keys]) {
                        delete find[hash];
                    }
                }
            }
        }
        if (Object.keys(find).length == 0) return null;
        return find;
    }

    change(hash, key, value) {
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;

    }
}
