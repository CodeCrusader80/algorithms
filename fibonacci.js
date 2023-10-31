//This algorithm is a simple implementation to calculate the nth term of the Fibonacci sequence using an iterative method. The Fibonacci sequence is a sequence of numbers such that each number is the sum of the previous two, starting with 0 and 1.

function fibonacci(n){
    const fib = [0, 1];

    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}