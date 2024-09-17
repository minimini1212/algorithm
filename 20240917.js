// 멀리뛰기 lv2 - 계산해보면 피보나치수열임 -> easy~
function solution(n) {
    let f1 = 1;
    let f2 = 2;
    let arrNum = [f1, f2];

    if (n == 1 || n == 2) {
        return n;
    }

    for (let i = 2; i < n; i++) {
        arrNum[i] = arrNum[i - 2] + arrNum[i - 1];

        if (arrNum[i] >= 1234567) {
            arrNum[i] = arrNum[i] % 1234567;
        }
    }
    console.log(arrNum[n - 1]);
}
solution(5);
// solution(3)

// n개의 최소 공배수 -> 크게 어렵지는 않았다.
function solution1(arr) {
    let minNumber = 0;
    for (let j = 0; j < arr.length - 1; j++) {
        if (j == 0){
            minNumber = minNum(arr[j], arr[j+1])
        } else {
            minNumber = minNum(minNumber, arr[j+1])
        }
    }
    console.log(minNumber)
}
solution1([2, 6, 8, 14]);
solution1([1,2,3]);

function minNum(a, b) {
    let minNum = 0;
    let MaxNum = 0;
    let bigNum = a > b ? a : b;
    for (let i = 1; i <= bigNum; i++) {
        if (a % i == 0 && b % i == 0) {
            MaxNum = i;
        }
    }
    minNum = (a * b) / MaxNum;

    return minNum;
}

// 영어 끝말잇기 - lv2 -> 음 막 쉽지는 않았는데 깔끔하게 해결 (1,[2],3,4,5)
function solution2(n, words) {
    for (let i = 0; i < words.length - 1; i++) {
        let finalStr = words[i][words[i].length - 1];
        let firstStr = words[i + 1][0];
        // 끝말잇기가 안되는 경우
        if (finalStr !== firstStr) {
            let number = (i + 2) % n;
            if (number == 0) {
                number = n;
            }

            let order = Math.ceil((i + 2) / n);
            console.log([number, order]);
            return [number, order];
        }
        // 단어가 중복된 경우
        let sliceWords = words.slice(0, i + 1);
        let overlapWordBool = sliceWords.some((word) => word == words[i + 1]);

        if (overlapWordBool) {
            let number = (i + 2) % n;
            if (number == 0) {
                number = n;
            }
            let order = Math.ceil((i + 2) / n);
            console.log([number, order]);
            return [number, order];
        }
    }
    console.log([0, 0]);
    return [0, 0];
}
solution2(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']);
solution2(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
]);
solution2(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);
