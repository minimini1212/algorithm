function solution(ss, skip, index) {
  var answer = "";
  ss = ss.split("");
  skip = skip.split("");
  let numSkip = skip.map((str) => {
    let ascStr = str.charCodeAt();
    return ascStr;
  });

  function verifyfunc(ascStr) {
    if (numSkip.includes(ascStr)) {
      ascStr++;
      return verifyfunc(ascStr);
    }
    if (ascStr > 122) {
      ascStr = 97;
      return verifyfunc(ascStr);
    }
    return ascStr;
  }

  let nums = ss.map((str) => {
    let ascStr = str.charCodeAt();
    for (let i = 0; i < index; i++) {
      ascStr++;
      ascStr = verifyfunc(ascStr);
    }
    return ascStr;
  });
  let str = nums.map((data) => {
    let back = String.fromCodePoint(data);
    return back;
  });
  answer = str.join("");
  console.log(answer);
  return answer;
}
solution("aukks", "wbqd", 10);

// function verifyfunc(ascStr) {
//   if (numSkip.includes(ascStr)) {
//     ascStr++;
//     verifyfunc(ascStr);
//   }
//   if (ascStr > 122) {
//     ascStr = 97;
//   }
//   return ascStr;
// }
