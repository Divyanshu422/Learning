
import Sum from "../Sum";

test('Sum function calculates the sum of 2 numbers', () => {

        //* calling the function
        const result = Sum(2, 3);

        //* asserting the result
        expect(result).toBe(5); // if the sum is 5, the test will pass, otherwise it will fail

    }
)