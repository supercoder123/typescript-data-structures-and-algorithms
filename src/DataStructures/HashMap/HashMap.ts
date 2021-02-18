import LinkedList  from '../LinkedList/LinkedList';

class HashMap {
    public buckets: LinkedList<{key: string, value: any}>[];

    constructor(public size = 53) {
        this.buckets = new Array(size).fill(null).map(() =>  new LinkedList());
    }

    /* sum all the char codes and return mod with bucket size*/
    private hash(key): number {
        let total = 0;
        const prime = 31;  // for more evenly distributed bucket numbers
        for(let index = 0; index < Math.min(key.length, 100); index++) {
            let value = key.charCodeAt(index) - 96;
            total = ((total * prime) + value) % this.size;

            /* simple hash function */
            // total += key.charCodeAt(index) % this.size;
        }
        return total;    
    }

    set(key, value) {
        const bucketNumber = this.hash(key);
        const bucketLinkedList = this.buckets[bucketNumber];
        const node = bucketLinkedList.find(key, (llnode) => llnode.value.key === key);
        if (!node) {
            bucketLinkedList.append({key, value});
        } else {
            node.value.value = value;
        }
    }

    get(key) {
        const bucketNumber = this.hash(key);
        const bucketLinkedList = this.buckets[bucketNumber];
        const node = bucketLinkedList.find(key, (llnode) => llnode.value.key === key);
        if (node) {
            return node.value.value;
        } else  {
            return null;
        }
    }

    delete(key) {
        const bucketNumber = this.hash(key);
        const bucketLinkedList = this.buckets[bucketNumber];
        const node = bucketLinkedList.find(key, (llnode) => llnode.value.key === key);
        if (node) {
            bucketLinkedList.delete(node.value);
            return true;
        } else {
            return false;
        }
    }

    keys() {
        const keys = [];
        this.buckets.map((list) => {
            list.toArray().forEach((node) => {
                keys.push(node.key);
            });
        });
        return keys;
    }

    values() {
        const values = [];
        this.buckets.forEach((list) => {
            list.toArray().forEach((node) => {
                values.push(node.value);
            });
        });
        return values;
    }
}

const map = new HashMap(5);
map.set("quest", "ans");
map.set("question", 88);
map.set('a', 23);
console.log(map.values(), map.keys());
console.log(map.delete('a'));
console.log(map.get('questionm'))
