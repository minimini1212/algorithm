// 모음사전 - lv2 정답률: 61% 난이도 (1,2,[3],4,5)
// 재귀를 혼자 해냈으니 만족한다...
function solution(word) {
    let vowel = ['A', 'E', 'I', 'O', 'U'];
    let dictionary = [];
    let str = '';

    function exploration(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (str.length == 5) {
                break;
            }

            str += arr[i];
            dictionary.push(str);
            exploration(arr);
            str = str.slice(0, str.length-1);
        }
    }
    exploration(vowel);

    console.log(dictionary)

    console.log(dictionary.indexOf(word)+1)

    // return dictionary.indexOf(word)+1
}
solution('AAAAE'); // 6
solution("AAAE"); // 10
solution("I"); // 1563
solution("EIO"); // 1189

// 뭔가 sort안에서 다양하게 만들어보려고 했는데 localeCompare로 해결이 되네..?
// 문자열 정렬은 ->>>>>>>>> localeCompare를 이용할 수 있도록!!
// let a = ['aab', 'aic', 'aaa'];

// a = a.sort((x, y) => {
//     if (x.length == y.length) {
//         for (let i = 0; i < x.length; i++) {
//             if (x[i] == y[i]) {
//                 continue;
//             } else {
//                 return x[i].localeCompare(y[i]);
//             }
//         }
//     }

//     if (x.length !== y.length) {
//         let minLength = Math.min(x.length, y.length);
//         for (let j = 0; j < minLength; j++) {
//             if (x[i] == y[i]) {
//                 continue;
//             } else {
//                 return x[i].localeCompare(y[i]);
//             }
//         }
//     }
// });

// let b = ['ic', 'aab', 'aaa', 'aa'];

// b = b.sort((x, y) => x.localeCompare(y));

// console.log(b);
