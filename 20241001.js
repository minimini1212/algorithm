// // 전화번호 목록 - lv2 정답률: 63% 난이도 (1,2,3,4,5)
// // 이건 효율성 테스트에서 시간 초과가 뜬다....
// function solution(phone_book) {
//     var answer = true;

//     phone_book.sort((x, y) => x.length - y.length);

//     console.log(phone_book);
//     for (let i = 0; i < phone_book.length; i++) {
//         phone_book.slice(i+1, phone_book.length).forEach((phoneNumber) => {
//             if (phoneNumber.slice(0, phone_book[i]).includes(phone_book[i])) {
//                 answer = false;
//             }
//         });
//     }

//     console.log(answer)
//     return answer;
// }
// solution(['119', '97674223', '1195524421']); // false
// solution(['123', '456', '789']); // true
// solution(['12', '123', '1235', '567', '88']); // false

// 전화번호 목록 - lv2 정답률: 63% 난이도 (1,2,[3],4,5)
// 해시 자료구조를 좀 공부하고 왔더니 해결함... 휴..
function solution(phone_book) {
    var answer = true;

    let phoneBookObj = {};

    for (let i = 0; i < phone_book.length; i++) {
        phoneBookObj[phone_book[i]] = true;
    }

    console.log(phoneBookObj);

    phone_book.forEach((num) => {
        for (let j = 1; j < num.length; j++) {
            if (phoneBookObj[num.slice(0, j)]) {
                answer = false
                return answer
            }
        }
    });

    console.log(answer)
    return answer;
}
solution(['119', '97674223', '1195524421']); // false
solution(['123', '456', '789']); // true
solution(['12', '123', '1235', '567', '88']); // false


// // 다른 사람 풀이
// function solutionOther(phoneBook) {
//     return !phoneBook.sort().some((t,i)=> {
//         if(i === phoneBook.length -1) return false;

//         return phoneBook[i+1].startsWith(phoneBook[i]);        
//     })
// }

// // 다른 사람 풀이 2
// function solutionOther2(phone_book) {
//     phone_book.sort();
//     for(let i = 0; i < phone_book.length - 1; i++){
//         if(phone_book[i + 1].indexOf(phone_book[i]) === 0) return false;
//     }
//     return true;
// }