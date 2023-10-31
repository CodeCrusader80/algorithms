//This algorithm is used to find the shortest path between a source node and all other nodes in a weighted graph. Dijkstra's algorithm is widely used in various fields:
//
// Communication Networks: To find the fastest path to transmit data.
// GPS Systems: To calculate the shortest path between two points on a map.
// Video games: In games with open worlds where the AI must move from one point to another.
// Robotics: For path planning in a known environment.
function dijkstra(graph, start) {
    const dist = {};
    const visited = new Set();

    for (const vertex in graph) {
        dist[vertex] = Infinity;
    }
    dist[start] = 0;

    while (true) {
        const current = getMinNode(dist, visited);
        if(!current) break;

        visited.add(current);

        for (const neighbor in graph[current]) {
            const newDist = dist[current] + graph[current][neighbor];
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
            }
        }
    }
    return dist;
}

function getMinNode(dist, visited) {
    return Object.keys(dist).reduce((min, node) => {
        if (!visited.has(node) && dist[node] < dist[min]) {
            return node;
        }
        return min;
    }, null);
}