function mergeArrays<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2];
}

const tab: number[] = [1, 2, 3];
const tab2: number[] = [4, 5, 6];

const mergedArray: number[] = mergeArrays(tab, tab2);
console.log(mergedArray);