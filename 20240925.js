// 튜플 - lv2 정답률: 64% 난이도 (1,2,[3],4,5 ) => 중간에 포기할 뻔.... 문자열을 배열로 바꾸는 작업이 힘들었다.
function solution(s) {
    let answer = [];
    let newArr = [];

    s = s.replace('{{', '');
    s = s.replace('}}', '');
    s = s.split('},{');

    for (let i =0; i < s.length; i++) {
        let arr = s[i].split(',')
        newArr.push(arr)
    }

    newArr.sort((a, b) => a.length - b.length);

    console.log(newArr);

    newArr.forEach((arr) => {
        for (let j = 0; j < arr.length; j++) {
            if (answer.length == 0) {
                answer.push(Number(arr[j]));
            } else if (answer.indexOf(Number(arr[j])) == -1) {
                answer.push(Number(arr[j]));
            }
        }
    });

    console.log(answer);
    return answer;
}
solution('{{1,2,3},{2,1},{1,2,4,3},{2}}');
solution('{{20,111},{111}}');

// 실패 버전
// // 튜플 - lv2 정답률: 64% 난이도 (1,2,3,4,5 )
// function solution(s) {
//     let answer = [];
//     let newArr = [];
//     s = s.replaceAll('{', '');
//     let number = [];

//     console.log(s)

//     for (let i = 0; i < s.length; i++) {
//         if (i == s.length - 1) {
//             break;
//         }
//         if (Number(s[i])) {
//             number.push(Number(s[i]));
//         }
//         if (s[i] == '}') {
//             newArr.push(number);
//             number = [];
//         }
//     }
//     newArr.sort((a, b) => a.length - b.length);

//     console.log(newArr)

//     newArr.forEach((arr) => {
//         for (let j = 0; j < arr.length; j++) {
//             if (answer.length == 0) {
//                 answer.push(arr[j]);
//             } else if (answer.indexOf(arr[j]) == -1) {
//                 answer.push(arr[j]);
//             }
//         }
//     });

//     // console.log(answer);
//     return answer;
// }
// // solution('{{1,2,3},{2,1},{1,2,4,3},{2}}');
// solution("{{20,111},{111}}");
