var prop = 10;

function test(a, b) {
    console.log(this);
    console.log(this.prop);
    console.log(a, b);
};

test(10, 30); // window.test(10, 30); are the same thing
// it implicates calling test as window.test(10, 30)

var obj = {
    prop: 20
};

// here my requirement is when i call test method now i should get the prop value from the Object `obj` and not from the window

// call
test.call(obj, 10, 30);
// test(10, 30) is equivalent to test.call(window, 10, 30)

// if you have to run in the window context you can follow the following ways.
// test.call(window, 10, 30)
    // OR
// test(10, 30)

// apply
test.apply({ prop: 40 }, [10, 20]);

// what if we have something like this

var module = {
    name: 'abc',
    getName: function() {
        console.log(this.name);
    }
}

module.getName(); // what will be the output
module.getName.call({ name: 'def' }); // with some other context

var getName2 = module.getName.bind({ name: 'xyz' });
getName2();