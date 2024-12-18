function checkScholarshipEligibility(student) {
    const { name, GPA } = student;

    if (GPA >= 7.5) {
        console.log(`${name} is eligible for scholarship.`);
    } else {
        console.log(`${name} is not eligible for scholarship.`);
    }
}


const student1 = { name: "Ab", GPA: 9.0 };
const student2 = { name: "Cd", GPA: 7.0 };

checkScholarshipEligibility(student1); 
checkScholarshipEligibility(student2); 
