const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
const allInOne = { ...name, ...details };
//allInOne is the union of name and details object
console.log(allInOne);