import { Graph, GraphType } from "../Graph";

describe('Graph', () => {
    // Sample graph used for testing purposes 
    // https://miro.medium.com/max/4800/1*3tLY8VADFc5Cr71aEnZ5mg.png
    test('should initialize a undirected graph', () => {
        const graph = new Graph();
        Graph.type = GraphType.UNDIRECTED;

        graph.addEdge(6, 5, 9);
        graph.addEdge(6, 1, 14);
        graph.addEdge(5, 4, 6);
        graph.addEdge(4, 3, 11);
        graph.addEdge(4, 2, 15);
        graph.addEdge(2, 1, 7);
        graph.addEdge(2, 3, 10);
        graph.addEdge(1, 3, 9);
        graph.addEdge(3, 6, 2);

        expect(graph.getTotalWeight()).toBe(9 + 14 + 6 + 11 + 15 + 7 + 10 + 9 + 2);
        graph.removeEdge(3, 6);
        expect(graph.getTotalWeight()).toBe(9 + 14 + 6 + 11 + 15 + 7 + 10 + 9);
        expect(Array.from(graph.getVertices()).length).toBe(6);
        graph.removeVertex(3);
        expect(Array.from(graph.getVertices()).length).toBe(5);
    });
});