// [1차] 뉴스 클러스터링 - lv2 정답률: 62% 난이도: (1,[2],3,4,5)
function solution(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    let regex = /[a-zA-Z]/g
    let strArr1 = []
    let strArr2 = []
    
    let sameStr = 0
    
    for (let i = 0; i < str1.length-1; i++ ) {
       if (str1[i].match(regex) && str1[i+1].match(regex)) {
           strArr1.push(str1[i]+str1[i+1])
       }
    }
    for (let j = 0; j < str2.length-1; j++) {
        if (str2[j].match(regex) && str2[j+1].match(regex)) {
            strArr2.push(str2[j]+str2[j+1])
        }
    }
    
    for (let k = 0; k < strArr1.length; k++) {
        if (strArr2.some((arr) => arr == strArr1[k])) {
            strArr2.splice(strArr2.indexOf(strArr1[k]), 1)
            sameStr++
        }
    }
    let otherStr = strArr1.length + strArr2.length

    if (sameStr == 0 && otherStr == 0) {
        console.log(65536)
        return 65536
    }
    
    console.log(Math.floor((sameStr / otherStr ) * 65536))
    return Math.floor((sameStr / otherStr ) * 65536)
    
}
solution('FRANCE', 'french') // 16384
solution('handshake', 'shake hands') // 65536
solution('aa1+aa2', 'AAAA12') // 43690
solution('E=M*C^2', 'e=m*c^2') // 65536