package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class loginTest {


    public WebDriver driver;

    @Given("^user is already on login page$")
    public void user_is_already_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "/Users/Sinawo Jackson/Downloads/chromedriver_win32/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        //driver.manage().window().maximize();
        driver.get("https://www.takealot.com/");
    }

    @When("^user is on home screen$")
    public void user_is_on_home_screen() {

        String title = driver.getTitle();
        Assert.assertEquals("Takealot.com: Online Shopping | SA's leading online store", title);

    }

    @Then("^user clicks login button$")
    public void user_clicks_login_button() {
        driver.findElement(By.xpath("//a[contains(text(),'Login')]")).click();
    }

    @Then("^user enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_and(String username, String password) {
        driver.findElement(By.name("email")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
        driver.findElement(By.xpath("//button[@type='submit']")).click();
    }

    @Then("^user is on Home page screen$")
    public void user_is_on_Home_page_screen() {
        boolean welcomeName = driver.findElement(By.id("welcome-name")).isDisplayed();

    }

    @Then("^close the browser$")
    public void close_the_browser() {
        driver.quit();
    }


}
