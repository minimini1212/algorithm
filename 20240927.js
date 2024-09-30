// 프로세스 - lv2 정답률: 64% 난이도 (1,2,3,4,5)
function solution(priorities, location) {
    let max = Math.max(...priorities);
    let maxIndex = priorities.indexOf(max);
    if (location == maxIndex) {
        return 1;
    }

    let processes = [];
    let endProcess = [];
    for (let i = 0; i < priorities.length; i++) {
        let randomlyProcess = 'a';
        randomlyProcess += i;
        processes.push(randomlyProcess);
    }
    
    console.log(endProcess);
}
solution([2, 1, 3, 2], 2); //1  
solution([1, 1, 9, 1, 1, 1], 0); //5

// -> 잘 모르겠다 이건 gpt한테 도움 안받고 싶으니까 다음에 풀자