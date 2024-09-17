// 구명보트 -> 시간 효율이 나오지 않음..
function solution(people, limit) {
    let stackMax = people.filter((p)=> limit/2 < p).sort((x,y)=> y-x)
    let stackMin = people.filter((p)=> limit/2 >= p).sort((x,y)=> x-y)
    let count = 0
    console.log(stackMax, stackMin)
    for (let i = 0; i < stackMax.length; i++) {
        for (let j = 0; j < stackMin.length; j++) {
            if ((stackMin[j] && stackMax[i]) && stackMax[i]+stackMin[j] <= limit) {
                console.log(i, j)
                console.log(stackMax[i], stackMin[j], stackMax[i]+stackMin[j])
                count++
                stackMax[i] = false
                stackMin[j] = false
            }
        }
    }
    let MaxLength = stackMax.filter((stack) => stack !== false).length
    let MinLength = stackMin.filter((stack) => stack !== false).length
    console.log(MaxLength, 'MaxLength\n',MinLength, 'MixLength\n', stackMax, stackMin)
    if (MinLength % 2 == 0) {
        MinLength = MinLength/2
    } else {
        MinLength = Math.floor(MinLength/2)+1
    }
    count += MaxLength + MinLength
    console.log(count)
    return count
}
solution([70, 50, 80, 50, 10, 20, 90, 80, 80, 90], 100)
// solution([70, 80, 50], 100)



// gpt의 답안 -> 코드 이해함
function solution(people, limit) {
    // 무거운 사람을 내림차순 정렬
    people.sort((a, b) => b - a);
    let count = 0;
    let i = 0, j = people.length - 1;

    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            // 가장 무거운 사람과 가장 가벼운 사람을 태운다.
            j--;  // 가벼운 사람을 태웠으므로 인덱스를 줄인다.
        }
        // 가장 무거운 사람을 태웠으므로 다음으로 무거운 사람으로 이동
        i++;
        count++;
    }

    return count;
}