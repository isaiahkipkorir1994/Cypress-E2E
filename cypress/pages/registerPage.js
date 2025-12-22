    //create a class and export to allow import from other classes
export class registerPage{
     //create an pbject
    weblocators={
//inside the object pass locators in key value pair
        fName:'#input-firstname',
        lName:'#input-lastname',
        Email:'#input-email',
        pNumber:'#input-telephone',
       Password:'#input-password',
        cPassowrd:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:' .btn.btn-primary'
    }
    //write our methods and pass locator name eg fName,lName and for type command pass a parameter
    openURL(){
        //pass the key ie URI
        cy.visit(Cypress.env('URI'))
    }
    enterFirstName(firstName)
    {
        cy.get(this.weblocators.fName).type(firstName)
    }

    enterLName(lName){

        cy.get(this.weblocators.lName).type(lName)
    }
    enterEmail(email){

        cy.get(this.weblocators.Email).type(email)
    }
    enterTelephone(Telephone){

        cy.get(this.weblocators.pNumber).type(Telephone)
    }
    enterPassword(Password){
        cy.get(this.weblocators.Password).type(Password)
        cy.get(this.weblocators.cPassowrd).type(Password)
    }
    selectCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickonContinue(){
        cy.get(this.weblocators.continue).click()
    }
}