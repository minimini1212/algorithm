// 추억 점수
function solution(name, yearning, photo) {
    let answer = [];
    let myMap = new Map();
    for (let i = 0; i < name.length; i++) {
        myMap.set(name[i], yearning[i]);
    }

    photo.map((pt) => {
        let sum = 0;
        for (let j = 0; j< pt.length; j++) {
            if (myMap.get(pt[j]) == undefined) {
                continue;
            }
            sum += myMap.get(pt[j])
        }
        answer.push(sum)
    });
    console.log(answer)
}
solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
        ['may', 'kein', 'kain', 'radi'],
        ['may', 'kein', 'brin', 'deny'],
        ['kon', 'kain', 'may', 'coni'],
    ],
);
//[19, 15, 6]


// 다른 사람 풀이
function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}





// 리팩토링 살짝...
function solution(name, yearning, photo) {
    let myMap = new Map();
    for (let i = 0; i < name.length; i++) {
        myMap.set(name[i], yearning[i]);
    }

    let answer = photo.map((pt) => {
        let sum = 0;
        for (let j = 0; j< pt.length; j++) {
            if (myMap.get(pt[j]) == undefined) {
                continue;
            }
            sum += myMap.get(pt[j])
        }
        return sum
    });
    console.log(answer)
}
solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
        ['may', 'kein', 'kain', 'radi'],
        ['may', 'kein', 'brin', 'deny'],
        ['kon', 'kain', 'may', 'coni'],
    ],
);
//[19, 15, 6]
