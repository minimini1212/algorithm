// 방문 길이 - lv2 정답률: 61% 난이도 (1,2,[3],4,5) 
// // 35점 정답 코드 아 맵으로 만들걸...
// function solution(dirs) {
//     let pastLoad = [];
//     let duplication = 0;
//     let temp = [0, 0];

//     for (let i = 0; i < dirs.length; i++) {
//         let newTemp = [];
//         if (dirs[i] == 'U') {
//             newTemp[0] = temp[0];
//             newTemp[1] = temp[1] + 1;
//         }
//         if (dirs[i] == 'D') {
//             newTemp[0] = temp[0];
//             newTemp[1] = temp[1] - 1;
//         }
//         if (dirs[i] == 'L') {
//             newTemp[0] = temp[0] - 1;
//             newTemp[1] = temp[1];
//         }
//         if (dirs[i] == 'R') {
//             newTemp[0] = temp[0] + 1;
//             newTemp[1] = temp[1];
//         }

//         if (newTemp[0] > 5 || newTemp[0] < -5 || newTemp[1] > 5 || newTemp[1] < -5) {
//             continue;
//         }

//         pastLoad.push([`(${temp[0]}, ${temp[1]})`, `(${newTemp[0]}, ${newTemp[1]})`]);

//         temp = [...newTemp];
//     }

//     let tempPastLoad = [...pastLoad];
//     console.log(pastLoad);
    

//     for (let j = 0; j < pastLoad.length; j++) {
//         tempPastLoad.splice(j,1)
//         tempPastLoad.forEach((arr) => {
//             if (arr.includes(pastLoad[j][0]) && arr.includes(pastLoad[j][1])) {
//                 duplication++;
//             }

//             console.log(arr, 'arr', j, arr.includes(pastLoad[j][0]), pastLoad[j][0], arr.includes(pastLoad[j][1]), pastLoad[j][1], duplication)
//         });
//         tempPastLoad = [...pastLoad]
//     }

//     console.log(pastLoad.length - duplication/2)
//     return pastLoad.length - duplication/2
// }
// // solution('ULURRDLLU'); // 7
// // solution('LULLLLLLU'); // 7
// solution('UDLR'); // 7


// 맵셋을 이용하자
function solution(dirs) {
    let pastLoad = new Set();
    let duplication = 0;
    let temp = [0, 0];

    for (let i = 0; i < dirs.length; i++) {
        let newTemp = [];
        if (dirs[i] == 'U') {
            newTemp[0] = temp[0];
            newTemp[1] = temp[1] + 1;
        }
        if (dirs[i] == 'D') {
            newTemp[0] = temp[0];
            newTemp[1] = temp[1] - 1;
        }
        if (dirs[i] == 'L') {
            newTemp[0] = temp[0] - 1;
            newTemp[1] = temp[1];
        }
        if (dirs[i] == 'R') {
            newTemp[0] = temp[0] + 1;
            newTemp[1] = temp[1];
        }

        if (newTemp[0] > 5 || newTemp[0] < -5 || newTemp[1] > 5 || newTemp[1] < -5) {
            continue;
        }

        pastLoad.add(`(${temp[0]},${temp[1]})-(${newTemp[0]},${newTemp[1]})`);
        pastLoad.add(`(${newTemp[0]},${newTemp[1]})-(${temp[0]},${temp[1]})`);

        temp = [...newTemp];
    }

    console.log(pastLoad.size/2)
}
solution('ULURRDLLU'); // 7
solution('LULLLLLLU'); // 7
solution('UDLR'); // 2