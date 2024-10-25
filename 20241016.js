// 뒤에 있는 큰 수 찾기 - lv2 정답률: 60% 난이도 (1,2,3,4,5)
// // 이 코드는 시간 초과가 뜨네.. -> 55점
// function solution(numbers) {
//     let answer = [];
//     let numbersLength = numbers.length;
//     let firstNum = 0;

//     while (answer.length < numbersLength) {
//         if (numbers.length == 1) {
//             answer.push(-1);
//             break;
//         }

//         firstNum = numbers[0];
//         numbers.shift();

//         for (let i = 0; i < numbers.length; i++) {
//             let maxNum = 0;

//             if (firstNum < numbers[i]) {
//                 maxNum = numbers[i];
//                 answer.push(maxNum);
//                 break;
//             }

//             if (i == numbers.length - 1) {
//                 answer.push(-1)
//             }

//             if (firstNum >= numbers[i]) {
//                 continue;
//             }
//         }
//     }

//     return answer;
// }
// solution([2, 3, 3, 5]); // [3, 5, 5, -1]
// solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]

// 이건 더 오래 걸린다.
// function solution(numbers) {
//     let answer = [];
//     let temp = [...numbers];
//     let firstNum = 0;

//     let sortArr = [...numbers].sort((a, b) => b - a);

//     while (answer.length < numbers.length) {
//         if (temp.length == 1) {
//             answer.push(-1);
//             break;
//         }

//         firstNum = temp[0];
//         temp.shift();

//         for (let i = 0; i < temp.length; i++) {
//             let maxNum = 0;

//             if (firstNum < temp[i]) {
//                 maxNum = temp[i];
//                 answer.push(maxNum);
//                 break;
//             }

//             if (firstNum == sortArr[0]) {
//                 answer.push(-1);
//                 break;
//             }

//             if (i == temp.length - 1) {
//                 answer.push(-1);
//             }

//             if (firstNum >= temp[i]) {
//                 continue;
//             }
//         }

//         sortArr.splice(sortArr.indexOf(firstNum), 1);
//     }

//     console.log(answer);
//     return answer;
// }
// solution([2, 3, 3, 5]); // [3, 5, 5, -1]
// solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]

// // 이것도 많이 줄이긴 했는데 아직도 시간초과가 뜬다. -> 82점
// function solution(numbers) {
//     let answer = [];

//     numbers.forEach((number, index, originArr) => {
//         for (let i = index; i < originArr.length; i++) {
//             if (number < numbers[i]) {
//                 answer.push(numbers[i]);
//                 break;
//             }

//             if (i == originArr.length - 1) {
//                 answer.push(-1);
//                 break;
//             }

//             if (number >= originArr[i]) {
//                 continue;
//             }
//         }
//     });

//     console.log(answer);
// }
// solution([2, 3, 3, 5]); // [3, 5, 5, -1]
// solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]

// gpt의 힌트 -> 스텍을 활용해보자
// 이것도 시간초과뜨네
// function solution(numbers) {
//     let answer = [];
//     let stack = [];

//     for (let i = numbers.length - 1; i >= 0; i--) {
//         if (i == numbers.length - 1) {
//             stack.push(numbers[i]);
//             answer.unshift(-1);
//             continue;
//         }

//         if (numbers[i] > ) {}
//     }

//     console.log(answer);
// }
// solution([2, 3, 3, 5]); // [3, 5, 5, -1]
// solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]

// unshift가 생각보다 소요시간이 오래걸리네
function solution(numbers) {
    let answer = [];
    let stack = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length > 0 && numbers[i] >= stack[stack.length - 1]) {
            stack.pop();
        }

        if (stack.length === 0) {
            answer.unshift(-1);
        } else {
            answer.unshift(stack[stack.length - 1]);
        }

        stack.push(numbers[i]);
    }

    console.log(answer);
    return answer;
}


function solution(numbers) {
    let answer = [];
    let stack = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length > 0 && numbers[i] >= stack[stack.length - 1]) {
            stack.pop();
        }

        if (stack.length === 0) {
            answer.push(-1);
        } else {
            answer.push(stack[stack.length - 1]);
        }

        stack.push(numbers[i]);
    }

    answer.reverse();
    console.log(answer);
    return answer;
}
