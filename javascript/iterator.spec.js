class MyQueue {
    array = [];
    constructor(ary) {
        this.array.push(...ary);
    }
    [Symbol.iterator]() {
        const iter = {};
        iter.index = 0;
        iter.next = () => {
            const ret = {
                value: this.array[iter.index++],
                done: iter.index > this.array.length
            };
            return ret;
        }
        return iter;
    }
}

it("test", function () {
    const q = new MyQueue([1, 2, 3]);
    for (let x of q)
        console.log(x);
    const q2 = new MyQueue(['a', 'd', 'e', 'c']);
    for (let x of q2)
        console.log(x);
    const q3 = new MyQueue([]);
    for (let x of q3)
        console.log(x);
});
