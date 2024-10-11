// [3차] 압축 - lv2 정답률: 61% 난이도 (1,2,[3],4,5) -> 생각보다 무난함
// function solution(msg) {
//     var answer = [];

//     let dictionary = {};

//     for (let i = 1; i <= 26; i++) {
//         dictionary[`${i}`] = String.fromCharCode(i + 64);
//     }

//     for (let j = 0; j < msg.length; j++) {
//         if (Object.values(dictionary).includes(msg[j])) {
//             let strIndex = Object.values(dictionary).indexOf(msg[j]);
//             answer.push(Object.keys(dictionary)[strIndex]);
//         }
//     }

//     console.log(answer);

//     return answer;
// }
// solution('KAKAO'); // [11, 1, 27, 15]
// // solution('TOBEORNOTTOBEORTOBEORNOT'); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
// // solution('ABABABABABABABAB'); // [1, 2, 27, 29, 28, 31, 30]

function solution(msg) {
    var answer = [];

    let dictionary = {};

    for (let i = 1; i <= 26; i++) {
        dictionary[`${i}`] = String.fromCharCode(i + 64);
    }

    while (msg.length > 0) {
        for (let j = Object.entries(dictionary).length - 1; j >= 0; j--) {
            let dictionaryElement = Object.values(dictionary)[j];
            if (msg.startsWith(`${dictionaryElement}`)) {
                answer.push(j + 1);

                if (msg[dictionaryElement.length]) {
                    dictionary[Object.entries(dictionary).length + 1] =
                    dictionaryElement + msg[dictionaryElement.length];
                }

                msg = msg.replace(dictionaryElement, '');

                break;
            }
        }
    }

    console.log(dictionary)
    console.log(answer);
    return answer;
}
solution('KAKAO'); // [11, 1, 27, 15]
// solution('TOBEORNOTTOBEORTOBEORNOT'); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
// solution('ABABABABABABABAB'); // [1, 2, 27, 29, 28, 31, 30]


// 다른 사람 풀이
function solutionOther(msg) {
    const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').reduce((dict, c, i) => {
        dict[c] = i+1;
        return dict;
    }, {});

    dict.nextId = 27;
    const ans = [];
    for(let i = 0, j = 0; i < msg.length; i = j){
        j = msg.length;
        let longest = '';
        while(dict[(longest = msg.substring(i, j))] === undefined) --j;
        ans.push(dict[longest]);
        dict[longest + msg[j]] = dict.nextId++;
    }

    return ans;
}
// solutionOther('KAKAO'); // [11, 1, 27, 15]