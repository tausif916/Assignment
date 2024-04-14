class BankAccount {
    constructor(accountNumber, ownerName, initialBalance = 0) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} deposited successfully. Current balance: ${this.balance}`);
      } else {
        console.log('Invalid deposit amount.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} withdrawn successfully. Current balance: ${this.balance}`);
      } else {
        console.log('Invalid withdrawal amount or insufficient balance.');
      }
    }
  
    getBalance() {
      console.log(`Current balance: ${this.balance}`);
      return this.balance;
    }
  }
  
  // Example usage:
  const myAccount = new BankAccount('123456789', 'John Doe', 1000);
  
  console.log(`Account holder: ${myAccount.ownerName}`);
  myAccount.getBalance(); // Current balance: 1000
  
  myAccount.deposit(500); // 500 deposited successfully. Current balance: 1500
  myAccount.withdraw(200); // 200 withdrawn successfully. Current balance: 1300
  
  myAccount.getBalance(); // Current balance: 1300
  