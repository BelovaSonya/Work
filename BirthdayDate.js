'use strict';
/*проверить дату Дня Рождения, есть он или нет*/

const user1 = {
    name: 'Vasia',
    birthday: '07/09/2024'
};

function isBirthday(user){
    const birthdayDate = new Date(user.birthday);
    const now = new Date();
    if (birthdayDate.getMonth() !== now.getMonth()) {
        return false;
    }
    if (birthdayDate.getDate() !== now.getDate()){
        return false;
    }
    return true;
}

console.log(isBirthday(user1));