const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('VectorCalc', () =>{
    describe('#sum', () => {
        let v1 = { x: 4, y: 3};
        let v2 = { x: 1, y: 3};

        it('Should sum the vectors', ()=>{
            assert.deepEqual({x:5, y:6}, VectorCalculator.sum(v1, v2));
        })
    })
    describe('#sub', () =>{
        let v1 = { x: 4, y: 3};
        let v2 = { x: 1, y: 3};

        it('Should substract the vectors', () => {
            assert.deepEqual({x:3, y:0}, VectorCalculator.sub(v1, v2));
        })
    })

    describe('#escalar', () =>{
        let v1 = { x: 4, y: 3};
        let v2 = { x: 1, y: 1};

        it('Should escale the vectors', () => {
            assert.deepEqual({x:4, y:3}, VectorCalculator.escalar(v1, v2));
        })
    })
    describe('#dot', () =>{
        let v1 = { x: 4, y: 3};
        let v2 = { x: 1, y: 3};

        it('Should dot product the vectors', () => {
            assert.deepEqual({x:16, y:0}, VectorCalculator.dot(v1, v2));
        })
    })
    
    
})