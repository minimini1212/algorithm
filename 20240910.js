// 숫자의 표현 -> 약수끼리의 곱으로 제시된 수의 두배가 되야하는데 짝*짝은 제외
// lv2
function solution(n) {
    let answer = 0;
    let number = 2 * n;

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            let quotient = number / i;

            if (i % 2 == 0 && quotient % 2 == 0) {
                continue;
            }
            answer++;
        }
    }
    console.log(answer);
    return answer;
}
// solution(15);
// solution(10);

// // 다음 큰 숫자- lv2 -> 테스트 하나를 통과하지 못함 (효율성)
// function solution1(n) {
//     let answer = 0;
//     let binaryNum = [];
//     let convert = (num) => {
//         let temp = [];
//         let quotient = Math.floor(num / 2);
//         let remainder = num % 2;
//         if (quotient == 1) {
//             binaryNum.unshift(remainder);
//             binaryNum.unshift(quotient);
//             temp = [...binaryNum];
//             binaryNum = [];
//         } else {
//             binaryNum.unshift(remainder);
//             return convert(quotient);
//         }
//         return temp;
//     };
//     let existingNumBinary = convert(n);

//     for (let i = n + 1; i <= 1000000; i++) {
// let existingOneNumber = existingNumBinary.filter((n) => n == 1).length;
// let nextOneNumber = convert(i).filter((n) => n == 1).length;
// if (existingOneNumber == nextOneNumber) {
//     answer = i;
//     break;
// }
//     }
//     console.log(answer)
//     return answer
// }
// solution1(78);
// solution1(15);

// 아... 이진수로 변환시키는 메서드가 있었네...하...
function solution(n) {
    let answer = 0;
    let existingOneNumber = n
        .toString(2)
        .split('')
        .filter((n) => n == 1).length;

    for (let i = n + 1; i < 1000000; i++) {
        let nextOneNumber = i
            .toString(2)
            .split('')
            .filter((n) => n == 1).length;
        if (existingOneNumber == nextOneNumber) {
            answer = i;
            break;
        }
    }
    console.log(answer);
}
solution(78);

// 피보나치 수 - lv2 -> 약간 easy

function solution1(n) {
    let f0 = 0;
    let f1 = 1;
    let fiboArray = [f0%1234567,f1%1234567];
    for (let i = 2; i <= n; i++) {
        let nextNum = fiboArray[i - 1] + fiboArray[i - 2]
        if( nextNum >= 1234567) {
            nextNum = nextNum%1234567
        }
        fiboArray.push(nextNum);
    }
    let fn = fiboArray[fiboArray.length - 1];

    console.log(fn)
    return fn
}
solution1(99);
