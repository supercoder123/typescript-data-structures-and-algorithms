type ComparatorCallback<T> = (a: T, b: T) => number;

export class Comparator<T> {
    constructor(public compare: ComparatorCallback<T> = Comparator.defaultCompareFunction) {
    }

    /**
     * Default comparison function. It just assumes that "a" and "b" are strings or nu\
     mbers.
    */
    static defaultCompareFunction<T>(a: T, b: T): number {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    /**
    * Checks if two variables are equal.
    */
    equal(a: T, b: T): boolean {
        return this.compare(a, b) === 0;
    }

    /**
     * Checks if variable "a" is less than "b".
     */
    lessThan(a: T, b: T): boolean {
        return this.compare(a, b) < 0;
    }

    /**
     * Checks if variable "a" is greater than "b".
     */
    greaterThan(a: T, b: T): boolean {
        return this.compare(a, b) > 0;
    }

    /**
     * Checks if variable "a" is less than or equal to "b".
     */
    lessThanOrEqual(a: T, b: T): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * Checks if variable "a" is greater than or equal to "b".
     */
    greaterThanOrEqual(a: T, b: T): boolean {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

}