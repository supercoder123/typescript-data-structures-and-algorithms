import { GraphNode } from "./GraphNode";

export enum GraphType {
    DIRECTED,
    UNDIRECTED
}

/**
 * 
 * |Implementation | Add Vertex | Remove Vertex | Add Edge | Remove Edge |
 * |-----|-----|-----|-----|-----|
 * |Adjacency list | O(1) | O(E+V) | O(1) | O(E) |
 * |Adjacency matrix | O(V^2) | O(V^2) | O(1) | O(1) |
 */

export class Graph<T> {
    /** Map of node values and actual node instance for fast lookup, node instances will
     * store the adjacents / neighbors
     */
    public nodes;
    public static type: GraphType = GraphType.DIRECTED;

    constructor() {
        this.nodes = new Map<T, GraphNode<T>>();
    }

    addEdge(source: T, destination: T, weight = 0) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);
        sourceNode.addAdjacent(destinationNode, weight);

        if (Graph.type === GraphType.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode, weight);
        }

        return this;
    }

    /** here add vertex has the weight param because we keep the weight of the edge  
     * stored inside the node 
     */
    addVertex(value: T) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const vertex = new GraphNode<T>(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value: T) {
        const current = this.nodes.get(value);
        for (const node of this.nodes.values()) {
            node.removeAdjacent(current);
        }
        return this.nodes.delete(value);
    }

    removeEdge(source: T, destination: T) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);

            if (Graph.type === GraphType.UNDIRECTED) {
                destinationNode.removeAdjacent(sourceNode);
            }
        }
    }

    getVertices() {
        return this.nodes.keys();
    }

    getVertex(value: T) {
        return this.nodes.get(value);
    }

    getAllEdges() {
        const edges: string[] = []
        for (const node of this.nodes.values()) {
            edges.push(...node.getEdges())
        }
        return edges;
    }

    getTotalWeight() {
        let total = 0;
        for (const node of this.nodes.values()) {
            node.getNeighbors().forEach(edge => {
                total += edge.weight;
            });
        }
        return Graph.type === GraphType.UNDIRECTED ? (total / 2) : total;
    }

}
