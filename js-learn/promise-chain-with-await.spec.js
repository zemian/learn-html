describe("promise-chain-with-await.spec", function () {
    this.timeout(10000);

    it("test-promise-chain", async function () {
        console.log("Be patient! This test will take few seconds!");

        // Both promise will start as concurrently!
        // Last of the then() chain will return result.
        const p1 = new Promise(resolve => {
            setTimeout(() => resolve(1), 3500);
        });
        const p2 = new Promise(resolve => {
            setTimeout(() => resolve(2), 2500);
        });
        const p3 = new Promise(resolve => {
            setTimeout(() => resolve(3), 1000);
        }).then(async () => {
            // Note the return keyword is a MUST!
            return await p1;
        }).then(async () => {
            // Note the return keyword is a MUST!
            return await p2;
        });

        const ret = await p3;
        console.log(ret);
    });

    it("test-await", async function () {
        console.log("Be patient! This test will take few seconds!");

        const p1 = new Promise(resolve => {
            setTimeout(() => resolve(1), 3000);
        });
        const p2 = new Promise(resolve => {
            setTimeout(() => resolve(2), 3000);
        });
        const f1 = async function () {
            const p1Ret = await p1;
            console.log("p1Ret " + p1Ret);

            const p2Ret = await p2;
            console.log("p2Ret " + p2Ret);
        }
        await f1();
    });

    it("test-await-return", async function () {
        console.log("Be patient! This test will take few seconds!");

        const p1 = new Promise(resolve => {
            setTimeout(() => resolve(1), 3000);
        });
        const p2 = new Promise(resolve => {
            setTimeout(() => resolve(2), 3000);
        });
        const f1 = async function () {
            // Await does not automatically return result!
            await p1;
        }
        const f2 = async function () {
            return await p2;
        }
        const f1Ret = await f1();
        console.log("f1Ret " + f1Ret);
        const f2Ret = await f2();
        console.log("f2Ret " + f2Ret);
    });

    it("test-await-non-promise-func", async function () {
        console.log("Be patient! This test will take few seconds!");

        const f1 = function () {
            return "Non promise function.";
        }
        const f2 = async function () {
            return "Non promise async function.";
        }
        const f3 = function () {
            const p1 = new Promise(resolve => {
                setTimeout(() => resolve("A promise function."), 3000);
            });
            return p1;
        }
        const f4 = async function () {
            const p1 = new Promise(resolve => {
                setTimeout(() => resolve("A promise async function."), 3000);
            });
            return p1;
        }
        const f1Ret = await f1();
        console.log("await f1Ret " + f1Ret);
        const f2Ret = await f2();
        console.log("await f2Ret " + f2Ret);

        console.log("f1Ret " + f1());
        console.log("f2Ret " + f2());

        const f3Ret = await f3();
        console.log("await f3Ret " + f3Ret);
        const f4Ret = await f4();
        console.log("await f4Ret " + f4Ret);

        console.log("f3Ret " + f3());
        console.log("f4Ret " + f4());
    });

    it("test-async-promise-handler", async function () {
        console.log("Be patient! This test will take few seconds!");

        const p1 = new Promise(resolve => {
            setTimeout(() => resolve(1), 3000);
        });
        // const p1Ret = await p1;
        // console.log("p1Ret " + p1Ret);

        const p2 = new Promise(async resolve => {
            await p1;
            resolve(2);
        });
        const p2Ret = await p2;
        console.log("p2Ret " + p2Ret);
    });
});
