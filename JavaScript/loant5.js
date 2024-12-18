function createLoan(loanAmount, interestRate, loanTerm) {
    let emisPaid = 0;

    const calculateMonthlyPayment = () => {
        let monthlyRate = interestRate / 100 / 12;
        let numerator = loanAmount * monthlyRate * Math.pow((1 + monthlyRate), loanTerm);
        let denominator = Math.pow((1 + monthlyRate), loanTerm) - 1;
        return numerator / denominator;
    };

    const checkLoanStatus = () => {
        let monthlyPayment = calculateMonthlyPayment();
        let totalPaid = monthlyPayment * emisPaid;
        let totalAmountDue = loanAmount * Math.pow((1 + interestRate / 100 / 12), emisPaid) - totalPaid;
        return {
            emisPaid: emisPaid,
            remainingAmount: totalAmountDue > 0 ? totalAmountDue : 0
        };
    };

    const payEmi = () => {
        let monthlyPayment = calculateMonthlyPayment();
        emisPaid++;
        return monthlyPayment;
    };

    return {
        calculateMonthlyPayment,
        checkLoanStatus,
        payEmi
    };
}


const myLoan = createLoan(900000, 10, 24); 
console.log("Monthly Payment (EMI):", myLoan.calculateMonthlyPayment().toFixed(2));

myLoan.payEmi(); 
console.log("Loan Status after 1 EMI payment:", myLoan.checkLoanStatus());

myLoan.payEmi(); 
console.log("Loan Status after 2 EMI payments:", myLoan.checkLoanStatus());
