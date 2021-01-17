export const listToString = () => {
    let str = '';
    return (input) => {
        str += input.toString();
        str += ' ';
        return str;
    }
}