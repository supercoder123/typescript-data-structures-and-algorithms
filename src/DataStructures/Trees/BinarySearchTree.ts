import { TreeNode } from "./TreeNode";

class BinarySearchTree<T> {
    public root;

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

    insertRecursive(value) {
        this.root = this.insertRecursiveHelper(this.root, value);
        return this;
    }

    insertRecursiveHelper(node:TreeNode<T>, value: T): TreeNode<T> {
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

    // delete(): void {

    // }

    find(value): TreeNode<T> {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while(current) {
            if (value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }

    traverse(traversalCallback): T[] {
        const nodesVisited: T[] = [];
        traversalCallback(this.root, nodesVisited);
        return nodesVisited;
    }

    inOrderTraversal = (node, nodesVisited) => {
        if (node) {
            this.inOrderTraversal(node.left, nodesVisited);
            nodesVisited.push(node.value);
            this.inOrderTraversal(node.right, nodesVisited);
        }
    }

     preOrderTraversal = (node, nodesVisited) => {
        if (node) {
            nodesVisited.push(node.value);
            this.preOrderTraversal(node.left, nodesVisited);
            this.preOrderTraversal(node.right, nodesVisited);
        }
    }

    postOrderTraversal = (node, nodesVisited) => {
        if (node) {
            this.postOrderTraversal(node.left, nodesVisited);
            this.postOrderTraversal(node.right, nodesVisited);
            nodesVisited.push(node.value);
        }
    }

    // exists():  boolean {

    // }
}

const bst = new BinarySearchTree();
bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(50)
bst.insert(60);
console.log(bst.traverse(bst.inOrderTraversal));
console.log(bst.traverse(bst.preOrderTraversal));
console.log(bst.traverse(bst.postOrderTraversal));

console.log(bst.find(50));
console.log(bst);

