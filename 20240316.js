// // 과일 장수
// function solution(k, m, score) {
//     let asc = score.sort((a,b) => b-a)
//     let apple = [];
//     var answer = 0;
//     for (let i = 0; i< asc.length; i++) {
//         apple.push(asc[i])
//         if (apple.length === m) {
//             answer += 1;
//             apple = [];
//         }
//     }
//     console.log(answer)
//     return answer;
// }
// solution(3, 4, [1, 2, 3, 1, 2, 3, 1])

// // 오늘 푼 풀이
// // 과일 장수
// function solution(k, m, score) {
//     let ascApple = score.sort((a, b) => b - a);
//     console.log(ascApple);
//     let answer = 0;

//     console.log(Math.floor(ascApple.length/m))
//     for (let i = 0; i < Math.floor(ascApple.length/m); i++) {
//         let divApple = ascApple.slice(i*m, (i+1)*m)
//         answer += divApple[m-1]*m
//         divApple =[];
//     }
//     console.log(answer);
//     return answer;
// }
// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);



// 가장 많이 받은 선물