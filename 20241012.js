// 롤케이크 자르기 - lv2 정답률: 61% 난이도 (1,2,3,4,5)
// 아 이렇게 하니까 시간 초과 뜨네.....
// function solution(topping) {
//     let count = 0;

//     let toppingLeft = [];
//     let toppingRight = [...topping];

//     // 기준선을 기준으로 왼쪽 오른쪽으로 분류
//     let leftObject = {};
//     let rightObject = {};

//     for (let i = 0; i < toppingRight.length; i++) {
//         rightObject[toppingRight[i]] = (rightObject[toppingRight[i]] || 0) + 1;
//     }

//     for (let j = 0; j < toppingRight.length; j++) {
//         leftObject[toppingRight[j]] = (leftObject[toppingRight[j]] || 0) + 1;
//         rightObject[toppingRight[j]] = (rightObject[toppingRight[j]] || 0) - 1;

//         if (rightObject[toppingRight[j]] == 0) {
//             delete rightObject[toppingRight[j]];
//         }

//         console.log(leftObject, rightObject);

//         if (Object.keys(leftObject).length == Object.keys(rightObject).length) {
//             count++;
//         }
//     }

//     console.log(count);
//     return count;
// }
// solution([1, 2, 1, 3, 1, 4, 1, 2]); // 2
// solution([1, 2, 3, 1, 4]); // 0

// 매 번 객체의 길이를 구하는 메서드 때문에 시간초과가 뜬거구나...
function solution(topping) {
    let count = 0;

    let toppingLeft = [];
    let toppingRight = [...topping];

    // 기준선을 기준으로 왼쪽 오른쪽으로 분류
    let leftObject = {};
    let rightObject = {};

    for (let i = 0; i < toppingRight.length; i++) {
        rightObject[toppingRight[i]] = (rightObject[toppingRight[i]] || 0) + 1;
    }

    let leftObjectLength = 0;
    let rightObjectLength = Object.keys(rightObject).length;

    for (let j = 0; j < toppingRight.length; j++) {
        leftObject[toppingRight[j]] = (leftObject[toppingRight[j]] || 0) + 1;

        if (leftObject[toppingRight[j]] == 1) {
            leftObjectLength++;
        }

        rightObject[toppingRight[j]] = (rightObject[toppingRight[j]] || 0) - 1;

        if (rightObject[toppingRight[j]] == 0) {
            delete rightObject[toppingRight[j]];
            rightObjectLength--;
        }

        console.log(leftObjectLength, rightObjectLength);

        if (leftObjectLength == rightObjectLength) {
            count++;
        }
    }

    console.log(count);
    return count;
}
solution([1, 2, 1, 3, 1, 4, 1, 2]); // 2
solution([1, 2, 3, 1, 4]); // 0




// 상품을 구매한 회원 비율 구하기 (MySQL) - lv5 정답률: 44%