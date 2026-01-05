import { Homepage } from "../../pages/homePage";
const Homepageobj=new Homepage()
import testData from "../../fixtures/testData.json";

describe('test automation', () =>{

before( ()=>{
cy.login(testData.login.username,testData.login.Password)
})

it('Add to cart Flow',()=>{
Homepageobj.searchProductName(testData.product.productName)
Homepageobj.addToCart()
Homepageobj.verifySuccessMessage().should('contain', ' Success: You have added ')
//Homepageobj.verifySuccessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName);
})
})