export class ContactUsPage{
 
    nameInput = '[data-qa="name"]'
    emailInput = '[data-qa="email"]'
    subjectInput = '[data-qa="subject"]'
    messageInput = '[data-qa="message"]'
    submitButton = '[data-qa="submit-button"]'
    alertSuccessDiv = '[class="status alert alert-success"]'
    logoutButton = '[href="/logout"]'

    contactForm(name, email, subject, message){
        cy.get(this.nameInput).type(name)
        cy.get(this.emailInput).type(email)
        cy.get(this.subjectInput).type(subject)
        cy.get(this.messageInput).type(message)
        cy.get(this.submitButton).click()
    }

    validateContactUsPage(){
        cy.get(this.subjectInput).should('be.visible')
    }

    validateContactUsSubmitted(){
        cy.get(this.alertSuccessDiv).should('be.visible')
            .and('contain', 'Success! Your details have been submitted successfully.')
    }

    logout(){
        cy.get(this.logoutButton).click() 
    }
}