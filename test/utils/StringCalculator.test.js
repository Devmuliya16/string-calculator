import { expect } from 'chai';
import { describe, it ,beforeEach } from 'mocha';

import StringCalculator from "../../src/utils/StringCalculator.js";


describe("String Calculator test suit", ()=>{
    let calculator;
    beforeEach(()=>{
        calculator = new StringCalculator();
    })

    describe('Simple addition tests ', () => { 
        it("Should return 0 for an empty string", ()=>{
            expect(calculator.add("")).to.equal(0)
        });
    
        it('should return the number itself for a single number', () => {
            expect(calculator.add('1')).to.equal(1);
            expect(calculator.add('5')).to.equal(5);
        });
    
        it('should return the sum of two numbers', () => {
            expect(calculator.add('1,2')).to.equal(3);
            expect(calculator.add('3,5')).to.equal(8);
        });
    
        it('should return the sum of multiple numbers', () => {
            expect(calculator.add('1,2,3')).to.equal(6);
            expect(calculator.add('4,5,6,7')).to.equal(22);
        });

        it('should return the sum of multiple numbers with multiple consicutive delimiters', () => {
            expect(calculator.add('1,2,,3,\n,')).to.equal(6);
            expect(calculator.add('1,5,,,,3,,')).to.equal(9);
            expect(calculator.add('4,\n5,\n6,7,')).to.equal(22);
        });
    });

    describe('Custom delimitors test', () => { 
        it('should handle new lines between numbers', () => {
            expect(calculator.add('1\n2,3')).to.equal(6);
            expect(calculator.add('4\n5\n6')).to.equal(15);
        });
    
        it('should handle custom delimiters', () => {
            expect(calculator.add('//;\n1;2')).to.equal(3);
            expect(calculator.add('//|\n2|3|4')).to.equal(9);
        });

        it('should handle same trailing of custom delimiters', () => {
            expect(calculator.add('//;\n1;;;2')).to.equal(3);
            expect(calculator.add('//|\n2|3|||4')).to.equal(9);
        }); 

        it(`should work with custom delimitor and default delimitors ',' and '\\n'`, () => {
            expect(calculator.add('//;\n1;;;2')).to.equal(3);
            expect(calculator.add('//|\n2|3|,\n5,|4')).to.equal(14);
        });          
    })

    describe('Negative numbers tests', () => { 
        it('should throw an error for a single negative number', () => {
            expect(() => calculator.add('-1')).to.throw('Negative numbers not allowed: -1');
            expect(() => calculator.add('-4')).to.throw('Negative numbers not allowed: -4');
        });

        it('should throw an error for multiple negative numbers', () => {
            expect(() => calculator.add('1,-2,3')).to.throw('Negative numbers not allowed: -2');
            expect(() => calculator.add('1,-2,-3')).to.throw('Negative numbers not allowed: -2, -3');
        });

        it('should throw an error for negative numbers with custom delimiters', () => {
            expect(() => calculator.add('//;\n1;-2;-3')).to.throw('Negative numbers not allowed: -2, -3');
            expect(() => calculator.add('//$\n-1$-2$-3')).to.throw('Negative numbers not allowed: -1, -2, -3');
        });
    });

    describe("Some exceptional cases", ()=>{
        it('should handle string having no numbers at all' ,()=>{
            expect(calculator.add('//;\na\nb\nc,d')).to.equal(0);
        });
        
        it('should throw an error for negative sign as a delimiter', () => {
            expect(() => calculator.add('//-\n1-2')).to.throw("Invalid delimiter: '-' cannot include '-'");
            expect(() => calculator.add('//-\n1,2,3,-4')).to.throw("Invalid delimiter: '-' cannot include '-'");
        });

        it('should return 0 when no new line is there after delimiter', ()=>{
            expect(calculator.add("//-")).to.equal(0);
            expect(calculator.add("//$1")).to.equal(0);
            expect(calculator.add("//,134")).to.equal(0);
        })
    })
});