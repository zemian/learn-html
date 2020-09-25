export enum Color {
    RED, BLUE, GREEN
}

export class ColorDemo {
    myColor :Color = Color.GREEN;

    test() {
        console.log(this.myColor);
    }

    getMyColor() {
        return this.myColor;
    }
}
