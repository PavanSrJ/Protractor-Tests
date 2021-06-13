describe ('Login to the EClipse', function()  {

    it ('Login to the Eclipse ', function(){
        
        browser.get('https://castle.ezesoftcloud.com/ims/#/app/onboarding/onboard');

        element(by.model('vm.userName')).sendKeys('pjagathi');
        element(by.model('vm.password')).sendKeys('P@vanJ');
        element(by.model('vm.firmId')).sendKeys('T8FXX');
        //element(by.model('fw-login-btn-openid')).click();
        //element(by.css('[vm.loginInProgress()"]')).click()
        element(by.id('fw-login-btn')).click();
    

    });

});