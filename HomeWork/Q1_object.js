/* 
Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/

const personalAccount = {
    firstName: 'shivanand',
    lastName: 'prajapati',
    incomes: {'salary' :100000 , 'youTube': 50000, 'freeLancing': 40000}, 
    expenses: {'fromSalary': 50000, 'fromYouTube': 30000, 'fromFreeLancing': 20000},
    totalIncome: function(){
        let totalIncomes = this.incomes.salary + this.incomes.youTube + this.incomes.freeLancing;
        return totalIncomes;
    },
    totalExpense: function(){
        let totalExpenses = this.expenses.fromSalary + this.expenses.fromYouTube + this.expenses.fromFreeLancing;
        return totalExpenses;
    },
    accountInfo: function(){

    },
    addIncome: function(){
        this.incomes.others = 15000;
        return this.incomes

    },
    addExpense: function(){
        this.expenses.othersExpenses = 3000;
        return this.expenses
    },
    accountBalance: function(){
        let finalAccountBalance = this.incomes.salary + this.incomes.youTube + this.incomes.freeLancing + this.expenses.fromSalary + this.expenses.fromYouTube + this.expenses.fromFreeLancing;
        return finalAccountBalance;
    }
}
let tIncome = personalAccount.totalIncome();
console.log(`Total income:`, tIncome);
let tExpense = personalAccount.totalExpense();
console.log(`Total income:`, tExpense);
console.log(personalAccount.addIncome());
console.log(personalAccount.addExpense());
console.log(personalAccount.accountBalance());