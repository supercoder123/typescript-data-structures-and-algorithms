import { LinkedList } from "../LinkedList";

const list = new LinkedList<number>();

describe('LinkedList', () => {

    test('should add node to the end of linked list', () => {
        list.append(3)
        list.append(5)
        expect(list.toArray()).toEqual([3, 5]);
    });

    test('should add node to the beginning of linked list', () => {
        list.prepend(55);
        expect(list.toArray()).toEqual([55, 3, 5]);
    });

    test('should insert node after given node', () => {
        list.insert(list.find(55), 44);
        expect(list.head.value).toBe(55);
        expect(list.toArray()).toEqual([55, 44, 3, 5]);
    });

    test('should reverse linked list', () => {
        list.reverse();
        expect(list.toArray()).toEqual([5, 3, 44, 55]);
    });

    test('should delete node from list', () => {
        list.delete(5);
        expect(list.toArray()).toEqual([3, 44, 55]);
    });

})

//     .append(5)
//     .prepend(44)
//     .prepend(7)
//     .prepend(79)
//     .append(53)
//     .insert(list.find(79), 89);

// list.print();

// list.delete(79);
// list.delete(53);
// list.delete(44);
// list.reverse();
// // console.log(list)
// list.print();
// console.log(list.toString());