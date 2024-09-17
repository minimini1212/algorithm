// 소수찾기 // 효율성 테스트 통과x
// function solution(n) {
//     if (n == 2 ){
//         return 1
//     }
//     let answer = 0;
//     for (let i = 2; i <= n; i++) {
//         answer++
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0 && i !==2) {
//                 console.log('i:', i)
//                 answer--
//                 break;
//             }
//         }
//     }
//     console.log(answer)
//     return answer;
// }
// solution(10);
// solution(5);
// solution(13);


// 가장 효율적인 코드 - 에라토스테네스의 체
function findPrimes(limit) {
    // 0과 1은 소수가 아니므로 false로 설정
    let sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;

    // 2부터 시작하여 소수의 배수를 false로 만듭니다.
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                console.log('i:',i, 'j:', j)
                sieve[j] = false;
            }
        }
    }

    // true로 남아있는 인덱스는 소수
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }

    return primes;
}

// 사용 예시: 100까지의 소수를 찾습니다.
let primes = findPrimes(100);
console.log(primes);