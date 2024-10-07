// // 게임 맵 최단거리 - lv2 정답률: 61% 난이도 (1,2,3,4,5)
// // 뭔가 안되네?? 리셋간다.
// function solution(maps) {

//     let count = 1;
//     let temp = [0, 0];

//     while (temp[0] !== maps.length - 1 || temp[1] !== maps[0].length - 1) {
//         if (maps[temp[0] + 1][temp[1]] == 1) {
//             temp[0] += 1;
//             continue;
//         }

//         if (maps[temp[0]][temp[1] + 1] == 1) {
//             temp[1] += 1;
//             continue;
//         }

//         if (maps[temp[0] - 1][temp[1]] == 1) {
//             temp[0] -= 1;
//             continue;
//         }

//         if (maps[temp[0]][temp[1] - 1] == 1) {
//             temp[1] -= 1;
//             continue;
//         }

//         console.log(temp)
//     }

//     console.log(temp)

// }
// solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
// ]); // 11
// // solution([
// //     [1, 0, 1, 1, 1],
// //     [1, 0, 1, 0, 1],
// //     [1, 0, 1, 1, 1],
// //     [1, 1, 1, 0, 0],
// //     [0, 0, 0, 0, 1],
// // ]); // -1

// gpt의 힌트 -> BFS 알고리즘 (너비 우선 탐색)을 활용
// 힌트:
// 큐를 사용하여 현재 위치와 이동 거리를 저장합니다.
// 상하좌우로 이동 가능한지 확인하면서 다음 위치를 큐에 추가합니다.
// 큐에서 꺼낸 위치가 도착점이라면 그때의 이동 거리가 최단 경로입니다.

// 시간을 너무 많이 소모하였고 도저히 접근방법이 떠오르지 않아서 gpt에게 정답코드 요청..
// 잘 씹어먹어보자
function solution(maps) {
    const n = maps.length; // 세로 길이
    const m = maps[0].length; // 가로 길이

    // 상하좌우로 이동할 좌표
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // BFS를 위한 큐
    let queue = [[0, 0]];

    while (queue.length) {
        let [x, y] = queue.shift();

        // 현재 위치에서 4방향 확인
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            // 미로 공간을 벗어난 경우 무시
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            // 벽인 경우 무시
            if (maps[nx][ny] === 0) continue;

            // 처음 방문하는 노드에만 거리 기록
            if (maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
        console.log(maps);
    }

    // 도착 지점의 값을 반환 (도착할 수 없다면 -1)
    console.log(maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1]);
    return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}
solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]); // 11
// solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
// ]); // -1

// 다른 사람의 풀이
function solutionOther(maps) {
    var yLen = maps.length - 1;
    var xLen = maps[0].length - 1;

    var queue = [[0, 0]];

    // 이런식으로 2차원배열 만들기가 가능하구만
    var visited = Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(false));

    var result = 0;

    while (queue.length) {
        result++;
        var size = queue.length;
        for (var i = 0; i < size; i++) {
            var point = queue.shift();
            var curY = point[0];
            var curX = point[1];

            if (visited[curY][curX]) continue;

            maps[curY][curX] = 0;

            visited[curY][curX] = true;

            if (curY === yLen && curX === xLen) return result;

            if (curY < yLen && maps[curY + 1][curX] === 1) queue.push([curY + 1, curX]);
            if (curX < xLen && maps[curY][curX + 1] === 1) queue.push([curY, curX + 1]);
            if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
            if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
        }
    }

    return -1;
}
solutionOther([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
]);
