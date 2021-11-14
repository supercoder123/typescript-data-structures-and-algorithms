/**
 * For weighted graphs we will keep the weight value inside the node
 * Adjacency List representation of weighted graph
 * https://www.tutorialspoint.com/weighted-graph-representation-in-data-structure
 */

export class GraphEdge<T> {
    constructor(public node: GraphNode<T>, public weight: number) { }
}

export class GraphNode<T> {
    private adjacents: Array<GraphEdge<T>>;

    constructor(public value: T) {
        this.adjacents = [];
    }

    addAdjacent(node: GraphNode<T>, weight: number): void {
        this.adjacents.push(new GraphEdge<T>(node, weight));
    }

    removeAdjacent(node: GraphNode<T>): void {
        this.adjacents = this.adjacents.filter(edge => edge.node.value !== node.value);
    }

    getNeighbors() {
        return this.adjacents;
    }

    getEdges(): string[] {
        return this.adjacents.map((edge) => `${this.value}__${edge.node.value}`)
    }
}