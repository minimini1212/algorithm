// 연속 부분 수열 합의 개수 - lv2 - 정답률: 69%, 난이도 (1,2,[3],4,5)
// slice를 이용하자 => 이 생각을 못했네
// 이것도 효율이 그렇게 좋지는 않네...
function solution(elements) {
    let sumObj = {};
    for (let i = 0; i < elements.length; i++) {
        let newElemnets = [...elements, ...elements.slice(0, i)];

        for (let j = 1; j <= elements.length; j++) {
            let num = newElemnets.slice(j - 1, j + i);
            let sum = num.reduce((a, b) => a + b, 0);
            if (!sumObj[sum]) {
                sumObj[sum] = sum;
            }
        }
    }

    return Object.values(sumObj).length;
}
solution([7, 9, 1, 1, 4]);

// 다른 사람 풀이
function solutionOther(elements) {
    const circular = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            // 난 개수별로 했는데 이 사람은 그냥 순차적으로 돌려서 더해질 수 있는 경우를 다 구하는 방식으로 했구만.
            sum += circular[i + j];
            set.add(sum);
            console.log(set, i, j)
        }
    }
    return set.size;
}
solutionOther([7, 9, 1, 1, 4])

// 괄호 회전하기 - lv2 - 정답률: 67%, 난이도 (1,2,[3],4,5) => 정답이긴 한데 효율이 그닥이긴하네..
function solution1(s) {
    s = s.split('')
    let temp = [...s]
    let count = 0;

    for (let x =0; x < s.length; x++) {
        let move = temp.shift()
        temp.push(move)
        let str = temp.join('')
        for (let i =0; i< s.length/2; i++ ) {
            str = str.replaceAll('()', '')
            str = str.replaceAll('{}', '')
            str = str.replaceAll('[]', '')
        }
        if (str.length == 0 ) {
            count++
        }
    }

    console.log(count)
}
solution1("[](){}")
solution1("}]()[{" )
solution1("[)(]")
solution1("}}}")

// 다른 사람 풀이
function solutionOther1(s) {
    if(s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}" : "{", "]" : "[", ")" : "("};

    for(let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        console.log(rotate, 'rotate')
        let flag = true;

        for(let j = 0; j < s.length; j++) {
            if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
                stack.push(rotate[j]);
            else {
                const last = stack.pop();
                if(last !== mapping[rotate[j]]) {
                    flag = false
                    break;
                }
            }
        }

        if(flag) answer++;
    }

    return answer;
}
solutionOther1("[](){}")
