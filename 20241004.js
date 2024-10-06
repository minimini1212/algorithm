// [3차] n진수 게임 - lv2 정답률: 61% 난이도 (1,[2],3,4,5) - 무난하군..
function solution(n, t, m, p) {
    let answer = '';
    let number = '';
    let k = 0;
    for (let i = 0; i < t * m; i++) {
        number += i.toString(n);
    }

    console.log(number);

    for (let j = 0; j < t * m; j++) {
        if (k == t) {
            break;
        }
        if (j + 1 == p + m * k) {
            answer += number[j];
            k++;
        }
    }
    console.log(answer.toUpperCase());
    return answer.toUpperCase();
}
solution(2, 4, 2, 1);
solution(16, 16, 2, 1);
