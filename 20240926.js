// // 피로도 - lv2 - 정답률: 64% 난이도 (1,2,3,4,5) -> 테스트 통과 하나 못함
function solution(k, dungeons) {
    if (dungeons.length == 1) {
        if (k >= dungeons[0][0]) {
            return 1;
        } else if (k < dungeons[0][0]) {
            return 0;
        }
    }

    let stack = [];
    function route(dungeonsArr) {
        dungeonsArr = dungeonsArr.filter((arr) => arr[0] <= k);

        console.log(dungeonsArr);

        if (dungeonsArr.length == 1) {
            dungeons = dungeonsArr;
            return;
        }

        let maxNum = [];
        for (let i = 0; i < dungeonsArr.length; i++) {
            let dungeonsFilter = dungeonsArr.filter((dungeon) => dungeon !== dungeonsArr[i]);
            let possibilityNum = dungeonsFilter.filter(
                (arr) => arr[0] <= k - dungeonsArr[i][1],
            ).length;

            maxNum.push(possibilityNum);

            if (i == dungeonsArr.length - 1) {
                stack.push(dungeonsArr[maxNum.indexOf(Math.max(...maxNum))]);
                k -= dungeonsArr[maxNum.indexOf(Math.max(...maxNum))][1];
                let nextArr = dungeonsArr.filter(
                    (dungeon) => dungeon !== dungeonsArr[maxNum.indexOf(Math.max(...maxNum))],
                );

                return route(nextArr);
            }
        }
    }
    route(dungeons);

    if (dungeons[0][0] <= k) {
        stack.push(dungeons[0]);
    }

    console.log('stack:', stack);

    return stack.length;
}
// solution(80, [
//     [80, 20],
//     [50, 40],
//     [30, 10],
// ]); //3
// solution(100, [
//     [90, 40],
//     [80, 30],
//     [70, 20],
//     [60, 10],
// ]); // 4
// solution(50, [
//     [30, 10],
//     [40, 20],
//     [50, 30],
//     [10, 5],
// ]); //4
// solution(100, [
//     [90, 10],
//     [80, 20],
//     [70, 30],
//     [60, 40],
// ]);
// solution(100, [
//     [50, 60],
//     [50, 40],
//     [30, 10],
// ]);
// solution(80, [
//     [50, 40],
//     [30, 10],
//     [40, 50],
// ]);


// 결국 gpt 도움 받음 시간을 너무 소모해서... 어느 정도 이해함..
function solutionOther(k, dungeons) {
    let maxCount = 0;

    function dfs(k, count, visited) {
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;  // 현재 던전 방문 표시
                dfs(k - dungeons[i][1], count + 1, visited);  // 던전 클리어 후 재귀 호출
                visited[i] = false; // 현재 던전 방문 해제
            }
        }
    }

    dfs(k, 0, Array(dungeons.length).fill(false));

    console.log(maxCount)
    return maxCount;
}
solutionOther(80, [
    [50, 40],
    [30, 10],
    [40, 50],
]);

const dungeons = [
    [80, 20], // (필요 체력, 소모 체력)
    [50, 40],
    [30, 10],
];



                0 o
0 x             1 o         2 o
            0x  1x 2x