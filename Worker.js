'use strist'

class Worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getFullName(name, surname){
        console.log(name, surname)
    }
    getSalary(rate, days){
        console.log(rate*days)
    }
}

class Boss{
    constructor(name, surname, rate, days, workers){
        super(name);
        super(surname);
        super(rate);
        super(days);
        this.workers = workers;
    }
    getFullName(name, surname){
        console.log(name, surname)
    }
    getSalary(rate, days){
        console.log(rate*days)
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);
const boss = new Boss('Иван', 'Иванов', 10, 31, 10);

console.log(boss.workers);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName('Иван', 'Иванов')); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary(10, 31)); //выведет 310 - то есть 10*31