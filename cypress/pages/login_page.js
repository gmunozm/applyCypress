export class LoginPage{
    
    userEmailInput = '[data-qa="login-email"]'
    passwordInput = '[data-qa="login-password"]'
    loginButton = '[data-qa="login-button"]'
    signupNameInput = '[data-qa="signup-name"]'
    signupEmailInput = '[data-qa="signup-email"]'
    signupButton = '[data-qa="signup-button"]'

    navigate(url){
        cy.visit(url)
    }

    enterUserEmail(email){
        cy.get(this.userEmailInput).type(email)
    }

    enterUserPassword(password){
        cy.get(this.passwordInput).type(password)
    }

    singIn(){
        cy.get(this.loginButton).click()
    }

    registerUser(name, email){
        cy.get(this.signupNameInput).type(name)
        cy.get(this.signupEmailInput).type(email)
    }

    signup(){
        cy.get(this.signupButton).click()
    }

    validateUrl(){
        cy.title().should('eq', 'Automation Exercise')
    }

    validateLoginPage(){
        cy.get(this.loginButton).should('be.visible')
    }
}