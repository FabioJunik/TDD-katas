

export class StringCalculator {

    add(numbers: string): number {

        if (numbers === "") {
            return 0;
        }

        const separeteNumbers = numbers.split(",");

        const addedNumbers = separeteNumbers.reduce((sum, number) => Number(sum) + Number(number), 0);

        return addedNumbers;

    }
}