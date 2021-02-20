export class TreeNode<T> {
    public value: T;
    public left: TreeNode<T>;
    public right: TreeNode<T>;

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}