// 예산 easy~~
function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for (let i =0; i< d.length; i++) {
        sum += d[i]
        if (sum <= budget) {
            answer++
        } else {
            break
        }
    }
    console.log(answer)
}
solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);




let a = [1,2,3,6,8]

