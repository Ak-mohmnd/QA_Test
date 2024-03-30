/// <reference types="cypress" />

import Assignment from '../pageAction/QA_Assignment'
import Data from '../../fixtures/TestData'


    const {UserEmail, UserPassword, Search, Point} = Data

beforeEach(() => 
{
    cy.visit('https://dim-webgis-dev.hiwifipro.com/')
    cy.wait(5000)

})



describe('QA Test Assignment', () => 
{
    it('[TC01] After clicking on the SignIn button, It Should be Successfully login',()=>
    {
        Assignment.Login(UserEmail, UserPassword)
    })

    it('[TC02] After clicking on the Map Link, The global Map should be displayed',()=>
    {
        Assignment.Login(UserEmail, UserPassword)
        Assignment.Maps(Search, Point)
    })

    it('[TC03] After clicking on the Legend Button, The detailed Legend form should be displayed',()=>
    {
        Assignment.Login(UserEmail, UserPassword)
        Assignment.Legend()
    })

})