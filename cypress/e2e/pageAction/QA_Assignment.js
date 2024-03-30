/*****QA Assignment Task -- DIM CONNECT******/

//Selectors for Login Page
    const LBL_Verify = '//p[text()="Please sign in."]'
    const TXT_UserEmail = '//input[@name="email"]'
    const TXT_UserPass = '//input[@name="password"]'
    const BTN_SignIn = '//span[text()="SIGN IN"]'
    const LBL_Dashboard = '//b[text()="DASHBOARD"]'
    
    const BTN_BurgerMenu = '(//button[@type="button"])[1]'

//Selector for Map
    const LINK_Map = '//p[text()="Map"]'
    const Map = '//div[@id="mapPage"]'
    const BTN_Cancel = '//button[@class="mantine-UnstyledButton-root mantine-Burger-root mantine-nsaaq8"]'
    const BTN_ZoomOut = '(//div[@id="scale-down"])[1]'
    const TXT_Search = '//input[@placeholder="Select AGS"]'
    const BTN_MapMenu = '(//div[@aria-haspopup="menu"])[2]'
    const CHK_AddressPoint = '//div[text()=" Address Points"]'
    const BTN_MAPNav = '(//div[@aria-haspopup="menu"])[3]'
    const BTN_Streets = '//div[text()="Streets"]'

//Selectors for Legends
    const BTN_Legend = '//div[text()="Legend"]'
    const LBL_Background = '//span[text()="Background"]'
    const LBL_Addesspoint = '//span[text()="Address Points"]'
    const LBL_Netzplanung = '//span[text()="Netzplanung"]'
    const CHK_Background = '(//input[@type="checkbox"])[1]'
    const CHK_AdPoint = '(//input[@type="checkbox"])[2]'
    const CHK_ja = '(//input[@type="checkbox"])[3]'
    const CHK_Netzplanung = '(//input[@type="checkbox"])[8]'
    const CHK_Nvt = '(//input[@type="checkbox"])[9]'
    const CHK_kollSch = '(//input[@type="checkbox"])[11]'
    const CHK_Barrieren = '(//input[@type="checkbox"])[17]'
    const CHK_Road_Water = '(//input[@type="checkbox"])[18]'

    


class Assignment 

{
    /*******************************************************************
     * Command: Login
     * Description: This function will Login to the DIM Connect
     * @param {String} UserEmail
     * @param {String} UserPassword
    *******************************************************************/
    Login(UserEmail, UserPassword)
    {  
        cy.xpath(LBL_Verify).should('contain','Please sign in.')
        cy.wait(1000)
        cy.EnterText(TXT_UserEmail, UserEmail)
        cy.EnterText(TXT_UserPass, UserPassword)
        cy.xpath(BTN_SignIn).click({force:true})
        cy.wait(10000)                              //Website take too much time to redirect corresponding Page
        cy.xpath(LBL_Dashboard).should('contain', 'DASHBOARD')
    }

    /*******************************************************************
     * Command: Maps
     * Description: This function will navigate to the Map
     * @param {String} Search
     * @param {String} Point
     *******************************************************************/
    Maps(Search, Point)
    {
        cy.xpath(BTN_BurgerMenu).click()
        cy.xpath(LINK_Map).click()
        cy.Click(BTN_Cancel)
        cy.wait(3000)
        cy.xpath(BTN_ZoomOut).click()
        cy.wait(5000)
        cy.xpath(Map).trigger('wheel', { deltaY: -7 })
        cy.xpath(BTN_MapMenu).click()
        cy.wait(2000)
        cy.xpath(CHK_AddressPoint).click()
        cy.xpath(BTN_MapMenu).click()
        cy.Click(CHK_AddressPoint)
        cy.wait(3000)
        cy.xpath(BTN_MAPNav).click()
        cy.Click(BTN_Streets)
        cy.wait(5000)
        cy.xpath(Map)
            .trigger('mousedown', {which: 1, clientX: 120, clientY: 50})
            .trigger('mouseup', { force: true });
        cy.xpath(BTN_ZoomOut).click()

    }



    /*******************************************************************
     * Command: Legend
     * Description: This function will navigate to the Legend
     *******************************************************************/
    Legend()
    {
        cy.xpath(BTN_BurgerMenu).click()
        cy.xpath(LINK_Map).click()
        cy.Click(BTN_Cancel)
        cy.wait(3000)
        cy.xpath(BTN_ZoomOut).click()
        cy.wait(5000)
        cy.xpath('//div[@id="mapPage"]').trigger('wheel', { deltaY: -12 })
        cy.xpath(BTN_Legend).click()
        cy.xpath(LBL_Background).click()
        cy.xpath(CHK_Background).click()
        cy.wait(1000)
        cy.xpath(BTN_ZoomOut).click()
        cy.xpath(LBL_Addesspoint).click()
        cy.xpath(CHK_AdPoint).click()
        cy.xpath(CHK_ja).click()
        cy.wait(2000)
        cy.xpath(CHK_AdPoint).click()
        cy.xpath(LBL_Netzplanung).click()
        cy.xpath(CHK_Netzplanung).click()
        cy.wait(2000)
        cy.xpath(CHK_Nvt).click()
        cy.xpath(CHK_kollSch).click()
        cy.wait(2000)
        cy.xpath(CHK_Netzplanung).click()
        cy.xpath(CHK_Barrieren).click()
        cy.wait(2000)
        cy.xpath(CHK_Road_Water).click({force:true})
    }
}

export default new Assignment