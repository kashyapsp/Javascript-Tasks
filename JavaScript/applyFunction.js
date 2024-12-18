var emp = {
    name: "emp1",
    address: "Hyd",
    getInfo: function(country,pincode,hno){
        return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno;
    }
}
//console.log(emp.getInfo);
var emp2 = {
    name:"emp2",
    address:"delhi"
}
var arr=["India",500081,"21-3/9"];
//console.log(emp.getInfo.call(emp2,arr[0],arr[1],arr[2]));
console.log(emp.getInfo.apply(emp2,arr));
