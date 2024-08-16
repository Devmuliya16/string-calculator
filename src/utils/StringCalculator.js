class StringCalculator {
    delemeters = [',', '\n'];
    add(numbers) {
        if (!numbers)
            return 0;
        let numString = numbers;
        if (numbers.startsWith('//')) {
            const delemetersEndInd = numbers.indexOf('\n');
            const customDelimiter = numbers.substring(2, delemetersEndInd);
            this.delemeters.push(customDelimiter);
            numString = numbers.substring(delemetersEndInd + 1);
        }
        const nums = numString.split(new RegExp(`[${this.delemeters.join('')}]`)).map(Number);
        const negatives = nums.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }
        return nums.reduce((sum, num) => sum + num, 0);
    }

}

export default StringCalculator