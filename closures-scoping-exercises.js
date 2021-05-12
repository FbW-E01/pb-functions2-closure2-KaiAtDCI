
// (1)
// function test() {
//     console.log(a);
//     console.log(foo());
//
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// test();

// (2)
// function someFunction(number) {
//     function otherFunction(input) {
//         return a;
//     }
//
//     a = 5;
//
//     return otherFunction;
// }
//
// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log(firstResult);
// console.log(result);

// (3)
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());    // undefined, why isnt it returning [Function: getFullname] ???

// own test
const myObj = {
    props: {
        fun: function() { return 1; }
    }
}
console.log(myObj.props.fun); // returns [Function: fun]
