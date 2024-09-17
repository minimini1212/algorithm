// 안됨
// function solution(number, k) {
//     let i = 0;
//     let arrNum = number.split('');
//     while (k > 0) {
//         if (arrNum[i] < arrNum[i+1]) {
//             arrNum.splice(i, 1)
//             k--
//         } else {
//             i++
//         }
//     }
//     let sumNum = arrNum.join('')
//     return sumNum
// }


// 12개의 테스트 중 2개 통과 실패 => 런타임 에러, 시간 초과
// 얘는 하나의 배열에서 계속 지우고 다시 찾아오고 해서 오래걸리는 건가
// 그러면 내일 할 때는 새로운 배열을 만들어서 그 배열에 숫자를 추가해서 조합하는 방법으로 해보자 - 7/10
function solution(number, k) {
    let arrNum = number.split('');
    let i = 0;
    while (k > 0) {
        let cutNum = arrNum.slice(i, k+i+1);
        console.log('arrNum=', arrNum, 'cutNum=',cutNum, 'i=',i, 'k=',k);
        if (Number(cutNum[0]) < Number(Math.max(...cutNum)) || cutNum.length == 1) {
            arrNum.splice(i,1);
            k--;
        } else {
            i++;
        }
    }
    console.log(arrNum)
}
solution('1924', 2);
solution('1231234', 3);
solution('4177252841', 4);



