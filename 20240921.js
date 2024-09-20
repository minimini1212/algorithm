// 행렬의 곱셈 - lv2 - 정답률: 66% 난이도 (1,2,[3],4,5)
function solution(arr1, arr2) {
    let answer = [];
    let newArr2 = [];

    for (let i = 0; i < arr2[0].length; i++) {
        let sum = [];
        for (let j = 0; j < arr2.length; j++) {
            sum.push(arr2[j][i]);
        }
        newArr2.push(sum);
    }

    for (let j = 0; j < arr1.length; j++) {
        let sumArr = [];
        for (let k = 0; k < newArr2.length; k++) {
            let sum = 0;
            for (let l = 0; l < arr1[0].length; l++) {
                sum += arr1[j][l] * newArr2[k][l];
            }
            sumArr.push(sum);
        }
        answer.push(sumArr)
    }
    console.log(answer)
}
solution(
    [
        [1, 4],
        [3, 2],
        [4, 1],
    ],
    [
        [3, 3],
        [3, 3],
    ],
); //[[15, 15], [15, 15], [15, 15]]
solution(
    [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4],
    ],
    [
        [5, 4, 3],
        [2, 4, 1],
        [3, 1, 1],
    ],
); //[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
solution(
    [
        [1, 2, 3, 4],
        [2, 3, 4, 1],
    ],
    [
        [5, 6, 9],
        [6, 8, 10],
        [7, 5, 12],
        [8, 7, 15],
    ],
); //[[22, 22, 11], [36, 28, 18], [29, 20, 14]]

// 다른 사람 풀이
function solutionOther(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}

// 의상 - lv2 - 정답률: 65% 난이도 (1,2,3,[4],5) -> 재귀에 대해서만 4시간 정도 gpt와 씨름을 한 것 같다.
// 어느 정도는 이해를 했지만 완벽한 이해가 아니기 때문에 다른 문제에서도 재귀를 사용할 일이 있다면
// 오늘 학습한 것으로 더 좋은 코드를 짜보자.
function solution1(clothes) {
    let clothesKind = {};

    clothes.forEach((cloth) => (clothesKind[cloth[1]] = (clothesKind[cloth[1]] || 0) + 1));

    let clothesArr = Object.values(clothesKind);

    let newArr = [];
    let result = [];

    function iterator(arr, num) {
        arr.forEach((current, index, origin) => {
            newArr.push(current);

            let sliceArr = origin.slice(index + 1);

            if (newArr.length == num) {
                let multi = 1;
                for (let i = 0; i < newArr.length; i++) {
                    multi *= newArr[i];
                }
                result.push(multi);
                newArr.pop();
                return;
            }

            iterator(sliceArr, num);

            newArr.pop();
        });
    }

    for (let j = 0; j <= clothesArr.length; j++) {
        iterator(clothesArr, j);
    }

    return result.reduce((a,b) => a+b, 0)
}
solution1([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
]); // 5

// gpt와....
function solution1Gpt(clothes) {
    let clothesKind = {};

    // 각 종류별 옷의 개수를 계산
    clothes.forEach((cloth) => {
        clothesKind[cloth[1]] = (clothesKind[cloth[1]] || 0) + 1;
    });

    // 모든 경우의 수를 곱셈으로 계산
    let combinations = Object.values(clothesKind).reduce((acc, cur) => acc * (cur + 1), 1);

    // 아무것도 안 입는 경우는 제외
    return combinations - 1;
}

console.log(solution1([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
])); // 5
