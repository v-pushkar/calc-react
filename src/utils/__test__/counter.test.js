// import {counter} from "./../counter.js"

const counter = require("./../counter")
const types =["number", "operator"]
const btns = [0,1,2,3,4,5,6,7,8,9, ".","C"]
const btns_oper = ["*","/","+","-","="]
const prevValuesMinus=  ["125", "-","17"]
const prevValues=  ["125", "+","17"]
const toEqual=  ["125", "+","17","*"]
const toSqrt=  ["25", "/"]


describe("Counter tests operators",()=>{
    const expected = []
    it("counter clianer operator must return []",()=>{
        expect(counter("number", "number", "C",prevValues)).toStrictEqual([])  
    })
    it("count 125 + 17. Must return 142",()=>{
        expect(counter("number", "number", "=",prevValues)).toStrictEqual([142])  
    })
    it("count 125 - 17. Must return 108",()=>{
        expect(counter("number", "number", "=",prevValuesMinus)).toStrictEqual([108])  
    })
    it("count to square 125 + 17. Must return 20164",()=>{
        expect(counter("operator", "operator", "=",toEqual)).toStrictEqual([20164])  
    })
    it("count to square 25. Must return 5",()=>{
        expect(counter("operator", "operator", "=",toSqrt)).toStrictEqual([5])  
    })
    it("if '+' inputed" ,()=>{
        const expected = ["125", "+","17", "+"]
        expect(counter("operator", "number", "+",prevValues)).toStrictEqual(expected)  
    })
    it("if '-' inputed" ,()=>{
        const expected = ["125", "+","17", "-"]
        expect(counter("operator", "number", "-",prevValues)).toStrictEqual(expected)  
    })
    it("if operator after operator inputed, '-' after '+':" ,()=>{
        const expected = ["125", "+","17", "-"]
        expect(counter("operator", "operator", "-",[...prevValues,"+"])).toStrictEqual(expected)  
    })
})


describe("counter test input numbers:",()=>{
    it("input numbers '125' on start - expected: [125]",()=>{
        const expected = ["125"]
        expect(counter("number", null, "125", [])).toStrictEqual(expected)
    })
    it("input numbers '32' after '14' on start - expected: [125]",()=>{
        const expected = ["1432"]
        expect(counter("number", "number", "32", ["14"])).toStrictEqual(expected)
    })
    it("input numbers '32' after '14' and operatot '+' on start - expected: [125]",()=>{
        const expected = ["14","+","32"]
        expect(counter("number", "operator", "32", ["14","+"])).toStrictEqual(expected)
    })
})
