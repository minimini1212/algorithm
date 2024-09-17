function solution(arr1, arr2) {
    var answer = [];
    let [ newArr11, newArr12 ] = arr1
    let [ newArr21, newArr22 ] = arr2

    for (let i =0; i<newArr11.length; i++) {
        answer.push([newArr11[i]+newArr21[i]])
        answer.push([newArr12[i]+newArr22[i]])
    }

    console.log(answer)
    return answer;
}
solution([[1],[2]], [[3], [4]])