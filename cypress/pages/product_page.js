export class ProductPage{

    quantityInput = '[id="quantity"]'
    addToCartButton = 'button[class="btn btn-default cart"]'
    viewCartLink = 'a:contains("View Cart")'
    productInformationDiv = '[class="product-information"]'

    setQuantity(quantity){
        cy.get(this.quantityInput).clear().type(quantity)
    }
    
    addToCart(){
        cy.get(this.addToCartButton).click()
    }
    
    viewCart(){
        cy.get(this.viewCartLink).click();
    }

    validateProductPage(){
        cy.get(this.productInformationDiv).should('be.visible')
    }

    validateProductQuantity(quantity){
        cy.get(this.quantityInput).should('have.value', quantity)
    }

    validateProductAddedToCart(){
        cy.get(this.productInformationDiv).should('be.visible')
    }
}