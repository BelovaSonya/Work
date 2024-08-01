'use strist'

class Enemy {
    constructor(health){
        this.health = health;
    }

    recievDamage(damage){
        this.health = this.health - damage;
        console.log(this.health);
    }
}
class Sword{
    #damage;
    constructor(damage){
        this.#damage = damage;
    }
    strike(enemy){
        enemy.recievDamage(this.#damage);
    }
}

class Orc extends Enemy {
    constructor(health){
        super(health);
    }
    recievDamage(damage){
        if (Math.random() > 0.5){
            this.health = this.health - damage;
        }
        console.log(this.health);
    }
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy);

