class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width; 
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`color is ${this.color}`);
    }
}

const rect = new Rectangle(2, 3, 'red');
console.log(rect)

const now = new Date();
console.log(now.toLocaleTimeString());

const map = new Map();
map.set("name", "Yash");
map.set("age", 21);

console.log(map);