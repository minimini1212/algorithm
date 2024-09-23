// [1차] 캐시 - lv2 정답률: 64% 난이도 (1,2,3,4,5)
function solution(cacheSize, cities) {
    let answer = 0;
    let cacheArr = [];
    if (cacheSize == 0) {
        return cities.length * 5;
    }
    cities = cities.map((city) => city.toLowerCase());
    for (let i = 0; i < cities.length; i++) {
        if (cacheArr.length < cacheSize && !cacheArr.includes(cities[i])) {
            cacheArr.push(cities[i]);
            answer += 5;
        } else if (cacheArr.includes(cities[i])) {
            cacheArr.splice(cacheArr.indexOf(cities[i]), 1);
            cacheArr.push(cities[i]);
            answer++;
        } else if (!cacheArr.includes(cities[i])) {
            cacheArr.splice(0, 1);
            cacheArr.push(cities[i]);
            answer += 5;
        }
    }
    console.log(answer);
    return answer;
}
solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
]);
