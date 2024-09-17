function solution(s) {
    let count = 0;
    let removeZero = 0;

    function removeNumber(s) {
        if (s === '1') {
            return;
        }
        if (s.includes('0')) {
            let PriorLength = s.length;
            s = s.replaceAll('0', '');
            removeZero += PriorLength - s.length;
            ++count;
            removeNumber(process(s.length));
        } else {
            ++count;
            removeNumber(process(s.length));
        }
    }
    removeNumber(s);
    return [count, removeZero]
}

// // 길이를 이진수로 만드는 작업
function process(a) {
    if (a=== 1) {
        return '1'
    }
    let ez = [];
    function binary(a) {
        let rest = a %  2; 
        let quotient = Math.floor(a / 2);
        if (quotient >= 2) {
            ez.unshift('' + rest);
            binary(quotient);
        } else {
            ez.unshift('' + rest);
            ez.unshift('' + quotient);
        }
    }
    binary(a);
    let binaryNum = ez.join('');
    return binaryNum;
}





// 다른 사람의 풀이

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}