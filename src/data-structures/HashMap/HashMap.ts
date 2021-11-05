import LinkedList from '../LinkedList/LinkedList';

type HashMapElement = { key: string, value: unknown };
type HashMapElementValue = HashMapElement['value'];

// hash map implementaion using linked lists
class HashMap {
    public buckets: LinkedList<HashMapElement>[];

    constructor(public size = 53) {
        this.buckets = new Array(size).fill(null).map(() => new LinkedList());
    }

    /* sum all the char codes and return mod with bucket size*/
    private hash(key: string): number {
        let total = 0;
        const prime = 31;  // for more evenly distributed bucket numbers
        for (let index = 0; index < Math.min(key.length, 100); index++) {
            const value = key.charCodeAt(index) - 96;
            total = ((total * prime) + value) % this.size;

            /* simple hash function */
            // total += key.charCodeAt(index) % this.size;
        }
        return total;
    }

    set(key: string, value: unknown) {
        const bucketNumber = this.hash(key);
        const bucketLinkedList = this.buckets[bucketNumber];
        const node = bucketLinkedList.find(key, (llnode) => (llnode as HashMapElement).key === key);
        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }

    get(key: string) {
        const bucketNumber = this.hash(key);
        const bucketLinkedList = this.buckets[bucketNumber];
        const node = bucketLinkedList.find(key, (llnode) => (llnode as HashMapElement).key === key);
        if (node) {
            return node.value.value;
        } else {
            return null;
        }
    }

    delete(key: string) {
        const bucketNumber = this.hash(key);
        const bucketLinkedList = this.buckets[bucketNumber];
        const node = bucketLinkedList.find(key, (llnode) => (llnode as HashMapElement).key === key);
        if (node) {
            bucketLinkedList.delete(node.value);
            return true;
        } else {
            return false;
        }
    }

    keys(): string[] {
        const keys: string[] = [];
        this.buckets.map((list) => {
            list.toArray().forEach((node) => {
                keys.push(node.key);
            });
        });
        return keys;
    }

    values(): HashMapElementValue[] {
        const values: HashMapElementValue[] = [];
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
console.log(map.get('question'))
