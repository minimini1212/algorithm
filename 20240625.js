// 효율성 테스트 불합격...

function solution(n, works) {
    let answer = 0;

    for (let i = 0; i < n; i++) {
        works = works.sort((x, y) => y - x);
        works[0] -= 1;

        if (works[0] === -1) {
            return 0;
        }
    }

    let pow = works.map((x) => x ** 2);

    answer = pow.reduce((a, b) => a + b);

    return answer;
}
solution(3, [1, 1]);

// 다른 방법을 생각해보자
// 내가 구현했던 알고리즘에서 변형해볼까 일단?
// 내가 생각하는 문제 되는 부분 sort와 map...
// map 반복
// 반복을 통한 sort

// 버전 1
// function solution(n, works) {
//     let answer = 0;

//     for (let i = 0; i < n; i++) {
//         works = works.sort((x, y) => y - x);
//         works[0] -= 1;

//         if (works[0] === -1) {
//             return 0;
//         }
//     }

//     works.map((x) => {
//         answer += x ** 2;
//     });

//     return answer;
// }
// solution(1, [1, 1]);

// 버전 2 얘도 탈락
function solution(n, works) {
    let answer = 0;

    for (let i = 0; i < n; i++) {
        let maxNumber = Math.max(...works);
        works[works.indexOf(maxNumber)] -= 1;

        if (works[0] === -1) {
            return 0;
        }
    }

    works.map((x) => {
        answer += x ** 2;
    });

    return answer;

}
solution(3, [1, 1]);
