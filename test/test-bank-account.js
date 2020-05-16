const assert = require('assert');
const BankAccount = require('../app/BankAccount');

let mainaccount = new BankAccount(100, []);
describe('BankAccount', ()=>{
    describe('#current', () =>{
        it('Should return the balance', () =>{
            assert.equal(mainaccount.current(), 100);
        })
    })
    describe('#append', () =>{
        let amount = 100.0
        it("should append the amount to balance", () =>{
            assert.equal(mainaccount.append(amount), 200);
        })

    })
    describe('#substract', () =>{
        let amount = 100.0
        it("should substract the amount to balance", () =>{
            assert.equal(mainaccount.substract(amount), amount);
        })

    })
    describe('#merge', () =>{
    
        let balance2 = 100.0
        let history2 = [];
        let mergeaccount = new BankAccount(balance2, history2);
        it("merges two accounts", () =>{
            assert.equal(mainaccount.merge(mergeaccount), 200)
        })
    })

    describe('#history', () =>{
        
        it('Should return the history', () =>{
            assert.deepEqual(
            [
                {
                    action: "Current Balance"
                },
                {
                    action: "Append 100"
                },
                {
                    action: "Substract 100"
                },
                {
                    action: "merged "
                },
                {
                    action: "Append 100"
                },
            ],
            mainaccount.getHistory()
            );
        })
    })

})