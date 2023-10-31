//This algorithm is an implementation of the Knapsack Problem using dynamic programming. This problem is a classic in combinatorial optimization and has many practical applications, including inventory management and capacity planning.

function knapsack(weight, value, capacity) {
    const n = weight.length;
    const dp = Array.from({length: n + 1}, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weight[i - 1] <= w) {
                dp[i][w] = Math.max(value[i - 1] + dp[i - 1][w - weight[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}