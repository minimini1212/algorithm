// let a = '()(())'

// let b = a.includes('()')

// console.log(b)



function solution(s){
    var answer = true;
    let turn = s.length/2
    
    for (let i = 0; i < turn; i++) {
        s = s.replace('()','')
        console.log(i)
        if (!s.includes('()')) {
            break
        }
    }
    
    if (s !== '') {
        answer = false
    }

    console.log(answer)
    return answer;
}
solution('()()((()))')