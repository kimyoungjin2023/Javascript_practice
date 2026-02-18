// Node.js 입력을 위한 readline 모듈
const readline = require("readline");

// 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1, num2, operator;

// 첫 번째 숫자 입력
rl.question("첫 번째 숫자를 입력하세요: ", (input1) => {
    num1 = Number(input1);

    // 두 번째 숫자 입력
    rl.question("두 번째 숫자를 입력하세요: ", (input2) => {
        num2 = Number(input2);

        // 연산자 입력
        rl.question("연산자를 입력하세요 (+, -, *, /, %): ", (op) => {
            operator = op;

            let result;

            // 계산 로직
            if (operator === "+") {
                result = num1 + num2;
            } else if (operator === "-") {
                result = num1 - num2;
            } else if (operator === "*") {
                result = num1 * num2;
            } else if (operator === "/") {
                result = num2 !== 0 ? num1 / num2 : "0으로 나눌 수 없습니다.";
            } else if (operator === "%") {
                result = num2 !== 0 ? num1 % num2 : "0으로 나눌 수 없습니다.";
            } else {
                result = "지원하지 않는 연산자입니다.";
            }

            console.log(`\nresult: ${num1} ${operator} ${num2} = ${result}`);

            // 입력 종료
            rl.close();
        });
    });
});
