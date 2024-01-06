export class CheckoutPage{

    messageInput = '[name="message"]'
    placeOrderButton = '[class="btn btn-default check_out"]'
    checkoutInformationDiv = '[data-qa="checkout-info"]'

    orderComment(message){
        cy.get(this.messageInput).type(message)

    }

    placeOrder(){
        cy.get(this.placeOrderButton).click()
    }

    validateCheckoutPage(){
        cy.get(this.checkoutInformationDiv).should('be.visible')
    }

    validateOrderMessage(message){
        cy.get(this.messageInput).should('have.value', message)
    }
}