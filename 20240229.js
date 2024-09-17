// 행렬의 덧셈

// let arr1 = [
//   [1, 2],
//   [2, 3],
// ];
// let arr2 = [
//   [3, 4],
//   [5, 6],
// ];

// function solution(arr1, arr2) {
//     var answer = [];
//     for (let i=0; i<arr1.length; i++) {
//         let sum = [];
//         for (let j=0; j<arr1[i].length; j++) {
//             sum.push(arr1[i][j]+arr2[i][j])
//         }
//         answer.push(sum)
//         sum = [];
//     }
//     console.log(answer)
// }
// solution(arr1,arr2)

//3진법 뒤집기

// 이전에 작성한 코드 - 그 당시에 포기했나보다
// function solution(n) {
//   var answer = 0;
//   let a = n;
//   let b = [];
//   for (let i = 0; i < n; i++) {
//     if (a > 3) {
//       a = Math.floor(a / 3);
//       b.push(a % 3);
//     } else {
//       b.push(a);
//       break;
//     }
//   }
//   let c = b.reverse().map((data) => {});
//   return answer;
// }



// function solution(n) {
//     let a = [];
//       function div(s) {
//           if (s >= 3) {
//             a.unshift(s % 3);
//             div(Math.floor(s / 3));
//           }
  
//           if (s < 3) {
//               a.unshift(s);
//           }
//       }
//       div(n);
//       let b = a.reverse();
//       let c = 0;
//       for (let i=b.length-1; i> -1;i--) {
//           let j = b.length-1-i
//           c += b[j]*(3**i)
//       }
//       console.log(c)
//       return c
// }
// solution(3)



