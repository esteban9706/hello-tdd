class BankAccount{
    constructor(balance, history){
        
        this.balance = balance;
        this.history = history;
    }
    current() {
        this.history.push({action: "Current Balance"});
        return this.balance;
    }
    append(amount){
        this.balance += amount;
        this.history.push({action: "Append "+ amount});
        return this.balance;
    }
    substract(amount){
        this.balance -= amount;
        this.history.push({action:"Substract " + amount});
        return this.balance;
    }
    merge(account){
        this.history.push({action:"merged "})
        if(account.balance >= 0){
            this.append(this.balance)
        }else{
            this.substract(balance)
        }
        return ("New Balance:",  this.balance)

    }
    getHistory(){
        return this.history;
    }
}

    

module.exports = BankAccount;