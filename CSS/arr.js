let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function doubleValue(arr) {
    return arr.map(num => num * 2);
}

// console.log(doubleValue(arr));

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i, "let");
//     }, 2000)
// }
// for (var i = 0; i < 5; i++) {
//     // console.log(i, "before");
//     setTimeout(() => {
//         console.log(i, "var");
//     }, 2000)
// }





function function1(init, callback) {
    setTimeout(() => {
        let res = init + 1;
        callback(res);
    }, 2000);
}

function function2(value2, callback) {
    setTimeout(() => {
        let value = value2 + 2;
        callback(value);
    }, 3000);
}

function function3(value) {
    setTimeout(() => {
        return value + 3;
    }, 5000); // Increased delay
}

function1(0, (res) => {
    function2(res, (val) => {
        console.log(function3(val));
    });
});