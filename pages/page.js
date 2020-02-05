class Page {
    
    get pageHeading() { return $('h1'); }

    open(path) {
        path = path || '';
        browser.url('/' + path);
    }

    getTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getUrl();
    }

    clickOnLink(text) {
        $(`a=${text}`).waitForExist();
        $(`a=${text}`).click();
    }

    clickButtonWithText(buttonName) {
        let buttonToClick = $(`button=${buttonName}`);
        buttonToClick.waitForDisplayed();
        buttonToClick.click();
    }

    getHeadingText() {
        this.pageHeading.waitForExist();
        return this.pageHeading.getText();
    }

    //get the affectedRows value for each object in an array
    getAffectedRowsFromArray(input) {
        let output = [];
        for (let i=0; i < input.length ; ++i)
            output.push(input[i]["affectedRows"]);
        return output;
    }
}

export default Page;