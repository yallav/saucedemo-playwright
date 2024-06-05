## Playwright and POM
This repo demonstrates POM design pattern in Playwright for "saucedemo" application

### Setup (from scratch)
1. Create an empty repo in GitHub 
2. Clone the the empty repo by executing the following command
```
git clone https://github.com/yallav/saucedemo-playwright.git
```
3. Initiate the Playwright with the following command
```
npm init playwright@latest
```
We can see the following message that indicates successful initialization of Playwright tool
![alt text](/documentation/image-1.png)
4. Install dotenv plugin by executing the following command from the project root directory
```
npm install dotenv -D
```

### Setup (from repo)
1. Clone the porject repo by executing the following command
```
git clone https://github.com/yallav/saucedemo-playwright.git
```
2. Install all dependencies with the following command from the projet root directory
```
npm install
```
3. Install playwright executables, otherwise playwright will fail to find browser executables
```
npx playwright install
```

### Test Case
Following test scenario is targeted to demonstrate automation testing skill in Playwright with JavaScript
```
Feature:
This feature gives flow of order checkout scenarios

Scenario: Checkout Scenario

Given user launches Saucedemo application with "https://www.saucedemo.com/"

When user enters "standard_user" as user name and "secret_sauce" as password and clicks login button

And user adds two random items to cart

And user clicks on cart icon

And user clicks on Checkout button

And user fills the form and submit the form

And user clicks on Finish button

Then user should see "Thank you for your order!"
```

### Script Recording
1. Test flow can be recorded by executing the following command
```
npx playwright codegen
```
This will result in launching browser with recording controller alogn with Playwright Inspector
![alt text](/documentation/image-2.png)
Close the browser to comeout of recording mode

### Execute the test
1. Test can be exeucted in headless mode with the following command
```
npx playwright test
```
2. Test can be executed in UI mode as well
```
npx playwright test --ui
```
UI mode will result in follwing screen
![alt text](/documentation/image-3.png)
