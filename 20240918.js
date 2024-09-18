// 예상 대진표 -lv2
// 테스트 2개를 통과 못하네
// function solution(n, a, b) {

//     if ((a >= n/2 + 1 && b <= n/2) || (b >= n/2 + 1 && a <= n/2)) {
// let x = 0
// while (Math.pow(2,x) !== n) {
//     x++
// }
//         console.log(x)
//         return x
//     }

// let answer = 1
// while ( Math.abs(a-b) > 1) {
//     a = Math.ceil(a/2)
//     b = Math.ceil(b/2)
//     answer++
// }
//     console.log(answer)
//     return answer
// }
// solution(8, 4, 6);

// 오오... 이것을 그룹별로 생각하면 편하다 => 트리 모양으로 생각하기 -> 꽤 오래 걸림... (1,2,3,[4],5)
function solution(n, a, b) {
    let x = 1;
    while (Math.pow(2, x) !== n) {
        x++;
    }
    // x는 지수를 의미 2의 x제곱
    let answer = 1;
    for (let i = x - 1; i >= 0; i--) {
        // Math.ceil(a / Math.pow(2, i))와 Math.ceil(b / Math.pow(2, i))가 
        // 같다는 것은 같은 그룹에 속해 있다는 의미
        if (Math.ceil(a / Math.pow(2, i)) !== Math.ceil(b / Math.pow(2, i))) {
            console.log(answer + i);
            return answer + i;
        }
    }
}
solution(16, 2, 3);

// 귤 고르기 - lv2 -> 꽤나 까다로웠다 내가 객체를 이용하는 방법에 익숙치 않아서 map을 사용해서 풀이함
function solution1(k, tangerine) {
    let answer = 0;
    tangerine.sort((a, b) => a - b);
    let myMap = new Map();
    for (const value of tangerine) {
        if (!myMap.get(value)) {
            myMap.set(value, 1);
        } else {
            myMap.set(value, myMap.get(value) + 1);
        }
    }
    let arr = [];
    for (let val of myMap.values()) {
        arr.push(val);
    }
    arr = arr.sort((a, b) => b - a);

    while (k > 0) {
        k -= arr[answer];
        answer++;
    }
    console.log(answer);
    return answer;
}
solution1(6, [1, 3, 2, 5, 4, 5, 2, 3]); // 3
solution1(4, [1, 3, 2, 5, 4, 5, 2, 3]); // 2
solution1(2, [1, 1, 1, 1, 2, 2, 2, 3]); // 1

// 다른 사람 풀이
function solution2(k, tangerine) {
    let answer = 0;
    // 내가 map을 사용해서 나타낸 부분이랑 동일한 값을 가진다... 이런 건 생각도 못했네
    const tDict = {};
    //(tDict[t] || 0) -> tDict[t] 에 값이 있으면 그에 해당하는 value값을 반환 undefined면 0을 반환
    tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
    //
    console.log(tDict);
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    for (const t of tArr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    return answer;
}
solution2(6, [1, 3, 2, 5, 4, 5, 2, 3]); // 3
solution2(4, [1, 3, 2, 5, 4, 5, 2, 3]); // 2
solution2(2, [1, 1, 1, 1, 2, 2, 2, 3]); // 1

// 예시 -> 객체를 이렇게 이용한다
let a = {};
a.itt = 'itt';
console.log(a);