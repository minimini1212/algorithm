// h-index - lv2 - 정답률: 65% 난이도 (1,[2],3,4,5) => 문제만 잘 이해하면 어렵지는 않네
// 문제를 잘못 이해함 .. 배열 안의 요소로만 비교하는 줄....
function solution(citations) {
    var answer = 0;
    citations = citations.sort((a, b) => a - b);
    console.log('citations:', citations);
    for (let i = 0; i < citations.length; i++) {
        const num = citations.filter((data) => data >= citations[i]);
        console.log(num);
        if (num.length >= citations[i]) {
            answer = citations[i];
        }
    }
    console.log(answer);
    return answer;
}
// solution([3, 0, 6, 1, 5])
// solution([3, 0, 1, 5, 314, 7, 8, 9, 123, 999, 1002]) => 이것도 답이 6이 나와야 하네
// solution([0, 1, 5, 6, 7]) => 반례

// 다시 풀이
function solution1(citations) {
    let answer = 0;
    citations = citations.sort((a, b) => a - b);
    
    for (let i = 0; i <= citations[citations.length - 1]; i++) {
        const filterArr = citations.filter((data) => data >= i);
        if (filterArr.length < i) {
            console.log(answer);
            return answer;
        }
        if (filterArr.length >= i ){
            answer = i
        }
    }
    console.log(answer);
    return answer;
}
solution1([3, 0, 6, 1, 5]);
solution1([0, 1, 5, 6, 7]);
solution1([0, 1]);
solution1([2]);

// 다른 사람 풀이
function solutionOther(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
}