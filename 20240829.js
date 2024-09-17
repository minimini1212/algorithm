// 문제를 잘못 이해한 풀이 - 공원 산책
// function solution(park, routes) {
//     // 시작점
//     let start = [0, 0];
//     start[1] = park[0].indexOf('S');
//     for (let i = 0; i < routes.length; i++) {
//         if (park.length !== routes.length) {
//             park.pop();
//         }

//         switch (routes[i][0]) {
//             case 'E':
//                 if (park[i].length < Number(routes[i][2])) {
//                     break;
//                 }
//                 if (
//                     park[i].indexOf('X') != -1 &&
//                     park[i].indexOf('X') + 1 <= Number(routes[i][2])
//                 ) {
//                     break;
//                 }
//                 start[1] += Number(routes[i][2]);

//                 break;
//             case 'W':
//                 if (park[i].length <= Number(routes[i][2])) {
//                     break;
//                 }
//                 if (
//                     park[i].indexOf('X') != -1 &&
//                     park[i].indexOf('X') + 1 <= Number(routes[i][2])
//                 ) {
//                     break;
//                 }
//                 start[1] -= Number(routes[i][2]);
//                 break;
//             case 'S':
//                 if (park[i].length <= Number(routes[i][2])) {
//                     break;
//                 }
//                 if (
//                     park[i].indexOf('X') != -1 &&
//                     park[i].indexOf('X') + 1 <= Number(routes[i][2])
//                 ) {
//                     break;
//                 }
//                 start[0] += Number(routes[i][2]);
//                 break;
//             case 'N':
//                 if (park[i].length <= Number(routes[i][2])) {
//                     break;
//                 }
//                 if (
//                     park[i].indexOf('X') != -1 &&
//                     park[i].indexOf('X') + 1 <= Number(routes[i][2])
//                 ) {
//                     break;
//                 }
//                 start[0] -= Number(routes[i][2]);
//                 break;
//         }
//     }
//     console.log(start);
// }
// solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
// solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']);
// solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);

// // 제대로 이해하고 푼 풀이
// function solution(park, routes) {
//     // 시작점
//     let start = [0, 0];
//     start[1] = park[0].indexOf('S');
//     for (let i = 0; i < routes.length; i++) {
//         switch (routes[i][0]) {
//             case 'E':
//                 if (start[1] + Number(routes[i][2]) > park[0].length - 1) {
//                     break;
//                 }

//                 let oxE = park[start[0]]
//                     .slice(start[1] + 1, start[1] + Number(routes[i][2]) + 1)
//                     .includes('X');

//                 if (oxE === true) {
//                     break;
//                 }

//                 start[1] += Number(routes[i][2]);
//                 break;
//             case 'W':
//                 if (start[1] - Number(routes[i][2]) < 0) {
//                     break;
//                 }

//                 let oxW = park[start[0]]
//                     .slice(start[1] - Number(routes[i][2]), start[1])
//                     .includes('X');
//                 if (oxW === true) {
//                     break;
//                 }

//                 start[1] -= Number(routes[i][2]);
//                 break;
//             case 'S':
//                 if (start[0] + Number(routes[i][2]) > park.length - 1) {
//                     break;
//                 }

//                 let oxS = [];
//                 for (let j = start[0] + 1; j <= start[0] + Number(routes[i][2]); j++) {
//                     oxS.push(park[j][start[1]]);
//                 }

//                 if (oxS.some((str) => str === 'X') === true) {
//                     break;
//                 }
//                 start[0] += Number(routes[i][2]);
//                 break;
//             case 'N':
//                 if (start[0] - Number(routes[i][2]) < 0) {
//                     break;
//                 }

//                 let oxN = [];
//                 for (let j = start[0] - Number(routes[i][2]); j <= start[0] - 1; j++) {
//                     oxS.push(park[j][start[1]]);
//                 }

//                 if (oxS.some((str) => str === 'X') === true) {
//                     break;
//                 }

//                 start[0] -= Number(routes[i][2]);
//                 break;
//         }
//     }
//     console.log(start);
// }
// solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
// solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']);
// solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);



// // 아 이게 틀린 이유가 시작점을 내가 맨 윗줄로 고정해서 그런거 같아 수정해볼게
// // 바로 위의 코드를 gpt가 수정해준것
// function solution1(park, routes) {
//      // 시작점
//      let start = [0, 0];
//      start[1] = park[0].indexOf('S');
 
//      for (let i = 0; i < routes.length; i++) {
//          let direction = routes[i][0];
//          let distance = Number(routes[i][2]);
//          let ox = false;
 
//          switch (direction) {
//              case 'E':
//                  if (start[1] + distance > park[0].length - 1) break;
 
//                  ox = park[start[0]]
//                      .slice(start[1] + 1, start[1] + distance + 1)
//                      .includes('X');
//                  if (!ox) start[1] += distance;
//                  break;
 
//              case 'W':
//                  if (start[1] - distance < 0) break;
 
//                  ox = park[start[0]]
//                      .slice(start[1] - distance, start[1])
//                      .includes('X');
//                  if (!ox) start[1] -= distance;
//                  break;
 
//              case 'S':
//                  if (start[0] + distance > park.length - 1) break;
 
//                  for (let j = start[0] + 1; j <= start[0] + distance; j++) {
//                      if (park[j][start[1]] === 'X') {
//                          ox = true;
//                          break;
//                      }
//                  }
//                  if (!ox) start[0] += distance;
//                  break;
 
//              case 'N':
//                  if (start[0] - distance < 0) break;
 
//                  for (let j = start[0] - distance; j < start[0]; j++) {
//                      if (park[j][start[1]] === 'X') {
//                          ox = true;
//                          break;
//                      }
//                  }
//                  if (!ox) start[0] -= distance;
//                  break;
//          }
//      }
 
//      console.log(start);
//  }
//  solution1(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
// solution1(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']);
// solution1(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);


// 수정해볼게
function solution2(park, routes) {
     // 시작점
     let start = [0, 0];
     for (let k = 0; k < park.length; k++ ){
          for (let m =0; m < park[k].length; m++) {
               if (park[k][m] === 'S'){
                    start[0] = k
                    start[1] = m
                    break
               }
          }
     }
 
     for (let i = 0; i < routes.length; i++) {
         let direction = routes[i][0];
         let distance = Number(routes[i][2]);
         let ox = false;
 
         switch (direction) {
             case 'E':
                 if (start[1] + distance > park[0].length - 1) break;
 
                 ox = park[start[0]]
                     .slice(start[1] + 1, start[1] + distance + 1)
                     .includes('X');
                 if (!ox) start[1] += distance;
                 break;
 
             case 'W':
                 if (start[1] - distance < 0) break;
 
                 ox = park[start[0]]
                     .slice(start[1] - distance, start[1])
                     .includes('X');
                 if (!ox) start[1] -= distance;
                 break;
 
             case 'S':
                 if (start[0] + distance > park.length - 1) break;
 
                 for (let j = start[0] + 1; j <= start[0] + distance; j++) {
                     if (park[j][start[1]] === 'X') {
                         ox = true;
                         break;
                     }
                 }
                 if (!ox) start[0] += distance;
                 break;
 
             case 'N':
                 if (start[0] - distance < 0) break;
 
                 for (let j = start[0] - distance; j < start[0]; j++) {
                     if (park[j][start[1]] === 'X') {
                         ox = true;
                         break;
                     }
                 }
                 if (!ox) start[0] -= distance;
                 break;
         }
     }
 
     console.log(start);
 }
 solution2(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
solution2(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']);
solution2(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);



// 다른 사람 풀이
function solution(park, routes) {
     const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
     let [x, y] = [0, 0];
     for (let i = 0; i < park.length; i++) {
       if (park[i].includes('S')) {
         [x, y] = [i, park[i].indexOf('S')];
         break;
       }
     }

     routes.forEach((route) => {
       const [r, n] = route.split(' ');
       let [nx, ny] = [x, y];
       let cnt = 0;
       while (cnt < n) {
         [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
         if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
         cnt++;
       }
       if (cnt == n) [x, y] = [nx, ny];
     });
     return [x, y];
   }