function BankAccount(accountNumber, name, type, balance){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
        console.log("Deposite successfully - ",amount);
    }
    this.withdraw = function(amount){
        if (amount <= this.balance){
            this.balance -= amount;
            console.log("Withdraw successfully - ",amount);
        }      
        else{
            console.log("Insufficient balance - ",this.balance);
        }
    }
    this.checkBalance = function(){
        console.log("Your current balance is - ",this.balance);
    }
    this.isActive = function(active){
        if (active == true){
            console.log("Your account is active");
        }
        else{
            console.log("Your account is inactive.")
        }
    }
}

let ac1 = new BankAccount(200814,"Vatsal","saving",1900);
let ac2 = new BankAccount(200434,"Virat","saving",1900359);
let ac3 = new BankAccount(200432,"Rohit","saving",1904230);
let ac4 = new BankAccount(200965,"Dhoni","saving",1900432);
let ac5 = new BankAccount(200508,"Bumrah","saving",190540);

ac1.deposit(1000);
ac1.withdraw(300);
ac1.checkBalance();
ac1.isActive(true);

ac2.deposit(10780);
ac2.withdraw(30045);
ac2.checkBalance();
ac2.isActive(true);

ac3.deposit(10020);
ac3.withdraw(3100);
ac3.checkBalance();
ac3.isActive(true);

ac4.deposit(100035);
ac4.withdraw(30420);
ac4.checkBalance();
ac4.isActive(true);

ac5.deposit(10030);
ac5.withdraw(3500);
ac5.checkBalance();
ac5.isActive(true);

let arr = [ac1,ac2,ac3,ac4,ac5];

function getTotalbalance(arr){
    let total = 0;
    for(let i=0;i < arr.length ;i++){
       
            total+=arr[i].balance;
        
        
    }
    console.log(total);
}
getTotalbalance(arr);
console.log(arr)