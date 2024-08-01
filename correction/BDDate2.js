'use strict';
/*проверить дату Дня Рождения, есть он или нет*/

const user = {
    name: 'Vasia',
    birthday: '07/03/2024'
};

const isBirthday = (user) => {
    const birthdayDate = new Date(user.birthday);
    const now = new Date();
    if ((birthdayDate.getMonth() !== now.getMonth()) || (birthdayDate.getDate() !== now.getDate())) {
        return false;
    }
    return true;
}

console.log(isBirthday(user));

