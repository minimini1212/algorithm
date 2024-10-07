// k진수에서 소수 개수 구하기 - lv2 정답률: 61% 난이도 (1,[2],3,4,5)
function solution(n, k) {
    let count = 0;
    n = n.toString(k).split('0');

    let numArr = n
        .map((str) => parseInt(str, 10))
        .filter((num) => num > 1);  // 1보다 큰 수만 남김 (1은 소수가 아님)

    numArr.forEach((element) => {
        if (element === 2) {
            count++;
            return;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(element); i++) {
            if (element % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    });

    console.log(count)
    return count;
}
// solution(437674, 3); // 3
// solution(110011, 10); // 2
solution(10007, 10); // 1
