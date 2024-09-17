// function selectionSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         // 가장 작은 요소를 현재 위치로 이동
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
// }

// // 예시 배열
// const arr = [64, 25, 12, 22, 11];

// selectionSort(arr);

// console.log("정렬된 배열:");
// console.log(arr.join(", "));

// 최댓값과 최솟값

// function solution(s) {
//     let arrS = s.split(' ')
//     let minNum = parseInt(arrS[0])
//     let maxNum = parseInt(arrS[0])
//     for (let i = 0; i< arrS.length; i++) {
//         if (minNum > parseInt(arrS[i])) {
//             minNum = parseInt(arrS[i])
//         }
//         if (maxNum < parseInt(arrS[i])) {
//             maxNum = parseInt(arrS[i])
//         }
//     }



// let s = '()(())'

// s = s.replace('()', '')

// console.log(s)


// s = s.replace('()', '')

// console.log(s)

// s = s.replace('()', '')

// console.log(s)



// 올바른 괄호
// 효율성에서 시간초과가 떠버림...
// function solution(s){
//     var answer = true;
//     let turn = s.length/2
    
//     for (let i = 0; i < turn; i++) {
//         s = s.replace('()','')
//     }
    
//     if (s !== '') {
//         answer = false
//     }

//     return answer;
// }