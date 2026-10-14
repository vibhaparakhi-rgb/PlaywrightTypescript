const{test,expect,chromium}=require("@playwright/test");
test("Launch Browser",async({})=>{
    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const browser = await chromium.launch({
    headless: false, // set to true for headless mode
    executablePath: edgePath});
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://automationexercise.com/")
    await expect(page).toHaveTitle("Automation Exercise")

})