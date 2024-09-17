// // 먼저 숫자를 입력받으면 그에 대한 최소한의 길을 찾아야 한다.
// // 한 칸씩 이동하는 것은 카운트가 증가하고 점프는 증가하지 않음.
// // 점프의 조건은 현재까지 온 거리 * 2 라는 계산식을 가지고 있음.

// function solution(s) {
//     let count = 0;
//
//     function iterator(number) {
//         if (number % 2 === 0) {
//             number = number / 2;
//             iterator(number);
//             return
//         }

//         if (number % 2 !== 0) {
//             if (number === 1) {
//                 count++;
//                 return;
//             } else {
//                 count++;
//                 number -= 1;
//                 number = number / 2;
//                 iterator(number);
//                 return
//             }
//         }
//     }
//     iterator(s);

//     console.log(count);
//     return count;
// }
// solution(50032231);

function solution(number) {
    let count = 0;

    while (number > 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            count++;
            number -= 1;
            number = number / 2;
        }
    }

    if (number ===1) {
        count++
    }

    return count;
}
solution(5000);
