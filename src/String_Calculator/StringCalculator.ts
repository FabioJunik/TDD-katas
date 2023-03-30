

export class StringCalculator {

    add(numbers: string): number {

        if (numbers === "") {
            return 0;
        }

        const separeteNumbers = numbers.split(",");

        if (separeteNumbers.length === 1) {
            return Number(numbers);
        }

        if (separeteNumbers.length === 2) {
            const number1 = Number(separeteNumbers[0]);
            const number2 = Number(separeteNumbers[1]);

            return number1 + number2;
        }

        const number1 = Number(separeteNumbers[0]);
        const number2 = Number(separeteNumbers[1]);
        const number3 = Number(separeteNumbers[2]);

        return number1 + number2 + number3;

    }
}