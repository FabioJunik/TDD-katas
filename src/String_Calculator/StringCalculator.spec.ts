import { StringCalculator } from "./StringCalculator";


const stringCalculator = new StringCalculator();

describe("StringCalculator.add", () => {
    it("For an empty string it will return 0", () => {

        const value = stringCalculator.add("");

        expect(value).toBe(0);

    });

    it("For just one number it will return the number", () => {

        const value = stringCalculator.add("1");

        expect(value).toBe(1);
    });

    it("For two numbers it will return the their sum", () => {
        const value = stringCalculator.add("1,2");

        expect(value).toBe(3);
    });

    it("For an undetermined amount of numbers return the sum between them", () => {
        const value = stringCalculator.add("1,2,3");

        expect(value).toBe(6);
    });
});