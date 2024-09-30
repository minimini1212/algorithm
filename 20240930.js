// // 프로세스 - lv2 정답률: 64% 난이도 (1,2,3,4,5)
// // 이건 테스트 2개 통과 못함
// function solution(priorities, location) {

//     let processes = [];
//     let endProcess = [];
//     for (let k = 0; k < priorities.length; k++) {
//         let randomlyProcess = 'a';
//         randomlyProcess += k;
//         processes.push(randomlyProcess);
//     }

//     for (let i = 0; i < priorities.length; i++) {
//         for (let j = 0; j < priorities.length; j++) {
//             let max = Math.max(...priorities);
//             if (priorities[j] == max) {
//                 endProcess.push(processes[j])
//                 priorities[j] = true
//                 console.log(endProcess)
//             }

//             if (endProcess.length == processes.length ) {
//                 for (let l = 0; l < endProcess.length; l++ ) {
//                     if (endProcess[l] == processes[location]) {
//                         console.log(l+1)
//                         return l+1
//                     }
//                 }
//             }
//         }
//     }
// }
// solution([2, 1, 3, 2], 2); //1
// solution([1, 1, 9, 1, 1, 1], 0); //5


// 프로세스 - lv2 정답률: 64% 난이도 (1,2,3,[4],5) 
//-> 다른사람의 코드를 보면서 우선순위 큐에 대해서 더 공부해야겠다
// true가 Math.max에서 1로 적용되나보다.. false로 수정하니까 잘 실행되네
function solution(priorities, location) {

    let processes = [];
    let endProcess = [];
    for (let k = 0; k < priorities.length; k++) {
        let randomlyProcess = 'a';
        randomlyProcess += k;
        processes.push(randomlyProcess);
    }

    for (let i = 0; i < priorities.length; i++) {
        for (let j = 0; j < priorities.length; j++) {
            let max = Math.max(...priorities);
            if (priorities[j] == max) {
                endProcess.push(processes[j])
                priorities[j] = false
                console.log(endProcess)
            }

            if (endProcess.length == processes.length ) {
                for (let l = 0; l < endProcess.length; l++ ) {
                    if (endProcess[l] == processes[location]) {
                        console.log(l+1)
                        return l+1
                    }
                }
            }
        }
    }
}
solution([1, 1, 1, 1], 2);


// 다른 사람 코드
function solutionOther(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    console.log(list)

    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}
solutionOther([2, 1, 3, 2], 2)

// gpt 코드
function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        priority,
        index
    }));

    let order = 0;

    while (queue.length > 0) {
        let current = queue.shift(); // 첫 번째 프로세스 꺼내기
        if (queue.some(p => p.priority > current.priority)) {
            queue.push(current); // 더 높은 우선순위가 있으면 다시 큐에 넣음
        } else {
            order++; // 프로세스가 처리됨
            if (current.index === location) {
                return order; // 내가 찾고자 하는 프로세스 위치에 도달
            }
        }
    }
}