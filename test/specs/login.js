const expect = require('chai').expect;

describe('Login Page 1', function () {
    beforeEach(function () {
        browser.url('the-internet.herokuapp.com/login');
    });

    it('should let you log in with valid credentials', function () {
        $('#username').setValue('tomsmith');
        $('#password').setValue('SuperSecretPassword!');
        $('button*=Login').click();
    })

    it('should throw error with missing credentials', function () {
        $('button*=Login').click();

        const errorMessage = $('#flash-messages .error').getText();
        expect(errorMessage).to.contain('Your username is invalid!');
    })

    it('should throw error with missing password', function () {
        $('#username').setValue('tomsmith');
        $('button*=Login').click();

        const errorMessage = $('#flash-messages .error').getText();
        expect(errorMessage).to.contain('Your password is invalid!')
    })

    it('should throw error with missing username', function () {
        $('#password').setValue('SuperSecretPassword!');
        $('button*=Login').click();

        const errorMessage = $('#flash-messages .error').getText();
        expect(errorMessage).to.contain('Your username is invalid!')
    })

    it('should throw error with incorrect password', function () {
        $('#username').setValue('tomsmith');
        $('#password').setValue('WrongPassword!');
        $('button*=Login').click();

        const errorMessage = $('#flash-messages .error').getText();
        expect(errorMessage).to.contain('Your password is invalid!')
    })
})