## Playwright and POM
This repo demonstrates POM design pattern in Playwright for "saucedemo" application

### Setup (from scratch)
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
3. Install dotenv plugin by executing the following command from the project root directory
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
