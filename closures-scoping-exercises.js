
// (1)
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}
test();

// (2)
function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(firstResult);
console.log(result);

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

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;
console.log(test());                // undefined, because this does not exist in the according scope

let test2 = test.bind(obj);
console.log(test2());               // Colin Ihrig, this referring 'obj'

let test3 = test.bind(obj.prop);
console.log(test3());               // Aurelia De Rosa, this referring 'obj.prop'


// (4)
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
