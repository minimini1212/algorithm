// 타겟 넘버 - lv2 정답률: 62% 난이도 (1,2,3,4,5)
// 도저히 방법이 떠오르지 않아서 gpt의 도움을 받음.. 재귀가 아직 너무 생소하다.. 더욱 더 연습해봐야겠다.
function solution(numbers, target) {
    let answer = 0;

    function dfs(numbers, target, depth, sum) {
        if (depth === numbers.length) {
            // 종료 조건: 모든 숫자를 처리한 경우
            if (sum === target) {
                answer++;
            }
            return;
        }

        // 현재 숫자에 '+' 적용
        dfs(numbers, target, depth + 1, sum + numbers[depth]);

        // 현재 숫자에 '-' 적용
        dfs(numbers, target, depth + 1, sum - numbers[depth]);
    }

    dfs(numbers, target, 0, 0);

    return answer;
}
solution([1, 1, 1, 1, 1], 3)



// 다른 사람 풀이 -> 노드를 직접구현해서 풀이한 것으로 공부하고 싶어서 복사함.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }   
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            function traverse(node) {
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                if(node.left === null) {
                    let leftNode = new Node(-value);
                    let rightNode = new Node(value);
                    node.left = leftNode;
                    node.right = rightNode;
                }
            }
            traverse(current);
            return this;
        }
    }
    DFSPreOrder(target) {
        let count = 0;
        let data = 0;
        let current = this.root;
        function traverse(node) {
            data = data + node.value;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            if(node.left === null) {
                if(data === target) {
                    count++;
                }
            }
            data = data - node.value;
        }
        traverse(current);
        return count;
    }
}


function solutionOther(numbers, target) {
    var answer = 0;
    var answer = 0;

    let root = new BinarySearchTree();
    root.insert(0);
    numbers.forEach(function(val) {
       root.insert(val); 
    });

    answer = root.DFSPreOrder(target);
    return answer;
}
solutionOther([1, 1, 1, 1, 1], 3)