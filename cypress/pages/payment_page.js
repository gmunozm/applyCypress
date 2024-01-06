export class PaymentPage{

    cardNameInput = '[data-qa="name-on-card"]'
    cardNumberInput = '[data-qa="card-number"]'
    cardCvcInput = '[data-qa="cvc"]'
    cardExpMonthInput = '[data-qa="expiry-month"]'
    cardExpYearInput = '[data-qa="expiry-year"]'
    cardPayButton = '[data-qa="pay-button"]'
    continueButton = '[data-qa="continue-button"]'
    orderPlacedTitle = '[data-qa="order-placed"]'

    payAndConfirmOrder(data){
        cy.get(this.cardNameInput).type(data.cardName)
        cy.get(this.cardNumberInput).type(data.cardNumber)
        cy.get(this.cardCvcInput).type(data.cvc)
        cy.get(this.cardExpMonthInput).type(data.expMonth)
        cy.get(this.cardExpYearInput).type(data.expYear)
        cy.get(this.cardPayButton).click()
    }

    continue(){
        cy.get(this.continueButton).click()
    }

    validatePaymentPage(){
        cy.get(this.cardPayButton).should('be.visible')
    }

    validateOrderPlaced(){
        cy.get(this.orderPlacedTitle).should('be.visible')
    }
}