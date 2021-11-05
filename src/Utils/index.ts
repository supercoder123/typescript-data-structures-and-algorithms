// export const listToString = () => {
//     let str = '';
//     return (input) => {
//         str += input.toString();
//         str += ' ';
//         return str;
//     }
// }

// const toArray = <T>(start: T): T[] => {
//     const nodes: T[] = [];
//     let current = start;
//     while (current) {
//         nodes.push(current.value);
//         current = current.next;
//     }
//     return nodes;
// }

// const toString = <T>(start: T): string => {
//     return toArray(start).join(',');
// }