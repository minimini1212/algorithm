// function solution(s) {
//     let numberOfTime = 0;
//     function zeroRemove() {
//         if (s.includes('0')) {
//             s= s.replace('0', '')
//             numberOfTime++
//         } else {
//             6
//         }
//     }
//     zeroRemove(s)
    



//     s = s.replaceAll('0', '');
//     let length = s.length;
//     if (length !== 1) {
//         let str = length + '';
//         console.log(str);
//         solution(str);
//     }

//     return;
// }
// solution('110010101001');


// // 길이를 이진수로 만드는 작업
// function process(a) {
//     let ez = [];
//     function binary(a) {
//         let rest = a % 2;
//         let quotient = Math.floor(a / 2);
//         if (quotient >= 2) {
//             ez.unshift('' + rest);
//             binary(quotient);
//         } else {
//             ez.unshift('' + rest);
//             ez.unshift('' + quotient);
//         }
//     }
//     binary(a)
//     let binaryNum = ez.join('')
//     console.log(binaryNum)
//     return ez;
// }
// process(6);





// 문자열을 받아

// 그 문자열에 1이면 
// return [0, 0]  변환 횟수와 변환된 0의 개수를 반환하는 거야

// 문자열에 0이 있는 것을 받으면

// 0을 제거하는 작업을 할거야 
// 그런데 이 작업에서 그 문자열에 속해있는 0이 몇개있는지 알아야하고 
// 이 작업을 한 번 할 때마다 count를 셀거야
// 그리고 제거한 다음 그 문자열의 길이를 이진법으로 만들고
// 그것을 문자열로 표현한 후 0이 있으면 다시 작업에 들어가


function solution(s) {
    let count = 0;
    let removeZero = 0;
    if (s==='1') {
        console.log([count, removeZero])
        return [count, removeZero]
    }


    function removeNumber(s) {
        if (s.includes('0')) {
            let PriorLength = s.length  
            s = s.replaceAll('0', '')
            removeZero = PriorLength - s.length
            count++
            
        } else {
    
        }
    }
    removeNumber(s)
    

}
solution('110')



// // 길이를 이진수로 만드는 작업
function process(a) {
    let ez = [];
    function binary(a) {
        let rest = a % 2;
        let quotient = Math.floor(a / 2);
        if (quotient >= 2) {
            ez.unshift('' + rest);
            binary(quotient);
        } else {
            ez.unshift('' + rest);
            ez.unshift('' + quotient);
        }
    }
    binary(a)
    let binaryNum = ez.join('')
    console.log(binaryNum)
    return ez;
}
process(6);