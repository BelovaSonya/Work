'use strict';
/*проверить дату Дня Рождения, есть он или нет*/

const user1 = {
    name: 'Vasia',
    birthday: '07/03/2024'
};

let isBirthday = (user) => {
    const birthdayDate = new Date(user.birthday);
    const now = new Date();
    if ((birthdayDate.getMonth() !== now.getMonth()) || (birthdayDate.getDate() !== now.getDate())) {
        return false;
    }
    return true;
}

console.log(isBirthday(user1));