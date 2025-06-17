*** Settings ***
Library    SeleniumLibrary
Resource   ../Resources/CommonKeywords.robot
Test Setup     Open Browser To Login Page And Login As Standard User
Test Teardown  Close Browser

*** Keywords ***
Open Browser To Login Page And Login As Standard User
    Open Browser To Login Page
    Login With Credentials    ${VALID_USERNAME}    ${VALID_PASSWORD}
    Verify Products Page Is Loaded

*** Test Cases ***
Should Add Single Product To Cart
    [Tags]    Cart    Add
    [Documentation]    Given a standard user is on the products page
    ...                When the user adds a single product to the cart
    ...                Then the cart badge should show 1 item
    Add Product To Cart    Sauce Labs Backpack
    Verify Cart Badge Count    1

Should Add Multiple Products To Cart
    [Tags]    Cart    Add
    [Documentation]    Given a standard user is on the products page
    ...                When the user adds multiple products to the cart
    ...                Then the cart badge should show the correct count
    Add Product To Cart    Sauce Labs Backpack
    Add Product To Cart    Sauce Labs Bike Light
    Add Product To Cart    Sauce Labs Bolt T-Shirt
    Verify Cart Badge Count    3

Should Remove Product From Cart From Products Page
    [Tags]    Cart    Remove
    [Documentation]    Given a standard user is on the products page with one product added to cart
    ...                When the user removes that product from the products page
    ...                Then the cart badge should show 0 items
    Add Product To Cart    Sauce Labs Backpack
    Verify Cart Badge Count    1
    Remove Product From Cart    Sauce Labs Backpack
    Page Should Not Contain Element    class=shopping_cart_badge    # Cart badge should disappear

Should Remove Product From Cart From Cart Page
    [Tags]    Cart    Remove
    [Documentation]    Given a standard user is on the cart page with one product added
    ...                When the user removes that product from the cart page
    ...                Then the product should no longer be in the cart
    Add Product To Cart    Sauce Labs Backpack
    Go To Cart Page
    Click Button    xpath=//div[text()="Sauce Labs Backpack"]/ancestor::div[@class="cart_item"]/div[@class="item_pricebar"]/button[text()="Remove"]
    Page Should Not Contain    Sauce Labs Backpack
    Page Should Not Contain Element    class=shopping_cart_badge

Should Validate Correct Items Are In Cart
    [Tags]    Cart    Validate
    [Documentation]    Given a standard user is on the products page and adds multiple items
    ...                When the user navigates to the cart page
    ...                Then all added items should be displayed correctly in the cart
    FOR    ${product}    IN    @{PRODUCTS}
        Add Product To Cart    ${product}
    END
    Go To Cart Page
    FOR    <span class="math-inline">\{product\}    IN    @\{PRODUCTS\}
Element Should Be Visible    xpath\=//div\[@class\="inventory\_item\_name" and text\(\)\="</span>{product}"]
    END
