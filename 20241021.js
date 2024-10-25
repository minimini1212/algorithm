// 네트워크 - lv3 (lv3를 푸는 이유: 깊이/너비 우선 탐색을 먼저 공부하고 싶어서)
// 문제 이해가 잘 되지 않아서 gpt에게 문제 이해 도움을 받음 일단 풀이 시작해봅시다
function solution(n, computers) {
    let conn = {};
    let computer = [];
    let networkCount = 0;

    for (let k = 0; k < n; k++) {
        conn[k] = [];
    }

    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (i !== j && computers[i][j] == 1) {
                if (!conn[i].includes(`${j}`)) {
                    conn[i].push(`${j}`);
                }
            }
        }
    }

    console.log(conn);

    let visited = new Set();

    function bfs(graph) {
        for (let a = 0; a < n; a++) {
            let start = Object.keys(conn)[a];

            if (visited.has(start)) {
                continue;
            }

            let queue = [start];

            while (queue.length > 0) {
                let node = queue.shift();

                if (!visited.has(node)) {
                    visited.add(node);

                    graph[node].forEach((neighbor) => {
                        if (!visited.has(neighbor)) {
                            queue.push(neighbor);
                        }
                    });
                }
            }
            networkCount++;
            console.log(visited);
        }
    }
    bfs(conn);

    console.log(networkCount);
    return networkCount;
}
solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
]); // 2
solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
]); // 1
solution(5, [
    [1, 1, 0, 0, 0], // 0번 컴퓨터와 1번 컴퓨터가 연결되어 있음
    [1, 1, 0, 0, 0], // 1번 컴퓨터와 0번 컴퓨터가 연결되어 있음
    [0, 0, 1, 1, 0], // 2번 컴퓨터와 3번 컴퓨터가 연결되어 있음
    [0, 0, 1, 1, 0], // 3번 컴퓨터와 2번 컴퓨터가 연결되어 있음
    [0, 0, 0, 0, 1], // 4번 컴퓨터는 자기 자신과만 연결되어 있음
]);
solution(4, [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
]);
solution(4, [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
]);

// 다른 사람 풀이
let arr;
let visitArr;

function solution(n, computers) {
    let ctr = 0;
    arr = computers;
    visitArr = new Array(n).fill(false);

    for(let i in arr) {
        ctr += dfs(i);
    }

    return ctr;
}

function dfs(i) {
    if(visitArr[i] == true) return 0;
    else visitArr[i] = true;

    for(let j in arr[i]) {
        if(arr[i][j] == 1)
            dfs(j);
    }

    return 1;
}



// gpt 의 효율적인 코드

function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let networkCount = 0; 

    function dfs(node) {
        visited[node] = true;
        
        // 해당 노드와 연결된 다른 노드들을 재귀적으로 방문
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (computers[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // 모든 컴퓨터를 순회하면서, 아직 방문하지 않은 컴퓨터부터 네트워크 탐색
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networkCount++;  // 새로운 네트워크 발견
            dfs(i);  // DFS를 통해 해당 네트워크에 속한 모든 컴퓨터 방문
        }
    }

    return networkCount;
}