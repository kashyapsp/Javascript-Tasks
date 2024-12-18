function createBankAccount(accountNumber, accountHolderName, initialBalance = 0) {
    let balance = initialBalance;

    const deposit = (amount) => {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    };

    const withdraw = (amount) => {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrawn: $${amount}. New Balance: $${balance}`);
        } else if (amount > balance) {
            console.log("Insufficient funds for this withdrawal.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    };

    const checkBalance = () => {
        console.log(`Current Balance: $${balance}`);
        return balance;
    };

    return {
        deposit,
        withdraw,
        checkBalance
    };
}


const myAccount = createBankAccount("0987654321", "Abc", 30000); 
myAccount.checkBalance(); 

myAccount.deposit(10000); 
myAccount.withdraw(2000); 
myAccount.checkBalance(); 

