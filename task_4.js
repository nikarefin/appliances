function Appliance(appliance, power) {
    this.appliance = appliance;
    this.power = power;
    this.isPlugedIn = false;
}

Appliance.prototype.plugIn = function() {
    console.log(`${this.appliance} включен в розетку`);
    return this.isPlugedIn = true;
}

Appliance.prototype.unplug = function() {
    console.log(`${this.appliance} выключен из розетки`);
    return this.isPlugedIn = false;
}

function Lamp(type) {
    this.type = type;
}
Lamp.prototype = new Appliance();
Lamp.prototype.appliance = 'Лампа'

function Tv(size, matrix) {
    this.size = size;
    this.matrix = matrix;
}
Tv.prototype = new Appliance();
Tv.prototype.appliance = 'Телевизор'
Tv.prototype.turnOffOnTimer = function(time) {
    console.log(`Телевизор выключится через ${time} минут`);
}

function Kettle(capacity, color) {
    this.capacity = capacity;
    this.color = color;
}
Kettle.prototype = new Appliance();
Kettle.prototype.appliance = 'Чайник'
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

let lamp = new Lamp('LED');
lamp.power = 60;
lamp.plugIn();

let tv = new Tv('55', 'OLED');
tv.power = 120;
tv.plugIn();

let kettle = new Kettle(1.5, 'White');
kettle.power = 100;
kettle.unplug();

let myAppliances = [lamp, tv, kettle];

showCommonPower(myAppliances);