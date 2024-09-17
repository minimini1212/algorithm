// -- 코드를 입력하세요

// 쿼리문 - 재구매가 일어난 상품과 회원 리스트 구하기
// SELECT USER_ID, PRODUCT_ID
// FROM ONLINE_SALE
// 그룹 바이를 다음과 같이 사용할 경우
// GROUP BY USER_ID,PRODUCT_ID
// HAVING COUNT(PRODUCT_ID) > 1
// ORDER BY USER_ID ASC, PRODUCT_ID DESC

// 쿼리문 - 물고기 종류 별 잡은 수 구하기
// -- 코드를 작성해주세요
// SELECT COUNT(FNI.FISH_TYPE) AS FISH_COUNT, FNI.FISH_NAME FROM FISH_INFO FI
// INNER JOIN FISH_NAME_INFO FNI ON FI.FISH_TYPE = FNI.FISH_TYPE
// GROUP BY FNI.FISH_NAME
// ORDER BY FISH_COUNT DESC



// function solution(s) {
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



function solution(s) {
    let numberOfTime = 0;
    function zeroRemove() {
        if (s.includes('0')) {
            s= s.replace('0', '')
            numberOfTime++
        } else {
            6
        }
    }
    zeroRemove(s)
    



    s = s.replaceAll('0', '');
    let length = s.length;
    if (length !== 1) {
        let str = length + '';
        console.log(str);
        solution(str);
    }

    return;
}
solution('110010101001');


// 길이를 이진수로 만드는 작업
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


let x= 5;
while(--x){
    console.log(x)
}