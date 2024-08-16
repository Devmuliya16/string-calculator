class StringCalculator {
    constructor() {
        // Initialize default delimiters: comma and newline
        this.delimiters = [',', '\n'];
    }

    /**
     * Adds numbers provided in a string using the specified delimiters.
     * @param {string} numbers - A string containing numbers separated by delimiters.
     * @returns {number} - The sum of the numbers.
     * @throws {Error} - Throws an error if there are negative numbers or invalid delimiters.
     */
    add(numbers) {
        // If the input string is empty, return 0
        if (!numbers)
            return 0;

        let numString = numbers;

        // Check if the input string starts with a custom delimiter definition
        if (numbers.startsWith('//')) {
            // Find the end index of the delimiter definition section and extract it
            const delimitersEndInd = numbers.indexOf('\n');
            const customDelimiter = numbers.substring(2, delimitersEndInd);

            // Validate that the custom delimiter does not contain a negative sign
            if (customDelimiter.includes('-')) {
                throw new Error(`Invalid delimiter: '${customDelimiter}' cannot include '-'`);
            }

            // Add the custom delimiter to the list of delimiters
            this.delimiters.push(customDelimiter);

            // Remove the delimiter definition section from the string
            numString = numbers.substring(delimitersEndInd + 1);
        }

        // Split the string using the defined delimiters and convert to numbers
        const nums = numString.split(new RegExp(`[${this.delimiters.join('')}]`)).map(Number);

        // Filter out non-numeric values keep valid numbers
        const validNums = nums.filter(num => !isNaN(num));

        // Identify negative numbers in the list
        const negatives = nums.filter(num => num < 0);

        // If any negative numbers are found, throw an error with details
        if (negatives.length) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        // Return the sum of the valid numbers
        return validNums.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;
