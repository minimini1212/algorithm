// SQLD 자격증 공부 파일

// select animal_type, instr(animal_type, 'c') as 위치 from animal_ins
// -> 이렇게 하면 animal_type 컬럼에서 'c' 라는 문자를 가진 위치를 반환하는데 첫번째위치가
// 1부터 시작한다
// 해당 문자가 존재하지 않으면 0을 반환한다 

// SELECT LPAD(ANIMAL_TYPE, 5, 'C') FROM ANIMAL_INS
// -> 이렇게 하면 animal_type 컬럼에서 'C' 라는 문자를 기존 데이터 문자열 왼쪽에 추가할건데
// 그 문자열의 길이가 5만큼 되도록 추가할 것이다.
// 예를 들어, DOG 라는 데이터가 있으면 CCDOG를 출력할 것이다

// COALESCE
// A         B         coalesce (a,b)
// 1        null            1
// 2         3              2
// null      4              4
// null     null           null