// 2024 lv1 카카오톡 인텁쉽 문제 정답률 24퍼
function solution(friends, gifts) {
    var answer = 0;
    // 선물 지수
    let giftIndex = new Map();

    for (let i = 0; i < friends.length; i++) {
        giftIndex.set(friends[i], 0);
    }

    for (let j = 0; j < gifts.length; j++) {
        let giveGift = gifts[j].split(' ')[0];
        let receiveGift = gifts[j].split(' ')[1];
        giftIndex.set(giveGift, giftIndex.get(giveGift) + 1);
        giftIndex.set(receiveGift, giftIndex.get(receiveGift) - 1);
    }
    // 선물 지수

    // 다음 달에 선물을 가장 많이 받을 친구의 선물 개수

    // 받을 선물 개수
    let getGifts = new Array(friends.length).fill(0);

    for (let k = 0; k < friends.length; k++) {
        for (let m = k + 1; m < friends.length; m++) {
            let giveNumK = gifts.filter((gift) => {
                return gift === `${friends[k]} ${friends[m]}`;
            }).length;

            let giveNumM = gifts.filter((gift) => {
                return gift === `${friends[m]} ${friends[k]}`;
            }).length;

            if (giveNumK > giveNumM) {
                getGifts[k]++;
            } else if (giveNumK < giveNumM) {
                getGifts[m]++;
            } else {
                if (giftIndex.get(friends[k]) > giftIndex.get(friends[m])) {
                    getGifts[k]++;
                } else if (giftIndex.get(friends[k]) < giftIndex.get(friends[m])) {
                    getGifts[m]++;
                } else {
                    continue;
                }
            }
        }
    }
    return Math.max(...getGifts);
}
solution(
    ['muzi', 'ryan', 'frodo', 'neo'],
    [
        'muzi frodo',
        'muzi frodo',
        'ryan muzi',
        'ryan muzi',
        'ryan muzi',
        'frodo muzi',
        'frodo ryan',
        'neo muzi',
    ],
);
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
solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a']);

// function giveGift(friends, gifts) {
// let result = gifts.filter(gift => {
//     return gift === `${friends[0]} ${friends[2]}`
// }).length

//     console.log(result)
// }
// giveGift(
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





// 하노이 탑
function solution1(n) {
    const answer = [];
    const hanoi = (n, from, to, by) => {
      if (n === 1) {
        answer.push([from, to]);
        return;
      }
      hanoi(n - 1, from, by, to);
      answer.push([from, to]);
      hanoi(n - 1, by, to, from);
    };
    hanoi(n, 1, 3, 2);
    console.log(answer)
    return answer;
}
solution1(3)
solution1(2)