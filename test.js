// 어쩌다보니 조합을 만들었네..? 뭐지..?
let newArr = [];
let result = [];

function iterator(arr, num) {
    arr.forEach((current, index, origin) => {
        newArr.push(current);  // 현재 요소를 추가

        
        let sliceArr = origin.slice(index + 1);

        console.log('cu:', current, 'in:', index, 'or:', origin, 'sl:', sliceArr, 'new:', newArr);

        if (newArr.length == num) {
            result.push([...newArr]);  // 배열의 복사본을 저장
            newArr.pop();  // 마지막 추가된 요소 제거 (상태 복구)
            return;
        }

        iterator(sliceArr, num);  // 재귀 호출


        newArr.pop();  // 재귀 호출 후 마지막 요소 제거
    });
}

iterator([1, 2, 3, 4], 3);

console.log(result);


// let newArr = [];
// let result = [];
// function iterator(arr, num) {
//     arr.forEach((current, index, origin) => {
//         newArr.push(current);

//         console.log(current, index, origin, newArr);

//         let sliceArr = origin.slice(index + 1);

//         if (newArr.length == num) {
//             result.push(newArr);
//             newArr.pop();
//             return;
//         }

//         iterator(sliceArr, num);
//     });
// }
// iterator([1, 2, 3, 4], 3);

// console.log(result);


