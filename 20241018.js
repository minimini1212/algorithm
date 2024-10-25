// 알고리즘 유형 -> 공부해서 내 것으로 만들어보자

// 1. BFS (너비 우선 탐색 - Breadth First Search)
// 개념: 그래프 탐색 방법 중 하나로, 시작 노드에서부터 가까운 노드부터 차례대로 방문하는 방식.
//주로 큐(queue) 자료구조를 사용합니다.

// 용도: 그래프나 트리에서 최단 경로를 찾거나 레벨별로 데이터를 처리할 때 주로 사용합니다.
function bfs(graph, start) {
    let queue = [start]; // 시작점을 큐에 넣음
    let visited = new Set(); // 방문한 노드를 기록할 집합

    while (queue.length > 0) {  
        let node = queue.shift(); // 큐에서 노드를 꺼냄

        if (!visited.has(node)) {
            console.log(node); // 방문한 노드 출력
            visited.add(node); // 노드를 방문 처리

            // 인접한 노드를 큐에 추가
            graph[node].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            });
        }
    }
}

// 예시 그래프: 인접 리스트
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

bfs(graph, 'A'); // A -> B -> C -> D -> E -> F

// 2. DFS (깊이 우선 탐색 - Depth First Search)
// 개념: 시작 노드에서 출발해 한 경로를 끝까지 탐색한 후, 다른 경로를 탐색하는 방식.
// 주로 스택(stack) 또는 **재귀(recursion)**를 사용합니다.

// 용도: 그래프에서 특정한 경로가 존재하는지, 미로 탐색 등에서 많이 사용합니다.
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start); // 방문한 노드 출력

    // 인접한 노드를 재귀적으로 방문
    graph[start].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    });
}

dfs(graph, 'A'); // A -> B -> D -> E -> F -> C

// 3. 백트래킹 (Backtracking)
// 개념: 가능한 모든 경우를 탐색하면서, 중간에 정답이 될 수 없는 경로는 더 이상 탐색하지 않고 돌아가는 방식.

// 용도: 퍼즐 문제(예: N-Queen 문제), 조합이나 순열 문제에서 많이 사용됩니다.
function solveNQueens(n) {
    let solutions = [];

    function backtrack(board = [], row = 0) {
        if (row === n) {
            solutions.push([...board]); // 모든 행에 퀸을 놓았으면 해결된 보드 저장
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board.push(col); // 현재 행에 퀸을 놓음
                backtrack(board, row + 1); // 다음 행으로 진행
                board.pop(); // 놓았던 퀸을 다시 빼냄 (백트래킹)
            }
        }
    }

    function isValid(board, row, col) {
        for (let r = 0; r < row; r++) {
            const c = board[r];
            if (c === col || c - col === r - row || c - col === row - r) {
                return false;
            }
        }
        return true;
    }

    backtrack();
    return solutions;
}

solveNQueens(4); // 4x4 체스판에서 퀸을 놓는 모든 경우의 수

// 4. 시뮬레이션 (Simulation)
// 개념: 문제에서 주어진 규칙을 그대로 구현하여 해결하는 방식.
// 복잡한 수학적 이론보다 시나리오나 규칙을 따라가는 것이 주가 됩니다.

// 용도: 주로 구현 문제에서 사용되며, 특정 조건에 맞는 행동을 코드로 옮길 때 사용합니다.
function simulateMoves(moves) {
    let x = 0,
        y = 0;

    for (let move of moves) {
        if (move === 'U') y++;
        if (move === 'D') y--;
        if (move === 'L') x--;
        if (move === 'R') x++;
    }

    return [x, y];
}

simulateMoves('UDLR'); // [0, 0] (위, 아래, 왼쪽, 오른쪽 이동 후 제자리)

// 5. 투 포인터 (Two Pointer)
// 개념: 두 개의 포인터(인덱스)를 사용하여 문제를 해결하는 방식.
// 배열이나 리스트에서 두 지점을 이동시키면서 조건을 만족하는지 확인합니다.

// 용도: 정렬된 배열에서 부분합을 구하거나, 구간 내 특정 값을 찾는 문제에서 자주 사용됩니다.
function twoSum(arr, target) {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }

    return [];
}

twoSum([1, 2, 3, 4, 6], 6); // [0, 4] (1 + 6 = 6)

// 6. 이진 탐색 (Binary Search)
// 개념: 정렬된 배열에서 값을 찾는 효율적인 방법. 배열을 반으로 나누어가며 값을 탐색합니다.

// 용도: 배열이나 리스트에서 값의 위치를 빠르게 찾는 문제에서 자주 사용됩니다.
function binarySearch(arr, target) {
    let left = 0,
        right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // 값이 없을 경우
}

binarySearch([1, 3, 5, 7, 9], 7); // 3

// 7. 그리디 (Greedy)
// 개념: 매 순간 가장 좋아 보이는 선택을 하여 문제를 해결하는 방식.

// 용도: 배낭 문제, 회의실 배정, 최소 동전 개수 문제 등 최적해를 구하는 문제에서 자주 사용됩니다.
function coinChange(coins, amount) {
    let count = 0;
    coins.sort((a, b) => b - a);

    for (let coin of coins) {
        count += Math.floor(amount / coin);
        amount %= coin;
    }

    return amount === 0 ? count : -1;
}

coinChange([1, 2, 5], 11); // 3 (5 + 5 + 1)

// 8. DP (동적 프로그래밍 - Dynamic Programming)
// 개념: 큰 문제를 작은 문제로 나누어 해결하고, 그 결과를 저장하여 반복 계산을 줄이는 방법.

// 용도: 피보나치 수열, 최적 경로 문제, 배낭 문제 등에서 많이 사용됩니다.

function fib(n) {
    let dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

fib(10); // 55

// 9. MST (최소 신장 트리 - Minimum Spanning Tree)
// 개념: 그래프에서 모든 노드를 연결하는 가장 적은 비용의 트리를 구하는 문제.

// 용도: 네트워크 연결, 도로 건설 등의 문제에서 자주 사용됩니다.
// 크루스칼 알고리즘
function kruskal(edges, n) {
    edges.sort((a, b) => a[2] - b[2]); // 비용을 기준으로 정렬
    let parent = Array.from({ length: n }, (_, i) => i);

    function find(x) {
        if (x !== parent[x]) parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(x, y) {
        parent[find(x)] = find(y);
    }

    let mstCost = 0;
    for (let [u, v, cost] of edges) {
        if (find(u) !== find(v)) {
            union(u, v);
            mstCost += cost;
        }
    }

    return mstCost;
}

kruskal(
    [
        [0, 1, 1],
        [1, 2, 2],
        [0, 2, 3],
    ],
    3,
); // 3

// 10. 다익스트라 (Dijkstra)
// 개념: 그래프에서 한 노드에서 다른 모든 노드로 가는 최단 경로를 찾는 알고리즘.

// 용도: 네트워크 경로 찾기, GPS 경로 계산 등에 사용됩니다.
function dijkstra(graph, start) {
    let distances = Array(graph.length).fill(Infinity);
    distances[start] = 0;
    let queue = [[start, 0]];

    while (queue.length > 0) {
        let [node, dist] = queue.shift();

        graph[node].forEach(([neighbor, weight]) => {
            let newDist = dist + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                queue.push([neighbor, newDist]);
            }
        });
    }

    return distances;
}

const graph2 = [
    [
        [1, 1],
        [2, 4],
    ],
    [
        [2, 2],
        [3, 6],
    ],
    [[3, 3]],
    [],
];

dijkstra(graph2, 0); // [0, 1, 3, 6]

// 11. 플로이드-워셜 (Floyd-Warshall)
// 개념: 그래프에서 모든 쌍의 최단 경로를 구하는 알고리즘. DP를 이용하여 해결합니다.

// 용도: 여러 개의 노드 간 최단 경로를 구하는 문제에서 사용됩니다.
function floydWarshall(graph) {
    let dist = graph.map(row => [...row]);

    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph.length; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    return dist;
}

const graph3 = [
    [0, 3, Infinity, 7],
    [8, 0, 2, Infinity],
    [5, Infinity, 0, 1],
    [2, Infinity, Infinity, 0]
];

floydWarshall(graph3);
// [[0, 3, 5, 6], [5, 0, 2, 3], [3, 6, 0, 1], [2, 5, 7, 0]]

