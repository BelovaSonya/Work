'use strist'

class User {
    #login;
    #_password;

    constructor(login, password){
        this.#login = login;
        this.#password = password;
    }
    set #password(pass){
        this.#_password = pass.split('').reverse().join('');
    }

    get #password(){
        return this.#_password.split('').reverse().join('');
    }

    get login(){
        return this.#login;
    }

    checkPassword(pass){
        return this.#password === pass;
    }

    changePassword(oldPass, newPass){
        const isOldPassword = this.checkPassword(oldPass);
        if (!isOldPassword) {
            this.#password = newPass;
        }
        
        return isOldPassword;
    }
}

const user = new User('a@a.ru','123');
console.log(user);
console.log(user.login);
console.log(user.checkPassword('223'));
console.log(user.checkPassword('123'));
console.log(user.changePassword('123','223'));
console.log(user);
