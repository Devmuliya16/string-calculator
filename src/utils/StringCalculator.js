class StringCalculator {
    delemeters = [',','\n'];
    add(numbers){
        if(!numbers)
            return 0;
        const nums = numbers.split(new RegExp(`[${this.delemeters.join('')}]`)).map(Number);
        return nums.reduce((sum,num)=>sum+num,0);
    }
    
}

export default StringCalculator