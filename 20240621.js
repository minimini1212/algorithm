// 입력받은 인구 수 배열을 일단 정렬을 해 놓는다.

// function solution(people, limit) {
//     let count = 0;
//     people = people.sort((x, y) => x - y);
//     while (people.length > 0) {
//         const sum = people.reduce()
//         console.log(sum)
//     }
// }
// solution([70, 50, 80, 50], 100);

// 에잇 - 버전2

// function solution(people, limit) {
//     let count = 0;
//     people = people.sort((x, y) => x - y);

// }
// solution([70, 50, 80, 50], 100);

// 반복문을 이용해서 일단 만들어 보자

function sum(people, limit) {
    let count = 1;
    people = people.sort((x, y) => x - y);
     g 
    function iterator(people, limit) {
        let sumWeight = 0;

        for (let i = 0; i < people.length; i++) {
            if (sumWeight <= limit) {
                sumWeight += people[i];
                if (sumWeight > 100) {
                    count++;
                    people = people.slice(i);
                    iterator(people, limit)
                    return
                }
            } else {
                count++;
                people = people.slice(i);
                iterator(people, limit)
                return
            }
        }
    }
    iterator(people, limit);

    console.log(count);
}
sum([70, 80, 50], 100);
