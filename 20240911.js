// 짝지어 제거하기 - lv2 - 런타임에러와 강제종료가 뜬다
// function solution(s) {
//     let removeString = removeStr(s);

// if (removeString == '') {
//     console.log(removeString, 'removeString');
//     return 1;
// } else {
//     console.log(removeString, 'removeString');
//     return 0;
// }
// }
// // solution('baabaa'); 
// // solution('cdcd');
// // solution('cdcdadssssdfddfffdddddddddddfffffaaa');
// // solution('s');

// function removeStr(s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == undefined || s[i + 1] == undefined) {
//             return s
//         }
//         if (s[i] == s[i + 1]) {
//             s = s.replaceAll(`${s[i] + s[i + 1]}`, '');
//             return removeStr(s);
//         }
//     }
//     return s;
// }

// 항복... 이렇게 해도 시간복잡도를 줄이기 힘드네..
// function solution(s) {
//     for (let i = 97; i <= 122; i++) {
//         s = s.replaceAll(`${String.fromCharCode(i) + String.fromCharCode(i)}`, '');
//         if (s == '') {
//             break;
//         }
//     }

//     if (s == '') {
//         return 1;
//     } else {
//         return 0;
//     }

// }
// solution('baabaa');
// solution('cdcd');
// solution('cdcdadssssdfddfffdddddddddddfffffddfaaa');
// solution('s');

// // gpt가 알려준 답 이해함.
// function solution1(s) {
//     const stack = [];

//     for (let char of s) {
//         if (stack.length > 0 && stack[stack.length - 1] === char) {
//             stack.pop(); // 짝을 찾으면 제거
//         } else {
//             stack.push(char); // 짝이 아니면 스택에 추가
//         }
//     }
//     console.log(stack)
//     console.log(stack.length === 0 ? 1 : 0)
//     return stack.length === 0 ? 1 : 0;
// }
// solution1('baabaa');
// solution1('cdcd');
// solution1('cdcdadssssdfddfffdddddddddddfffffddfaaa');
// solution1('s');

// gpt가 알려준 스텍을 토대로 내 코드를 작성해보겠음 - 스텍을 확실하게!
function solution(s) {
    stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length == 0 || stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    if (stack.length == 0) {
        return 1;
    } else {
        return 0;
    }
}
solution('baabaa');
solution('cdcd');
solution('cdcdadssssdfddfffdddddddddddfffffddfaaa');
solution('s');

// // 카펫 - lv2 - 1차시도 실패 - 혹시나 하는 가벼운 도전
// function solution1(brown, yellow) {
//     let stack = [];
//     let area = brown + yellow;

// for (let i = 1; i <= area; i++) {
//     if (area % i == 0) {
//         stack.push(i);
//     }
// }
//     if (stack.length % 2 == 0) {
//         console.log([stack[stack.length / 2], stack[stack.length / 2 - 1]])
//         return [stack[stack.length / 2], stack[stack.length / 2 - 1]];
//     } else {
//         console.log([stack[Math.floor(stack.length / 2)], stack[Math.floor(stack.length / 2)]])
//         return [stack[Math.floor(stack.length / 2)], stack[Math.floor(stack.length / 2)]]
//     }
// }
// solution1(10, 2);
// solution1(8, 1);
// solution1(24, 24);

// 제곱수를 생각 안함
// function solution1(brown, yellow) {
//     let yellowStack = [];
//     for (let i = 1; i <= yellow; i++) {
//         if (yellow % i == 0) {
//             yellowStack.push(i);
//         }
//     }

//     for (let j = 0; j <= Math.floor(yellowStack.length / 2); j++) {
//         let width = yellowStack[yellowStack.length - 1 - j];
//         let height = yellowStack[j];
//         if (brown == (width + 2) * 2 + height * 2) {
//             console.log([width + 2, height + 2]);
//             return [width + 2, height + 2];
//         }
//     }
// }
// solution1(10, 2);
// solution1(8, 1);
// solution1(24, 24);
// solution1(12, 4);

// 어렵지는 않았는데 반례 찾는 것에 시간을 좀 투자함
function solution1(brown, yellow) {
    let yellowStack = [];
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i == 0) {
            yellowStack.push(i);
        }
    }

    if (yellowStack.length == 1) {
        console.log([3, 3])
        return [3, 3];
    }

    for (let j = 0; j <= Math.floor(yellowStack.length / 2); j++) {
        let width = yellowStack[yellowStack.length - 1 - j];
        let height = yellowStack[j];
        if (brown == (width + 2) * 2 + height * 2) {
            console.log([width + 2, height + 2]);
            return [width + 2, height + 2];
        }
    }

    if (yellowStack[(yellowStack.length-1) / 2]) {
        let square = yellowStack[(yellowStack.length-1) / 2]
        if (brown == (square + 2) * 2 + square * 2) {
            console.log([square + 2, square + 2]);
            return [square + 2, square + 2];
        }
    }
}
solution1(10, 2);
solution1(8, 1);
solution1(24, 24);
solution1(12, 4);



// 다른 사람풀이 - 훌륭한 풀이다...졌다...다음에 이긴다...
function solution2(brown, red) {
    var answer = [];
    // i가 3부터 시작하는 이유는 이 문제의 최소조건이 가로 세로 길이가 3이상은 되야한다.
    // (brown+red)/i 얘는 전체넓이인(brown+red)에서 세로길이i를 나눈 가로의 길이다.
    for (var i = 3; i <= (brown+red)/i; i++) {
        var x = Math.floor((brown+red)/i);
        if( (x-2)*(i-2)=== red) {
            break;
        }
    }
    console.log([x,i])
    return [x,i];
}
solution2(10, 2);
solution2(8, 1);
solution2(24, 24);
solution2(12, 4);