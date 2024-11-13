// // 땅따먹기 - lv2 정답률: 60% 난이도 (1,2,3,4,5)
// // 이 방법은 같은 값이 존재하는 배열이 있을 경우 해답을 얻기가 어렵다
// function solution(land) {
//     let sum = 0;
//     let startNumIndex = 0;

//     for (let i = 0; i < land.length; i++) {
//         if (i == 0) {
//             startNum = Math.max(...land[0]);
//             sum += startNum;
//             startNumIndex = land[0].indexOf(startNum);
//             continue;
//         }

//         let filterLand = land[i].filter((num, index) => index !== startNumIndex);
//         let maxNum = Math.max(...filterLand);
//         let maxNumIndex = land[i].indexOf(maxNum);

//         sum += maxNum;
//         startNumIndex = maxNumIndex;
//     }

//     console.log(sum);
//     return sum;
// }
// solution([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
// ]); // 16
// solution([
//     [1, 2, 3, 5],
//     [10, 2, 3, 20],
//     [11, 2, 31, 5],
//     [30, 2, 30, 5],
//     [1, 2, 12, 4],
//     [5, 6, 12, 8],
//     [4, 7, 2, 1],
// ]); // 103
// solution([
//     [5, 2, 3, 5],
//     [20, 2, 3, 10],
// ]); // 25

// 수정들어갑니다 => 얘도 다 틀렸네.... 후...
// function solution(land) {
//     let sum = 0;
//     let selectedIndex = 0;

//     for (let i = 0; i < land.length; i++) {
//         if (i == land.length - 1) {
//             let filterLand = land[i].filter((num, index) => index !== selectedIndex);
//             let maxNum = Math.max(...filterLand);
//             sum += maxNum;
//             continue;
//         }

//         if (i > 0) {
//             land[i] = land[i].filter((num, index) => index !== selectedIndex);
//         }

//         let nextMaxNum = 101;
//         let maxNum = Math.max(...land[i]);
//         land[i].forEach((number, index) => {
//             if (number == maxNum) {
//                 nextMaxNum = Math.min(nextMaxNum, land[i + 1][index]);
//             }
//         });

//         selectedIndex = land[i + 1].indexOf(nextMaxNum);
//         sum += land[i][selectedIndex]
//     }

//     console.log(sum, 'sum');
// }
// solution([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
// ]); // 16
// solution([
//     [1, 2, 3, 5],
//     [10, 2, 3, 20],
//     [11, 2, 31, 5],
//     [30, 2, 30, 5],
//     [1, 2, 12, 4],
//     [5, 6, 12, 8],
//     [4, 7, 2, 1],
// ]); // 103
// solution([
//     [5, 2, 3, 5],
//     [20, 2, 3, 10],
// ]); // 25

// 아주 좋은 반례
// 1 0 0 1
// 2 0 0 3
// 4 0 0 6

// 아 문제를 다시 보니까 내가 구성한 로직이 처음부터 잘못되었다는 것을 깨달아버림.. 문제가 더 어려워졌네
function solution(land) {}
// solution([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
// ]); // 16
solution([
    [1, 2, 3, 5],
    [10, 2, 3, 20],
    [11, 2, 31, 5],
    [30, 2, 30, 5],
    [1, 2, 12, 4],
    [5, 6, 12, 8],
    [4, 7, 2, 1],
]); // 103
// solution([
//     [5, 2, 3, 5],
//     [20, 2, 3, 10],
// ]); // 25

// 아주 좋은 반례
// 1 0 0 1
// 2 0 0 3
// 4 0 0 6

// gpt의 코드
function solution(land) {
    let n = land.length;

    // 첫 번째 행은 그대로 선택
    for (let i = 1; i < n; i++) {
        land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
        land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
        land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
        land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
    }

    // 마지막 행에서 최대값을 찾음
    console.log(Math.max(...land[n - 1]));
    return Math.max(...land[n - 1]);
}