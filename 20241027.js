// 아이템 줍기 - lv3 정답률: 27% 깊이우선탐색 예제
// function solution(rectangle, characterX, characterY, itemX, itemY) {
//     // 좌표 2배 확장
//     rectangle.forEach((element) => {
//         for (let a = 0; a < element.length; a++) {
//             element[a] *= 2;
//         }
//     });

//     // 경로 저장
//     let possibleCourse = [];

//     for (let b = 0; b < rectangle.length; b++) {
//         possibleCourse.push([rectangle[b][0], rectangle[b][1], rectangle[b][2], rectangle[b][1]]);
//         possibleCourse.push([rectangle[b][2], rectangle[b][1], rectangle[b][2], rectangle[b][3]]);
//         possibleCourse.push([rectangle[b][2], rectangle[b][3], rectangle[b][0], rectangle[b][3]]);
//         possibleCourse.push([rectangle[b][0], rectangle[b][3], rectangle[b][0], rectangle[b][1]]);
//     }

//     console.log(possibleCourse);
// }
// solution([[1, 1, 5, 7]], 1, 1, 4, 7); // 9
// solution(
//     [
//         [2, 1, 7, 5],
//         [6, 4, 10, 10],
//     ],
//     3,
//     1,
//     7,
//     10,
// ); // 15
// solution(
//     [
//         [1, 1, 7, 4],
//         [3, 2, 5, 5],
//         [4, 3, 6, 9],
//         [2, 6, 8, 8],
//     ],
//     1,
//     3,
//     7,
//     8,
// ); // 17
// solution(
//     [
//         [1, 1, 8, 4],
//         [2, 2, 4, 9],
//         [3, 6, 9, 8],
//         [6, 3, 7, 7],
//     ],
//     9,
//     7,
//     6,
//     1,
// ); // 11
// solution(
//     [
//         [2, 2, 5, 5],
//         [1, 3, 6, 4],
//         [3, 1, 4, 6],
//     ],
//     1,
//     4,
//     6,
//     3,
// ); // 10


// 도저히 못 풀겠다.. gg.. gpt의 답안코드를 보며 공부
function solution(rectangle, characterX, characterY, itemX, itemY) {
    const size = 102; // 모든 좌표를 두 배 확장했으므로 최대 크기(50 * 2 + 2)
    const map = Array.from({ length: size }, () => Array(size).fill(0));

    // 좌표를 2배로 확장하여 사각형 외곽선을 표시
    rectangle.forEach(([x1, y1, x2, y2]) => {
        x1 *= 2; y1 *= 2; x2 *= 2; y2 *= 2;

        // 사각형 테두리를 격자로 설정
        for (let x = x1; x <= x2; x++) {
            console.log(map[x][y1], x, [x1, y1, x2, y2])
            if (map[x][y1] !== 2) map[x][y1] = 1; // 아래쪽
            if (map[x][y2] !== 2) map[x][y2] = 1; // 위쪽
        }
        for (let y = y1; y <= y2; y++) {
            if (map[x1][y] !== 2) map[x1][y] = 1; // 왼쪽
            if (map[x2][y] !== 2) map[x2][y] = 1; // 오른쪽
        }
        
        // 내부는 이동 불가 표시
        for (let x = x1 + 1; x < x2; x++) {
            for (let y = y1 + 1; y < y2; y++) {
                map[x][y] = 2; // 내부를 2로 설정
            }
        }
    });


    // 초기 캐릭터와 아이템의 위치를 2배로 확장
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    // BFS 탐색을 위한 큐 초기화
    const queue = [[characterX, characterY, 0]];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    visited[characterX][characterY] = true;

    // BFS 탐색
    while (queue.length) {
        const [x, y, dist] = queue.shift();

        // 아이템 위치에 도착하면 거리 반환
        if (x === itemX && y === itemY) return dist / 2;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < size && ny < size && map[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return 0; // 경로가 없는 경우 (문제에서는 이 케이스가 없다고 명시됨)
}
// solution([[1, 1, 5, 7]], 1, 1, 4, 7); // 9
solution(
    [
        [2, 1, 7, 5],
        [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10,
); // 15