//Basic implementation of a graph in JavaScript, with methods for adding nodes, adding edges, and traversing the graph using Depth-First Search (DFS).
class Graph {
    constructor() {
        this.adjList = new Map();
    }
    addVertex(vertex){
        this.adjList.set(vertex, []);
    }
    addEdge(v, w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }
    dfs(startingNode) {
        const visited = new Set();

        function dfsHelp(node){
            visited.add(node);

            const neighbors = this.adjList.get(node);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsHelp(neighbor);
                }
            }
        }
        dfsHelp(startingNode);
    }
}