function solution(friends, gifts) {
    var answer = 0;
    // 선물 지수
    let giftIndex = new Map();

    for (let i = 0; i < friends.length; i++) {
        giftIndex.set(friends[i], 0);
    }

    for (let i = 0; i < gifts.length; i++) {
        let a = gifts[i].split(' ')[0];
        let b = gifts[i].split(' ')[1];
        giftIndex.set(a, giftIndex.get(a) + 1);
        giftIndex.set(b, giftIndex.get(b) - 1);
    }
    // 선물 지수
    console.log(giftIndex);

    return answer;
}
//solution(
//     ['muzi', 'ryan', 'frodo', 'neo'],
//     [
//         'muzi frodo',
//         'muzi frodo',
//         'ryan muzi',
//         'ryan muzi',
//         'ryan muzi',
//         'frodo muzi',
//         'frodo ryan',
//         'neo muzi',
//     ],
// );

solution(
    ['joy', 'brad', 'alessandro', 'conan', 'david'],
    [
        'alessandro brad',
        'alessandro joy',
        'alessandro conan',
        'david alessandro',
        'alessandro david',
    ],
);

// solution(
//     ['a', 'b', 'c'],
//     [
//         'a b',
//         'b a',
//         'c a',
//         'a c',
//         'a c',
//         'c a',
//     ],
// );
// 킵.........아 어렵네 이거..


// 이거 풀고  '스타 수열' 풀어보자 -> lv3 정답률 낮은 문제임
