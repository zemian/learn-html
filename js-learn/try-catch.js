// Case 1
try {
    nonExistentFunction();
} catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}

// Case 2
try {
    console.log(1 / 0);
} catch (error) {
    console.error(error);
}

// Case 3
try {
    throw new Error("bad code");
} catch (error) {
    console.error(error);
} finally {
    console.log("Finally block here.");
}
