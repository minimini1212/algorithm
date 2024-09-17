// 최솟값 만들기 -> 효율성 테스트 통과 실패 -> 알고보니 console.log(answer)를 반복해서 실패..

// function solution(A,B){
//     var answer = 0;

//     A = A.sort((x,y)=> x-y)
//     B = B.sort((x,y)=> y-x)
    
//     for (let i = 0; i< A.length; i++) {
//         answer += A[i]*B[i]
//     }

//     return answer;
// }
// solution([1,4,2], [5,4,4])


// function solution(A,B){
//     var answer = 0;
//     let i = 0;

//     A = A.sort((x,y)=> x-y)
//     B = B.sort((x,y)=> y-x)

//     while (i < A.length) {
//         answer += A[i]*B[i]
//         i++
//     }

//     console.log(answer)
//     return answer;
// }
// solution([1,4,2], [5,4,4])


// JadenCase 문자열 만들기
// 아스키 코드 변환
// console.log(String.fromCharCode(97))

// console.log('a'.charCodeAt())


// function solution(s) {

//     s = s.split(' ')

//     for (let i = 0; i < s.length; i++) {
//         if (s[i][0].charCodeAt() >= 65 && s[i][0].charCodeAt() <= 90 ) {
//             s[i][0] = String.fromCharCode(s[i][0].charCodeAt()+ 32)
//         } else if (s[i][0].charCodeAt() >= 97 && s[i][0].charCodeAt() <= 122 ) {
//             s[i][0] = String.fromCharCode(s[i][0].charCodeAt()- 32)
//         }

//         if () {}
//     }

//     console.log(s.join(' '))


// }
// solution("3people unFollowed me")
// // solution("For the last week")




// function solution(s) {

//     for (let i = 0; i < s.length; i++) {
//         if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 ) {
            
//             s = s.replace(s[i], String.fromCharCode(s[i].charCodeAt()+ 32))
//         }
//     }

//     s = s.split(' ')


// }
// solution("3people unFollowed me")
// // solution("For the last week")


// function solution(s) {

//     for (let i = 0; i < s.length; i++) {
//         if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 ) {
            
//             s = s.replace(s[i], String.fromCharCode(s[i].charCodeAt()+ 32))
//         }
//     }

//     s = s.split(' ')


// }
// solution("3people unFollowed me")


// // 해결!!
// function solution(s) {

//     s = s.toLowerCase()

//     s = s.split(' ')

//     for (let i = 0; i < s.length; i++) {
//         if (s[i][0] !== undefined) {
//             s[i] = s[i].replace(s[i][0], s[i][0].toUpperCase())
//         }
//     }

//     console.log(s.join(' '))
//     return s.join(' ')

// }
// solution("3p234eople  unFollowed me")