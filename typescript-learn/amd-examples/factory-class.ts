class Util {
    // Poor man impl of UUID generator
    //   https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

// A singleton app manager
class AppManager {
    static INSTANCE: AppManager;
    id: string = Util.uuidv4();
    private constructor() {
    }
    static getInstance() {
        if (AppManager.INSTANCE == null) {
            AppManager.INSTANCE = new AppManager();
        }
        return AppManager.INSTANCE;
    }
    toString() {
        return `AppManager@${this.id}`;
    }
}

// Test code
// console.log(new AppManager()); // can not compile

// Same instance of singleton.
console.log(AppManager.getInstance());
console.log(AppManager.getInstance());
console.log(AppManager.getInstance());
