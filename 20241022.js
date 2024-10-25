// 단어 변환 - lv3 정답률: 60% 난이도 (1,2,[3],4,5) => 조금씩 익숙해지는 느낌이 든다..
/**
 * 예외처리 -> target이 words 안에 존재하지 않을 시 return 0
 * words에서 하나씩 바꿔가면서 타겟으로 만들어야함.
 * 기본적으로 begin에서 트리를 만들기 시작할 건데 begin과 겹치는 알파벳이 하나이상인 애들로 구성
 *
 */
function solution(begin, target, words) {
    if (!words.includes(target)) {
        console.log(0);
        return 0;
    }

    let visited = new Array(words.length).fill(false);
    let vistedCount = [];

    function dfs(tempWord) {
        if (tempWord === target) {
            vistedCount.push(visited.filter((element)=> element == true).length)
            return;
        }

        for (let i = 0; i < words.length; i++) {
            let keepWord = tempWord;
            let sameCount = 0;
            for (let j = 0; j < tempWord.length; j++) {
                if (words[i][j] == tempWord[j]) {
                    sameCount++;
                }
            }

            if (!visited[i] && sameCount == tempWord.length - 1) {
                visited[i] = true;
                tempWord = words[i];
                dfs(tempWord);
                visited[i] = false;
                tempWord = keepWord;
            }
        }
    }
    dfs(begin);

    console.log(Math.min(...vistedCount))
}
solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']); // 4
// solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']); // 0

// for (let i = 0; i < words.length; i++) {
//     let sameCount = 0;
//     for (let j = 0; j < begin.length; j++) {
//         if (words[i].includes(begin[j]) && !visited[i]) {
//             ct++;
//             visited[i] = true;
//             tempWord = visited[i];
//             dfs(tempWord, ct);
//             visited[i] = false;
//             ct--;
//         }
//     }
// }


// gpt가 수정한 코드 -> 내 코드에 틀린 부분은 없지만 효율적인 면에서 떨어진다고 하여 수정된 부분
function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    let visited = new Array(words.length).fill(false);
    let minCount = Infinity; // 최소 변환 횟수를 저장할 변수

    function dfs(tempWord, count) {
        if (tempWord === target) {
            minCount = Math.min(minCount, count); // 최소 변환 횟수 업데이트
            return;
        }

        for (let i = 0; i < words.length; i++) {
            let sameCount = 0;
            for (let j = 0; j < tempWord.length; j++) {
                if (words[i][j] === tempWord[j]) {
                    sameCount++;
                }
            }

            if (!visited[i] && sameCount === tempWord.length - 1) {
                visited[i] = true; // 현재 단어 방문
                dfs(words[i], count + 1); // 카운트 증가하여 재귀 호출
                visited[i] = false; // 현재 단어 방문 해제
            }
        }
    }
    dfs(begin, 0); // 시작 단어와 초기 카운트 0 전달

    return minCount === Infinity ? 0 : minCount; // 변환 불가능할 경우 0 반환
}