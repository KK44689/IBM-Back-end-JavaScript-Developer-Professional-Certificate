// Global scope
// var globalVar = "I am a global variable";
// let globalLet = "I am a global let variable";
// const globalConst = "I am a global const variable";

// {
//     // Block scope
//     var blockVar = "I am a block variable";
//     let blockLet = "I am a block let variable";
//     const blockConst = "I am a block const variable";
// }

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// // console.log(blockVar); // Accessible due to var being function-scoped
// // console.log(blockLet); // ReferenceError: blockLet is not defined
// // console.log(blockConst); // ReferenceError: blockConst is not defined

// function show() {
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const";
// }

// show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    let blockScopedLet = "I am a block-scoped let variable";
    const blockScopedConst = "I am a block-scoped const variable";
    var blockScopedVar = "I am a block-scoped var variable";

    // blockScopedLet = "Updated block-scoped let variable";
    // blockScopedVar = "Updated block-scoped var variable";
    // blockScopedConst = "Updated block-scoped const variable"; // This will throw an error
}

blockScopedLet = "Updated block-scoped let variable";
blockScopedVar = "Updated block-scoped var variable";
blockScopedConst = "Updated block-scoped const variable"; // This will throw an error

console.log(blockScopedVar); // "Updated block-scoped var variable"
console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined