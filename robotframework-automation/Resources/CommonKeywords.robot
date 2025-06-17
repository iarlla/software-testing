*** Settings ***
Library    SeleniumLibrary
Variables  ../Variables/TestData.py

*** Keywords ***
Open Browser To Login Page
    Open Browser    https://www.saucedemo.com/v1/    chrome    # Pode ser parametrizado para outros browsers
    Maximize Browser Window
    Set Selenium Speed    0.2s    # Aumentar para depuração visual, remover para velocidade

Login With Credentials
    [Arguments]    ${username}    ${password}
    Input Text    id=user-name    ${username}
    Input Text    id=password    ${password}
    Click Button    id=login-button

Verify Products Page Is Loaded
    Wait Until Page Contains Element    class=product_label    timeout=5
    Element Should Contain    class=product_label    Products

Verify Login Page Is Loaded
    Wait Until Page Contains Element    id=login-button    timeout=5
    Element Should Be Visible    id=user-name
    Element Should Be Visible    id=password

Click Burger Menu
    Click Element    id=react-burger-menu-btn

Click Logout Button
    Click Element    id=logout_sidebar_link

Verify Error Message
    [Arguments]    ${expected_message}
    Element Should Contain    data-test=error    ${expected_message}

Add Product To Cart
    [Arguments]    <span class="math-inline">\{product\_name\}
Click Element    xpath\=//div\[text\(\)\="</span>{product_name}"]/ancestor::div[@class="inventory_item"]/div[@class="pricebar"]/button[text()="Add to cart"]

Remove Product From Cart
    [Arguments]    <span class="math-inline">\{product\_name\}
Click Element    xpath\=//div\[text\(\)\="</span>{product_name}"]/ancestor::div[@class="inventory_item"]/div[@class="pricebar"]/button[text()="Remove"]

Verify Cart Badge Count
    [Arguments]    ${expected_count}
    Element Should Contain    class=shopping_cart_badge    ${expected_count}

Go To Cart Page
    Click Element    class=shopping_cart_link
    Wait Until Page Contains Element    class=subheader    timeout=5
    Element Should Contain    class=subheader    Your Cart
