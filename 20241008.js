// 내가 만든 로또 번호 알려주는 메서드
function lotto(previousWinningNumberArr) {
    let newLottoNumArr = [];
    let NumArr = [];

    for (let i = 1; i < 46; i++) {
        NumArr.push(i);
    }

    previousWinningNumberArr.forEach((num) => {
        NumArr.splice(NumArr.indexOf(num), 1);
    });

    while (newLottoNumArr.length < 6) {
        let randomIndex = Math.floor(Math.random() * NumArr.length);
        let randomNumber = NumArr[randomIndex];

        if (!newLottoNumArr.includes(randomNumber)) {
            newLottoNumArr.push(randomNumber);
        }
    }

    newLottoNumArr.sort((x, y) => x - y);

    console.log(newLottoNumArr);
}
lotto([7, 10, 22, 29, 31, 38]);
