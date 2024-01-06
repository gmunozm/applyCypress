export class CartPage{

    checkoutButton = '[class="btn btn-default check_out"]'
    cartTable = '[id="cart_info_table"]'

    registerLogin(){
        cy.get('u').contains("Register / Login").click()
    }

    checkout(){
        cy.get(this.checkoutButton).click()
    }

    validateCartPage(){
        cy.get(this.cartTable).should('be.visible')
    }

    validateRegisterLoginWindow(){
        cy.get('u').contains("Register / Login").should('be.visible')
    }

}