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
  
  // Example:
  const myAccount = new BankAccount('987654', 'Tausif Ismail', 2000);
  
  console.log(`Account holder: ${myAccount.ownerName}`);
  myAccount.getBalance(); 
  
  myAccount.deposit(500); 
  myAccount.withdraw(1000); 
  
  myAccount.getBalance(); 
  