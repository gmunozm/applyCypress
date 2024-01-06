export class HomePage{

    productsUl = 'ul[class="nav nav-pills nav-justified"]'
    viewCartLink = '[href="/view_cart"]'
    contactUsLink = '[href="/contact_us"]'
    logoutButton = '[href="/logout"]'

    goToCenterPage(){
        cy.scrollTo('center')
    }

    choseFirstProduct(){
        cy.get(this.productsUl).first().should('be.visible').click()
    }

    viewCart(){
        cy.get(this.viewCartLink).first().click()  
    }

    contactUs(){
        cy.get(this.contactUsLink).click() 
    }

    validateHomePage(){
        cy.get(this.productsUl).should('be.visible')
    }

    logout(){
        cy.get(this.logoutButton).click() 
    }
}