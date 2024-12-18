function createLoan(loanAmount, interestRate, loanTerm, applicant) {
    return {
        loanAmount,
        interestRate,
        loanTerm,
        applicant,
        isApproved: false,
        calculateMonthlyPayment() {
            const monthlyRate = this.interestRate / 100 / 12;
            const numerator = this.loanAmount * monthlyRate * Math.pow((1 + monthlyRate), this.loanTerm);
            const denominator = Math.pow((1 + monthlyRate), this.loanTerm) - 1;
            return numerator / denominator;
        }
    };
}

function createLoanManager() {
    const loans = [];

    return {
        applyForLoan(loanAmount, interestRate, loanTerm, applicant) {
            const newLoan = createLoan(loanAmount, interestRate, loanTerm, applicant);
            loans.push(newLoan);
            console.log(`Loan application submitted for ${applicant.name}.`);
        },
        approveLoan(loan) {
            const { monthlyIncome, accountBalance } = loan.applicant;
            if (monthlyIncome >= 30000 && accountBalance >= 5000) {
                loan.isApproved = true;
                console.log(`Loan for ${loan.applicant.name} approved.`);
            } else {
                console.log(`Loan for ${loan.applicant.name} rejected due to eligibility criteria.`);
            }
        },
        rejectLoan(loan) {
            loan.isApproved = false;
            console.log(`Loan for ${loan.applicant.name} rejected.`);
        },
        processLoans() {
            loans.forEach(loan => {
                if (!loan.isApproved) {
                    this.approveLoan(loan);
                }
            });
        }
    };
}


const loanManager = createLoanManager();
const applicant1 = { name: "Ab", monthlyIncome: 32000, accountBalance: 6000 };
const applicant2 = { name: "cd", monthlyIncome: 28000, accountBalance: 7000 };

loanManager.applyForLoan(70000, 10, 24, applicant1);
loanManager.applyForLoan(40000, 10, 12, applicant2);
loanManager.processLoans();
