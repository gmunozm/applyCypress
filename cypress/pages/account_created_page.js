export class AccountCreatedPage{

    accountCreatedTitle = '[data-qa="account-created"]'
    continueButton = '[data-qa="continue-button"]'
    
    validateAccountCreated(){
        cy.get(this.accountCreatedTitle).should('be.visible')
    }

    continue(){
        cy.get(this.continueButton).click()
    }
    
}