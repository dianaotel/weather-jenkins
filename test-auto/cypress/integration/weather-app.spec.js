import { city } from '../support/test-data'
import { cityInput, getWeatherButton, temperatureResult } from '../support/selectors';

describe('tests for the weather page', () => {
    beforeEach('visit page', () => {
        cy.visit('/')
    })

    it('gets temperature when hitting "Get Weather"', () => {
        cy.get(cityInput).type(city.london)
        cy.get(getWeatherButton).click()
        cy.get(temperatureResult).should('exist').and('contain', `degrees in ${city.london}`)
    })
})