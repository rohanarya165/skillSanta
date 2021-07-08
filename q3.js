var Employee =
{
    company: 'Rohit'
}
var Emp1 = Object.create(Employee);
delete Emp1.company
console.log(Emp1.company);
// it will show referenceError becase at firts there was some typing mistake ...
// after correction the output will be Rohit