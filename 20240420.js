// function solution(s) {
//     var answer = true;

//     if (s[0] !== '(' || s[s.length - 1] !== ')') {
//         answer = false;
//         return answer
//     }

//     return answer;
// }
// solution('()()((()))');



// while 문으로 구성성분을 1, -1로 변환하여 
// 그 값이 중간에 -1로 바뀔 때 false or 0보다 크면 false

// let s = '((()))';
// s = s.replaceAll('(', 1);
// s = s.replaceAll(')', 0);
// s = s.split('');

// console.log(s)

// if (s) {}


// 정답
// function solution(s) {
//     var answer = true;

//     if (s[0] !== '(' || s[s.length - 1] !== ')') {
//         answer = false;
//         return answer
//     }

//     let i = 0;
//     let a= 0;
//     while(i < s.length) {
//         if (s[i] === '(') {
//             a += 1
//         }
//         else {
//             a -= 1
//         }

//         i++
//         if (a < 0) {
//             answer = false
//             break
//         }
//     }
//     if (a > 0 ) {
//         answer = false
//         return answer
//     }

//     return answer;
// }
// solution('()()((()))');


console.time('반복문 시간 측정')

function solution(s) {
    var answer = true;

    if (s[0] !== '(' || s[s.length - 1] !== ')') {
        answer = false;
        return answer
    }

    let i = 0;
    let a= 0;
    while(i < s.length) {
        if (s[i] === '(') {
            a += 1
        }
        else {
            a -= 1
        }

        i++
        
        if (a < 0) {
            answer = false
            console.log(answer)
            break
        }
    }

    if (a > 0 ) {
        answer = false
        return answer
    }

    return answer;
}
solution('()()')


console.timeEnd('반복문 시간 측정')