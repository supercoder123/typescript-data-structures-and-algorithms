// How many times does a substring appear in a string?
// This is a naive way, not the best approach

function naiveStringSearch(str: string, substr: string) {
    let matches = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if (str[i + j] !== substr[j]) {
                break;
            }
            if (j === substr.length - 1) {
                matches++;
            }
        }
    }
    return matches;
}

console.log(naiveStringSearch("wowomgzomg", "abc"));  // 0
console.log(naiveStringSearch("lorie loled", "lol"));  // 1
console.log(naiveStringSearch("harold said haha in hamburg", "haha"));  // 1
console.log(naiveStringSearch("wowomgzomg", "omg"));  // 2
console.log(naiveStringSearch("omgomgoomg", "omg"));  // 3
