// 콜라츠 추측

// function solution(num) {
//     let i = 0;

//     function verifyFunc(num) {
//         if (num === 1) {
//             return i;
//         }
//         if (num % 2 === 1) {
//             num = num * 3 + 1;
//             i++;
//             return verifyFunc(num);
//         }
//         if (num % 2 === 0) {
//             num = num / 2;
//             i++;
//             return verifyFunc(num);
//         }
//     }
//     verifyFunc(num);

//     if (i > 500) {
//         return -1;
//     }
//     console.log(i);
//     return i;
// }
// solution(626331);

// 다른 사람 풀이
// function collatz(num) {
//     var answer = 0;
//     while (num != 1 && answer != 500) {
//         num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
//         answer++;
//     }
//     return num == 1 ? answer : -1;
// }
// console.log(collatz(6));

// // 이상한 문자 만들기
// function solution(s) {
//     var answer = '';
//     let a = s.split(" ");
//     console.log(a)
//     let b = a.map((data)=> {
//         for (let i =0; i<data.length;i++) {
//             if(i%2===0) {
//                 data[i] = data[i].toUpperCase();
//             }
//         }
//     })
//     console.log(b)
//     return answer;
// }

// function solution(s) {
//     var answer = '';
//     let a = s.split(' ');
//     let b = a.map((data)=> {
//         let str = data.split('')
//         for (let i =0; i<str.length;i++) {
//             if(i%2===0) {
//                 str[i] = str[i].toUpperCase();
//             } else {
//                 str[i] = str[i].toLowerCase();
//             }

//         }
//         return str.join('')
//     })
//     answer = b.join(' ')
//     return answer;
// }

// // 시저 암호
// function solution(s, n) {
//     var answer = '';
//     let div = s.split('');
//     let code = div.map((data) => {
//         let num = data.charCodeAt()
//         if ( num >= 65 && num <= 90 ) {
//             num += n
//             if ( num > 90 ) {
//                 return String.fromCodePoint(num - 26)
//             }
//             return String.fromCodePoint(num)
//         }
    
//         if (num === 32) {
//             return String.fromCodePoint(num)
//         }

//         num += n
//         if ( num > 122) {
//             return String.fromCodePoint(num - 26)
//         }
//         return String.fromCodePoint(num)
//     });
//     let str = code.join('')
//     console.log(str);
//     return answer;
// }
// solution('a d', 1);



//가장 가까운 같은 글자

// // 기존풀이
// function solution(s) {
//     var answer = [];
//     let a = [...s];
//     for (let i =0;i<a.length;i++) {
//         let match = a.slice(0, i).find(data => a[i] ===data)
//         if (a[i] === match) {
//             answer.push(i - a.indexOf(a[i], -2))
//         } else {
//             answer.push(-1);
//         }
//     }
//     return answer;
// }
// solution("banana");


// // 오늘 푼 풀이

// function solution(s) {
//     var answer = [];
//     let a = [...s];
//     for (let i =0;i<a.length;i++) {
//         let match = a.slice(0, i).find(data => a[i] ===data)
//         if (a[i] === match) {
//             // 수정한 부분
//             answer.push(i - a.slice(0, i).lastIndexOf(match))
//         } else {
//             answer.push(-1);
//         }
//     }
//     return answer;
// }


// 숫자 문자열과 영단어
function solution(s) {
    var answer = 0;
    s = s.replace('zero',0)
    s = s.replace('one',1)
    s = s.replace('two',2)
    s = s.replace('three',3)
    s = s.replace('four',4)
    s = s.replace('five',5)
    s = s.replace('six',6);
    s = s.replace('seven',7)
    s = s.replace('eight',8)
    answer = s.replace('nine',9)
    answer = +answer
    return answer;
}
console.log(solution('threethree45sixseven'))


// let a = 'zerozero'
// a = a.replace('zero', 0)
// console.log(a)