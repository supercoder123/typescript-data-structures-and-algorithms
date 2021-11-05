export class TreeNode<T> {
    constructor(
        public value: T,
        public left: TreeNode<T> = null,
        public right: TreeNode<T> = null
    ) { }
}
