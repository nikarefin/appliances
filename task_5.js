class Appliance {
    constructor(appliance, power) {
        this.appliance = appliance;
        this.power = power;
        this.isPlugedIn = false;
    }
    plugIn() {
        console.log(`${this.appliance} включен в розетку`)
        return this.isPlugedIn = true
    }
    unplug() {
        console.log(`${this.appliance} выключен из розетки`)
        return this.isPlugedIn = false
    }
}

class Lamp extends Appliance {
    constructor(type) {
        super();
        this.type = type;
    }
    appliance = 'Лампа';
}

class Tv extends Appliance {
    constructor(size, matrix) {
        super();
        this.size = size;
        this.matrix = matrix;
    }
    turnOffOnTimer(time) {
        console.log(`Телевизор выключится через ${time} минут`)
    }
    appliance = 'Телевизор';
}

class Kettle extends Appliance {
    constructor(capacity, color) {
        super();
        this.capacity = capacity;
        this.color = color;
    }
    appliance = 'Чайник';
}

function showCommonPower(appliances) {
    let commonPower = 0;
    for (let item in appliances) {
        if (appliances[item].isPlugedIn) {
            commonPower += appliances[item].power
        }
    }
    console.log('_________________________________')
    console.log(`Общая потребляемая мощность: ${commonPower} Вт`)
}

let lamp = new Lamp();
lamp.power = 60;
lamp.type = 'LED';
lamp.plugIn();

let tv = new Tv();
tv.power = 120;
tv.size = '55';
tv.matrix = 'OLED';
tv.plugIn();

let kettle = new Kettle();
kettle.power = 100;
kettle.capacity = 1.5;
kettle.color = 'White';
kettle.unplug()

let myAppliances = [lamp, tv, kettle];

showCommonPower(myAppliances)
