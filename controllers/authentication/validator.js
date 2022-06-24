/*
    Валидация сделана на простом уровне, чтобы не закапываться
*/

class Validator {
    isCorrectPassword(password) {
        if (password.length < 6 || password.length > 18) 
            return { message: 'Password length is not correct (should be 6-18)', status: false };
        if (!/(?=.*\d)(?=.*[a-z])/i.test(password))
                return {message: 'The password must contain digits and numbers', status: false};

        return { message: 'Ok', status: true };
    }
    
    isCorrectLogin(login) {
        if (login.length < 3 || login.length > 18) 
            return { message: 'Login length is not correct (should be 6-18)', status: false };
        if (!/(?=.*[a-z])/i.test(login[0]))
                return {message: 'The first character of the login must be a letter', status: false};

                return { message: 'Ok', status: true };
    }
}

module.exports = new Validator();