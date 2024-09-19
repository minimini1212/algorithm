// 할인 행사 - lv2 - 정답률: 67% 난이도 (1,[2],3,4,5) => 무난함.
function solution(want, number, discount) {
    let count = 0;
    let possibility = true;
    for (let i = 0; i < discount.length; i++) {
        let limitDay = 10 + i;
        if (limitDay > discount.length) {
            break;
        }
        let disObject = discount.slice(i, limitDay);
        for (let j = 0; j < want.length; j++) {
            let ok = disObject.filter((obj) => want[j] == obj).length;
            if (ok !== number[j]) {
                possibility = false;
                break;
            } else if (ok == number[j]) {
                possibility = true;
            }
        }
        if (possibility) {
            count++;
        }
    }
    console.log(count);
}
solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
        'chicken',
        'apple',
        'apple',
        'banana',
        'rice',
        'apple',
        'pork',
        'banana',
        'pork',
        'rice',
        'pot',
        'banana',
        'apple',
        'banana',
    ],
); // 3
// solution(
//     ['apple'],
//     [10],
//     [
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//         'banana',
//     ],
// ); // 0

// n^2 배열 자르기 - lv2 - 정답률: 66% 난이도 (1,2,3,4,[5])
// // 뭔가 오래걸릴것 같아서 변형하려고함.. 이것은 변형 전 코드
function solution1(n, left, right) {
    let arr = new Array(n).fill(0);
    let arr2 = arr.map(() => {
        return new Array(n).fill(0);
    });
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                arr2[i][j] = i + 1;
            } else if (i > j) {
                arr2[i][j] = i + 1;
            } else if (i < j) {
                arr2[i][j] = j + 1;
            }
        }
    }
    let newArr = arr2.map((arr) => {
        return
    });
    console.log(cutArr);
}
solution1(3, 2, 5); // [3,2,2,3]
// solution1(4, 7, 14); // [4,3,3,3,4,4,4,4]

// 변형1 이것도 오래 걸리네 -> 이건 런타임에러가 뜸.. 답은 도출하는 듯?
function solution1(n, left, right) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                arr.push(i + 1);
            } else if (i > j) {
                arr.push(i + 1);
            } else if (i < j) {
                arr.push(j + 1);
            }
        }
    }
    console.log(arr.slice(left, right + 1));
    return arr.slice(left, right + 1);
}
solution1(3, 2, 5); // [3,2,2,3]
// solution1(4, 7, 14); // [4,3,3,3,4,4,4,4]

// 변형2 -> 휴.. 혼자 해냈다..
function solution1(n, left, right) {
    let arr = [];
    let startI = Math.floor(left / n); // 0
    let startJ = Math.floor(left % n); // 2
    let endI = Math.floor(right / n); // 1
    let endJ = Math.floor(right % n); // 2
    let i = startI; // 0
    let j = startJ; // 2
    for (let k = 0; k < (endI - startI) * n + (endJ - startJ) + 1; k++) {
        console.log(i, j);
        if (j > n - 1) {
            j = 0;
            ++i;
        }
        // 다른 사람 풀이 146번줄 코드와 비슷한 면이 있는 부분
        if (i == j) {
            arr.push(i + 1);
        } else if (i > j) {
            arr.push(i + 1);
        } else if (i < j) {
            arr.push(j + 1);
        }
        j++;
    }

    console.log(arr);
    return arr;
}
solution1(3, 2, 5); // [3,2,2,3]
solution1(4, 7, 14); // [4,3,3,3,4,4,4,4]

// 다른 사람 풀이 -> 다른 사람 풀이와 비교해도 내 풀이의 효율성 밀리지 않는 것 같네..ㅋㅋ
// 근데 내 풀이하는데 시간을 너무 오래 보냄.. 약 3시간..?
function solutionOther(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
        // i%n -> 열의 인덱스 parseInt(i/n) -> 행의 인덱스
        answer.push(Math.max(i % n, parseInt(i / n)) + 1)
    }

    console.log(answer)
    return answer;
}
solutionOther(3, 2, 5)