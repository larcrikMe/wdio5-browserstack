import Page from './page';

class InputsPage extends Page {
    
    get title()        { return $('h3'); }
    get inputField()   { return $('input'); }
}

export default new InputsPage();