//This algorithm is an implementation of the Breadth-First Search (BFS) algorithm. It is used to browse or search in graphic data structures

function breadthFirstSearch(graph, start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift();

        if(!visited.has(node)) {
            console.log(node);
            visited.add(node);

            const neighbors = graph[node];
            for (const neighbor of neighbors) {
                queue.push(neighbor);
            }
        }
    }
}