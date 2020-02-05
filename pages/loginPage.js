import Page from './page';

class LoginPage extends Page {

    get title()           { return $('h2'); }
    get userFld()         { return $('#username'); }
    get passFld()         { return $('#password'); }
    get loginBtn()        { return $('button'); }
    get successMessage()  { return $('#flash'); }
    //this is a comment

    loginWith(username, pass) {
        this.userFld.setValue(username);
        this.passFld.setValue(pass);
    }
}


export default new LoginPage();