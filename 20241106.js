// 주식가격 - lv2 정답률: 60% 난이도 (1,2,3,4,5)
// 쉽지 않네
// function solution(prices) {
//     let answer = [];
//     let stack = [];

//     for (let i = prices.length - 1; i >= 0; i--) {

//         console.log(stack, i);

//         // 맨 마지막 부분은 0을 넣어두기 및 스텍에 [값, 인덱스]
//         if (i == prices.length - 1) {
//             answer.unshift(0);
//             stack.push([prices[i], i]);
//             continue;
//         }

//         if (prices[i] > stack[0][0]) {
//             answer.unshift(stack[0][1] - i);
//             continue;
//         }

//         if (prices[i] <= stack[0][0]) {
//             answer.unshift(prices.length - 1 - i);
//             stack.pop();
//             stack.push([prices[i], i]);
//             continue;
//         }
//     }

//     console.log(answer);
// }
// // solution([1, 2, 3, 2, 3]); // [4, 3, 1, 1, 0]
// solution([1, 7, 2, 3, 2, 3, 5, 1, 9, 3, 7, 6, 2]);
//     //   12, 1, 5, 1, 3, 2, 1, 4, 1, 3, 1, 1, 0


// // gpt가 선물해준 최종 답변.. 후 .. 알고리즘 어렵네
// function solution(prices) {
//     const answer = Array(prices.length).fill(0); // 결과를 저장할 배열
//     const stack = []; // 가격 인덱스를 저장할 스택

//     for (let i = 0; i < prices.length; i++) {
//         // 현재 가격이 스택의 가격보다 작다면, 가격이 떨어진 것으로 간주
//         while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
//             const j = stack.pop(); // 떨어진 가격의 인덱스
//             answer[j] = i - j; // 가격이 유지된 기간 계산
//         }
//         stack.push(i); // 현재 인덱스를 스택에 추가
//     }

//     // 스택에 남아있는 인덱스들은 끝까지 가격이 떨어지지 않은 경우
//     while (stack.length > 0) {
//         const j = stack.pop();
//         answer[j] = prices.length - 1 - j; // 끝까지 유지된 기간을 계산
//     }

//     console.log(answer);
//     // 이후에는 스택에 남은 인덱스들에 대해 처리
//     return answer;
// }
// // solution([1, 2, 3, 2, 3]); // [4, 3, 1, 1, 0]
// solution([1, 7, 2, 3, 2, 3, 5, 1, 9, 3, 7, 6, 2]); // 12, 1, 5, 1, 3, 2, 1, 5, 1, 3, 1, 1, 0





function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = prices.length - 1 - j;
    }

    console.log(answer);

}
solution([1, 7, 2, 3, 2, 3, 5, 1, 9, 3, 7, 6, 2]); // 12, 1, 5, 1, 3, 2, 1, 5, 1, 3, 1, 1, 0