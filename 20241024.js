// 여행경로 - lv3 정답률: 47% 난이도 (1,2,3,4,5)

// 뭔가 복잡하게 했는데 고칠 부분을 잘 찾지 못해서 처음부터 다시 할 예정
// function solution(tickets) {
//     let usedTickets = [];
//     let visited = ['ICN'];
//     let queue = [];

//     for (let i = 0; i < tickets.length; i++) {
//         if (tickets[i][0] == 'ICN') {
//             bfs(tickets[i]);
//         }
//     }

//     function bfs(start) {
//         queue.push(start);
//         usedTickets.push(start);

//         while (queue.length > 0) {
//             console.log(queue.length);
//             let node = queue.shift();

//             visited.push(node[1]);

//             let order = [];
//             for (let j = 0; j < tickets.length; j++) {
//                 let isBool = isExist(tickets[j]);
//                 if (node[1] == tickets[j][0] && !isBool) {
//                     order.push(tickets[j]);
//                 }
//             }
//             order = order.sort((x, y) => x[1].localeCompare(y[1]));

//             if (!order[0]) {
//                 break;
//             }

//             queue.push(order[0]);
//             usedTickets.push(start);
//         }

//         if (visited.length !== tickets.length + 1) {
//             visited = ['ICN'];
//             usedTickets = [];
//         }
//     }

//     // 사용티켓인지 확인 여부
//     function isExist(ticket) {
//         let isBool = false;

//         usedTickets.forEach((usedTicket) => {
//             if (usedTicket[0] == ticket[0] && usedTicket[1] == ticket[1]) {
//                 isBool = true;
//             }
//         });

//         return isBool;
//     }

//     console.log(visited);
// }
// solution([
//     ['ICN', 'JFK'],
//     ['HND', 'IAD'],
//     ['JFK', 'HND'],
// ]); // 	["ICN", "JFK", "HND", "IAD"]
// solution([
//     ['ICN', 'SFO'],
//     ['ICN', 'ATL'],
//     ['SFO', 'ATL'],
//     ['ATL', 'ICN'],
//     ['ATL', 'SFO'],
// ]); // 	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// // gpt가 dfs가 더 효율적이라고 함 -> 50점짜리답안
// function solution(tickets) {
//     tickets = tickets.sort((x, y) => x[1].localeCompare(y[1]));
//     let visited = ['ICN'];

//     function dfs(ticketArr, start) {
//         ticketArr.forEach((ticket, index) => {
//             let restTicketLength = ticketArr.filter((ticket) => ticket !== true).length
//             if (ticket[0] == start && restTicketLength > 0) {
//                 visited.push(ticket[1]);
//                 ticketArr[index] = true;
//                 dfs(ticketArr, ticket[1]);
//             }
//         });
//     }
//     dfs(tickets, 'ICN');

//     console.log(visited);
// }
// solution([
//     ['ICN', 'JFK'],
//     ['HND', 'IAD'],
//     ['JFK', 'HND'],
// ]); // 	["ICN", "JFK", "HND", "IAD"]
// solution([
//     ['ICN', 'SFO'],
//     ['ICN', 'ATL'],
//     ['SFO', 'ATL'],
//     ['ATL', 'ICN'],
//     ['ATL', 'SFO'],
// ]); // 	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// // gpt가 도와줌... 내 코드가 문제가 좀 있었군..
function solution(tickets) {
    tickets.sort((a, b) => a[1].localeCompare(b[1]));
    let result = [];

    function dfs(current, path, usedTickets) {
        if (path.length === tickets.length + 1) {
            result.push([...path]);
            return;
        }

        tickets.forEach((ticket, index) => {
            if (!usedTickets[index] && ticket[0] === current) {
                usedTickets[index] = true;
                path.push(ticket[1]);
                dfs(ticket[1], path, usedTickets);
                path.pop();
                usedTickets[index] = false;
            }
        });
    }

    dfs('ICN', ['ICN'], new Array(tickets.length).fill(false));

    console.log(result);
    return result.sort()[0];
}
solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
]); // 	["ICN", "JFK", "HND", "IAD"]
solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
]); // 	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// 다른 사람 풀이
function solutionOther(tickets) {
    var answer = [];
    DFS(tickets, 'ICN', ['ICN']);
    return answer.sort()[0];
    
    function DFS(t, start, str) {
        if (t.length == 0) {
            answer.push(str);
        }
        for (var i in t) {
            if (t[i][0] == start) {
                let tmp = t.slice();
                tmp.splice(i, 1);
                let tmp2 = str.slice();
                tmp2.push(t[i][1]);
                DFS(tmp, t[i][1], tmp2);
            }
        }
    }
}
