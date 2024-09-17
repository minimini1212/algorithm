// LV2 

// -- 코드를 입력하세요
// SELECT COUNT(ANIMAL_ID) FROM ANIMAL_INS

// -- 코드를 입력하세요
// SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS
// WHERE NAME IS NOT NULL

// -- 코드를 입력하세요
// SELECT DATETIME FROM ANIMAL_INS
// ORDER BY DATETIME ASC
// LIMIT 1


// 입양 시각 구하기(1) -> 초기 구현한 버전
// -- 코드를 입력하세요
// SELECT DATE_FORMAT(DATETIME, '%T') FROM ANIMAL_OUTS
// WHERE DATE_FORMAT(DATETIME, '%T') >= '09:00:00'
// AND DATE_FORMAT(DATETIME, '%T') <= '19:59:00'
// ORDER BY DATETIME