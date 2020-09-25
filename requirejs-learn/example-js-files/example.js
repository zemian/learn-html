require(['mymodule'], (my) => {
    console.log("Debug module", my);
    console.log("Debug uniqueId=", my.uniqueId());
});
