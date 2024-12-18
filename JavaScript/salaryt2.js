function calculateSalary(monthlyPayScale, deductions) {
    const fixedSalary = 25000; 
    let totalSalary = fixedSalary - deductions;

    
    totalSalary = totalSalary < 0 ? 0 : totalSalary;

    console.log(`Monthly Salary: ${totalSalary}`);
}


calculateSalary(25000, 2000); 
