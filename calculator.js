// 1. 입력 값 설정
let num1 = 20;
let num2 = 7;

let operator = "+"; // 산술 연산자 : +, -, *, /, %

let result;

// 2. 조건문 활용 (if - else if)
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else if (operator === "%") {
    result = num1 % num2;
} else {
    result = "지원하지 않는 연산자 입니다.";
}

// 3. 결과 출력
console.log(`result: ${num1} ${operator} ${num2} = ${result}`);