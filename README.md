## Playwright and POM
This repo demonstrates POM design pattern in Playwright for "saucedemo" application

### Setup
1. Clone the porject repo by executing the following command
```
git clone https://github.com/yallav/saucedemo-playwright.git
```
2. Initiate the Playwright with the following command
```
npm init playwright@latest
```
We can see the following message that indicates successful initialization of Playwright tool
![alt text](/documentation/image-1.png)
3. Test flow can be recorded by executing the following command
```
npx playwright codegen
```
This will result in launching browser with recording controller alogn with Playwright Inspector
![alt text](/documentation/image-1.png)
Close the browser to comeout of recording mode
