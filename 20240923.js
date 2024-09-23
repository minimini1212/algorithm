function solution(progresses, speeds) {
    let completeDate = [];
    var answer = [];

    for (let i = 0; i < progresses.length; i++) {
        for (let j = 1; j < 100; j++) {
            if (progresses[i] + speeds[i] * j >= 100) {
                completeDate.push(j);
                break;
            }
        }
    }
    console.log('com:', completeDate);

    let stack = [];
    for (let k = 0; k < completeDate.length; k++) {
        stack.push(completeDate[k]);
        console.log('stack:', stack, 'k:', k);
        if (k == completeDate.length - 1) {
            answer.push(stack.length);
        }

        if (completeDate[k] < completeDate[k + 1]) {
            answer.push(stack.length);
            stack= [];
        }
        if (completeDate[k] >= completeDate[k + 1]) {
            completeDate[k + 1] = completeDate[k];
        }
    }
    console.log(answer);
    return answer;
}
solution([93, 30, 55], [1, 30, 5]); // [2,1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // [1, 3, 2]

//다른 사람 풀이
function solutionOther(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}