/*
    Вынес в отдельный класс с расчетом на то, что будет усложнение/изменение метода хэширования
*/

const passwordHash = require('password-hash');

class Hashing {
    hash(password) {
        return passwordHash.generate(password);
    }

    compare(password, hashPassword) {
        return passwordHash.verify(password, hashPassword);
    }
}

module.exports = new Hashing();