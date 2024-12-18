var person = {
    firstName:"A",
    lastName: "B",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());
  var member = {
    firstName:"C",
    lastName: "D",
  }
   console.log(person.fullName.bind(member));