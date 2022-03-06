interface AdjacencyList {
    [key: string]: Array<string>;
}

interface Visited {
    [key: string]: boolean;
}

export class SimpleGraph {
    public static directed = true;
    constructor(private adjList: AdjacencyList) {
        this.adjList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
        return this.adjList[vertex];
    }

    numOfVertices() {
        return Object.keys(this.adjList).length;
    }

    getNeighbours(vertex: string) {
        return this.adjList[vertex].length > 0 ? this.adjList[vertex] : null;
    }

    addEdge(source: string, destination: string) {
        this.addVertex(source);
        this.addVertex(destination);
        this.adjList[source].push(destination);
        if (!SimpleGraph.directed) {
            this.adjList[destination].push(source);
        }
    }

    printGraph() {
        for (const [vertex, neighbours] of Object.entries(this.adjList)) {
            console.log(vertex, neighbours);
        }
    }

    bfs(source: string) {
        const queue = [];
        queue.push(source);
        const visited: Visited = {};
        while (queue.length > 0) {
            const vertex = queue.shift();
            visited[vertex] = true;
            const neighbours = this.getNeighbours(vertex);
            console.log('bfs', vertex);
            neighbours.forEach((vertex) => {
                if (neighbours && !visited[vertex]) {
                    visited[vertex] = true;
                    queue.push(vertex);
                }
            });
        }
    }

    dfs(source: string) {
        const visited: Visited = {};
        this.dfsUtil(source, visited);
    }

    dfsUtil(source: string, visited: Visited) {
        if (!visited[source]) {
            visited[source] = true;
            const neighbours = this.getNeighbours(source);
            console.log('dfs', source);
            if (neighbours) {
                neighbours.forEach((vertex) => this.dfsUtil(vertex, visited));
            }
        }
    }
}
