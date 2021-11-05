import { TreeNode } from "./TreeNode";

type traversalCallback<T> = (node: TreeNode<T>, nodesVisited: T[]) => void;

class BinarySearchTree<T> {
    public root: TreeNode<T>;

    constructor() {
        this.root = null;
    }

    insert(value: T): this {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (value === current.value) {
                return this;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    insertRecursive(value: T) {
        this.root = this.insertRecursiveHelper(this.root, value);
        return this;
    }

    private insertRecursiveHelper(node: TreeNode<T>, value: T): TreeNode<T> {
        if (node === null) {
            return new TreeNode(value);
        } else if (value < node.value) {
            node.left = this.insertRecursiveHelper(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.insertRecursiveHelper(node.right, value);
            return node;
        }
    }

    deleteNode(value: T): void {
        this.root = this.delete(this.root, value);
    }

    private delete(node: TreeNode<T>, value: T) {
        // first find the node to be deleted
        if (!node) {
            return this.root;
        } else if (value < node.value) {
            node.left = this.delete(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.delete(node.right, value);
            return node;
        } else {
            // node is found
            // no children
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {  //  right child exists
                return node.right;
            } else if (node.right === null) { // left child exists
                return node.left;
            } else {  // both children exist
                const temp = this.getSmallestNode(node.right);
                node.value = temp.value;
                node.right = this.delete(node.right, temp.value);
                return node;
            }
        }
    }

    // get the smallest node of the right subtree
    // Alternate logic: get largest node of left subtree
    private getSmallestNode(node: TreeNode<T>) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    find(value: T): TreeNode<T> {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }

    // findRecursive() {

    // }

    // findRecursiveHelper() {

    // }


    traverse(traversalCallback: traversalCallback<T>): T[] {
        const nodesVisited: T[] = [];
        traversalCallback(this.root, nodesVisited);
        return nodesVisited;
    }

    inOrderTraversal: traversalCallback<T> = (node, nodesVisited) => {
        if (node) {
            this.inOrderTraversal(node.left, nodesVisited);
            nodesVisited.push(node.value);
            this.inOrderTraversal(node.right, nodesVisited);
        }
    }

    preOrderTraversal: traversalCallback<T> = (node, nodesVisited) => {
        if (node) {
            nodesVisited.push(node.value);
            this.preOrderTraversal(node.left, nodesVisited);
            this.preOrderTraversal(node.right, nodesVisited);
        }
    }

    postOrderTraversal: traversalCallback<T> = (node, nodesVisited) => {
        if (node) {
            this.postOrderTraversal(node.left, nodesVisited);
            this.postOrderTraversal(node.right, nodesVisited);
            nodesVisited.push(node.value);
        }
    }

    exists(value: T): boolean {
        const node = this.find(value);
        return node ? true : false;
    }
}

const bst = new BinarySearchTree();
bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(50)
bst.insert(60);
bst.insert(30);
bst.insert(90);
bst.insert(2);

bst.deleteNode(20);
console.log(bst.traverse(bst.inOrderTraversal));
console.log(bst.traverse(bst.preOrderTraversal));
console.log(bst.traverse(bst.postOrderTraversal));

console.log(bst.exists(90));
console.log(bst.root);

