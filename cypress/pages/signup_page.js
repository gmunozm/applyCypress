export class SignupPage{
    
    mrGenderCheckbox = '[id="uniform-id_gender1"]'
    mrsGenderCheckbox = '[id="uniform-id_gender2"]'
    passwordAccountInpt = '[data-qa="password"]'
    daySelect = '[data-qa="days"]'
    monthSelect = '[data-qa="months"]'
    yearSelect = '[data-qa="years"]'
    firstNameInput = '[data-qa="first_name"]'
    lastNameInput = '[data-qa="last_name"]'
    addressInput = '[data-qa="address"]'
    countrySelect = '[data-qa="country"]'
    stateInput = '[data-qa="state"]'
    cityInput = '[data-qa="city"]'
    zipcodeInput = '[data-qa="zipcode"]'
    mobileNumberInput = '[data-qa="mobile_number"]'
    createAccounButton = '[data-qa="create-account"]'

    createAccount(data){
        if(data.gender == "Mr"){
            cy.get(this.mrGenderCheckbox).click()
        } else if (data.gender == "Mrs"){
            cy.get(this.mrsGenderCheckbox).click()
        }
        cy.get(this.passwordAccountInpt).type(data.password)
        cy.get(this.daySelect).select(data.day)
        cy.get(this.monthSelect).select(data.month)
        cy.get(this.yearSelect).select(data.year)
        cy.get(this.firstNameInput).type(data.firstName)
        cy.get(this.lastNameInput).type(data.lastName)
        cy.get(this.addressInput).type(data.address)
        cy.get(this.countrySelect).select(data.country)
        cy.get(this.stateInput).type(data.state)
        cy.get(this.cityInput).type(data.city)
        cy.get(this.zipcodeInput).type(data.zipcode)
        cy.get(this.mobileNumberInput).type(data.mobileNumber)
        cy.get(this.createAccounButton).click()
    }

    validateSignupPage(){
        cy.get(this.mrGenderCheckbox).should('be.visible')
    }
}