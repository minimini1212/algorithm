// // 최고의 집합

// function solution(n, s) {
//     let answer = [];

//     while (n > 0) {
//         let middleNum = Math.floor(s/n)

//         if (middleNum < 1) {
//             console.log([-1])
//             return [-1]
//         }

//         answer.push(middleNum)
//         s-=middleNum
//         n--
//     }

//     console.log(answer)
// }
// solution(2, 9) // [4,5]
// solution(2, 1) // [-1]
// solution(2, 8) // [4,4]

// const bestSet = (n, s) => n>s?[-1]:Array.apply(null, Array(n)).map((_,i)=> i<n-(s%n) ? s/n): sn)+1)
// Array.apply(null, Array(n)).map((_,i)=> i<n-(s%n) ? s/n): sn)+1)
// 소수 찾기

// function solution(numbers) {

//     let arrNum = numbers.split('')
//     for (let i=0;i<127;i++) {

//     }

// }
// solution('17') // 3
// solution('011') // 2

// function solution(numbers) {
//     let numArr = numbers.split('')
//     let k = 1;

//     while (k < numArr.length) {

//     }

// }
// solution('17'); // 3
// solution('011'); // 2

// // 주어진 a를 활욜하여 만들 수 있는 수를 다 출력
// function ex() {
//     let a = [1, 2, 3, 4, 5];

//     switch (a.length) {
//         case 1:
//             break;
//         case 2:
//             break;
//         case 3:
//             break;
//         case 4:
//             break;
//         case 5:
//             console.log('5번입니다.');
//             break;
//         case 6:
//             break;
//         case 7:
//             break;
//     }
// }
// ex();

// // 주어진 a를 활욜하여 만들 수 있는 수를 다 출력(경우의 수)
// function exa() {
//     let a = [1, 2, 3, 4, 5];

//     let b = new Array(a.length).fill(undefined);

//     console.log(b);
// }
// exa();


// 해당 배열의 요소 개수의 순열 만들기
// function solution(numbers) {
//     numbers = numbers.split('')
//     let temp = [...numbers]
//     let findNum = "";
//     for (let a = 0;a < 5;a++) {
//             for (let b = 0; b < 4; b++) {
//                     for (let c = 0; c < 3; c++) {
//                             for (let d = 0; d < 2; d++) {
//                                     for (let e = 0; e < 1; e++) {
//                                         findNum += temp[a]
//                                         temp.splice(a, 1)
//                                         findNum += temp[b]
//                                         temp.splice(b, 1)
//                                         findNum += temp[c]
//                                         temp.splice(c, 1)
//                                         findNum += temp[d]
//                                         temp.splice(d, 1)
//                                         findNum += temp[e]
//                                         console.log(a,b,c,d,e, '====', findNum)
//                                         findNum = "";
//                                         temp = [...numbers]
//                                     }
//                             }
//                     }
//             }
//     } 
// }
// solution('12345');



// 위의 코드 개선
function Permutations(arr, result = [], results = []) {
    if (arr.length === 0) {
        results.push(result.join(''));
    } else {
        for (let i = 0; i < arr.length; i++) {
            let current = arr.slice();
            let next = current.splice(i, 1);
            Permutations(current, result.concat(next), results);
        }
    }
    return results;
}

function solution(numbers) {
    let arr = numbers.split('');
    let permutations = Permutations(arr);
    console.log(permutations)
}

solution('12345');






