//describe is test suite
import { registerPage } from "../../pages/registerPage"
//instantiate/initialize
const registerObj=new registerPage()
//now we can access all the methods in page class since we have instatiated page class
//const initializes

import registerData from '../../fixtures/registerData.json'

describe('test automation', ()=>{

    //it is test case
    it('register flow',()=>{
registerObj.openURL()
registerObj.enterFirstName(registerData.fName)
registerObj.enterLName(registerData.lName)
registerObj.enterEmail(registerData.email)
registerObj.enterTelephone(registerData.Telephone)
registerObj.enterPassword(registerData.Password)
registerObj.selectCheckbox()
registerObj.clickonContinue()
    })

})