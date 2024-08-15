import { expect } from 'chai';
import { describe, it ,beforeEach } from 'mocha';

import StringCalculator from "../../src/utils/StringCalculator.js";


describe("String Calculator - Addition tests", ()=>{
    let calculator;
    beforeEach(()=>{
        calculator = new StringCalculator();
    })

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
})