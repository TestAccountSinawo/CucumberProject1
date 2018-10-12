package TakeAlot;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith( Cucumber.class )
@CucumberOptions(
        features = "C:\\Users\\Sinawo Jackson\\BDDCucumberSession\\src\\main\\java\\Feature\\",
        glue = "StepDefinition",
        format = {"pretty","html:test-output"},
        dryRun = false,
        strict = true)



public class TestRunner {

}


