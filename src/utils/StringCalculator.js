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
        if (!numbers) return 0;

        let numString = numbers;

        // Check if the input string starts with a custom delimiter definition
        if (this.hasCustomDelimitor(numString)) {
            //extract and add delimiter to delimiters array
            numString = this.extractCustomDelimitor(numString);
            if(numString==='') return 0;
        }

        // Split the string using the defined delimiters and convert to numbers
        const nums = this.splitAndConvertToNumbers(numString);
        this.validateNoNegatives(nums);

        // Return the sum of the valid numbers
        return this.calculateSum(nums);
    }
    

    hasCustomDelimitor(numString){
        return numString.startsWith('//');
    }

    extractCustomDelimitor(numString){
        const delimitersEndInd = numString.indexOf('\n');

        if(delimitersEndInd===-1) return '';

        const customDelimiter = numString.substring(2, delimitersEndInd);

        if (customDelimiter.includes('-')) {
            throw new Error(`Invalid delimiter: '${customDelimiter}' cannot include '-'`);
        }

        this.delimiters.push(customDelimiter);

        return numString.substring(delimitersEndInd + 1);

    }

    splitAndConvertToNumbers(numString) {
        return numString.split(new RegExp(`[${this.delimiters.join('')}]`)).map(Number);
    }

    validateNoNegatives(nums) {
        const negatives = nums.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }
    }

    calculateSum(nums){
        return nums.filter((num=>!isNaN(num))).reduce((sum,num)=>sum+num,0);
    }
}

export default StringCalculator;
