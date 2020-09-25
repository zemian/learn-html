define([], () => {
    return {
        uniqueId() {
            return Math.random().toString(16).substring(2);
        }
    }
});
