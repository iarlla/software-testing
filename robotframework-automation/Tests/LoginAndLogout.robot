*** Settings ***
Library    SeleniumLibrary
Resource   ../Resources/CommonKeywords.robot
Test Setup     Open Browser To Login Page
Test Teardown  Close Browser

*** Test Cases ***
Valid Login Should Redirect To Products Page
    [Tags]    Login    HappyPath
    [Documentation]    Given a user is on the login page
    ...                When the user enters valid credentials and clicks login
    ...                Then the user should be redirected to the products page and can logout
    Login With Credentials    ${VALID_USERNAME}    ${VALID_PASSWORD}
    Verify Products Page Is Loaded
    Click Burger Menu
    Click Logout Button
    Verify Login Page Is Loaded

Invalid Login Should Show Error Message
    [Tags]    Login    Negative
    [Documentation]    Given a user is on the login page
    ...                When the user enters invalid credentials and clicks login
    ...                Then an error message should be displayed
    Login With Credentials    ${INVALID_USERNAME}    ${INVALID_PASSWORD}
    Verify Error Message    Epic sadface: Username and password do not match any user in this service

Locked Out User Should Show Specific Error Message
    [Tags]    Login    Negative
    [Documentation]    Given a user is on the login page
    ...                When the locked out user enters valid password and clicks login
    ...                Then a locked out error message should be displayed
    Login With Credentials    ${LOCKED_OUT_USERNAME}    ${VALID_PASSWORD}
    Verify Error Message    Epic sadface: Sorry, this user has been locked out.
