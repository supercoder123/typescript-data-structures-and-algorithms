import { TreeNode } from "./TreeNode";

type traversalCallback<T> = (node: TreeNode<T>, nodesVisited: T[]) => void;

/**
 * 
 * > A binary search tree (or BST) is a binary tree in which each node (except leaf nodes) satisfies the
 * following rules:
 * - all values of the right subtree of a node must be greater than the node value itself,
 * - all values of the left subtree of a node must be less than the node value itself.
 * 
 * The leaf nodes children are null therefore we’re not applying these rules to them.
 * 
 * | Access | Search | Insertion | Deletion | Comment |
 * |-------|-------|-------|-------|-------|
 * | O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) | For balanced trees |
 */
export class BinarySearchTree<T> {
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
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
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


    /**
     * > ### Deleting a node cases:
     * ---
     * - Removing a leaf node - most straightforward case, we remove the node.
        - Removing a node with one child - we make the child node become a child node for the current
        node’s parent
        - Removing the node with two children - we need to find the next largest value (minimum
        value in the right branch) (inorder successor) and replace current node with that next largest value node.
        ---
     */
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

    /** 
     * Get the smallest node of the right subtree
     * 
     * Alternate logic: get largest node of left subtree
    */
    private getSmallestNode(node: TreeNode<T>) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    private getLargestNode(node: TreeNode<T>) {
        while (node.right) {
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

    findRecursive(value: T): TreeNode<T> {
        if (!this.root) {
            return null;
        }
        return this.findRecursiveHelper(this.root, value);
    }

    findRecursiveHelper(node: TreeNode<T>, value: T): TreeNode<T> {
        if (node.value === value) {
            return node;
        } else if (value < node.value && node.left) {
            return this.findRecursiveHelper(node.left, value);
        } else if (value > node.value && node.right) {
            return this.findRecursiveHelper(node.right, value);
        }
    }


    /**
     * 
     * > ### How to remember traversals
     * ---
     * - Let L be left subtree/child , R be right subtree/child and P be the parent node of L and R
     * - Now for postorder P is after(post) L & R so it becomes -> L R P
     * - for preorder P is before(pre) L & R so it becomes -> P L R
     * - for Inorder P is Inbetween(IN) L & R , so it becomes -> L P R.
     * ---
     */
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
console.log(bst.findRecursive(5));
console.log(bst.find(5));

