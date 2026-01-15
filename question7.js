// Analyze transaction data using chained array methods.

const transactions = [
    { id: 1, type: "income", amount: 5000, category: "salary", date: "2024-01-15" },
    { id: 2, type: "expense", amount: 200, category: "groceries", date: "2024-01-16" },
    { id: 3, type: "expense", amount: 1500, category: "rent", date: "2024-01-17" },
    { id: 4, type: "income", amount: 500, category: "freelance", date: "2024-01-18" },
    { id: 5, type: "expense", amount: 50, category: "transportation", date: "2024-01-19" },
    { id: 6, type: "expense", amount: 100, category: "groceries", date: "2024-01-20" },
    { id: 7, type: "income", amount: 1000, category: "bonus", date: "2024-01-21" }
];

/*
{
  totalIncome: 6500,
  totalExpenses: 1850,
  netBalance: 4650,
  highestExpense: { id: 3, type: "expense", amount: 1500, category: "rent", date: "2024-01-17" },
  expenseCategories: ["groceries", "rent", "transportation"],
  transactionsAbove500: [filtered array]
} */

//Solution

function analyzeTransactions(transactions) {
    const totalIncome = transactions.filter((t) => t.type === "income")
                                    .reduce((total, currentValue) => total + currentValue.amount, 0);
    
    const totalExpenses = transactions.filter((t) => t.type === "expense")
                                      .reduce((total, currentValue) => total + currentValue.amount, 0);

    const netBalance = totalIncome - totalExpenses;

    const highestExpense = transactions.filter((t) => t.type === "expense")
                                       .reduce((max, t) => t.amount > max.amount ? t : max)

    const expenseCategories = [...new Set(  //Set allows to store unique values, using (...) spread operator to store in array
        transactions.filter((t) => t.type === "expense")
                    .map((t) => t.category)
        )]                                      

    const transactionsAbove500 = transactions.filter((t) => t.amount >= 500)
    
    return {
        totalIncome,
        totalExpenses,
        netBalance,
        highestExpense,
        expenseCategories,
        transactionsAbove500
    }
}

const res = analyzeTransactions(transactions);
console.log(res)