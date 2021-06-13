describe(' Demo of Calculator', function(){

    it('Addition Test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys(4);
     
        element(by.model('second')).sendKeys(3);
       element(by.css('[ng-click="doAddition()"]')).click();
        

        browser.sleep(3000)

    });
});