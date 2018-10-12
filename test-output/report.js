$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "user logs in to Take alot",
  "description": "",
  "id": "user-logs-in-to-take-alot",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Take Alot Login Test Scenario",
  "description": "",
  "id": "user-logs-in-to-take-alot;take-alot-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "user-logs-in-to-take-alot;take-alot-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "user-logs-in-to-take-alot;take-alot-login-test-scenario;;1"
    },
    {
      "cells": [
        "s.qhaji@mail.com",
        "Password123"
      ],
      "line": 15,
      "id": "user-logs-in-to-take-alot;take-alot-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Take Alot Login Test Scenario",
  "description": "",
  "id": "user-logs-in-to-take-alot;take-alot-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"s.qhaji@mail.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginTest.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 20613394122,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.user_is_on_home_screen()"
});
formatter.result({
  "duration": 27348963,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.user_clicks_login_button()"
});
formatter.result({
  "duration": 12938710257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s.qhaji@mail.com",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 36
    }
  ],
  "location": "loginTest.user_enters_and(String,String)"
});
formatter.result({
  "duration": 574766573,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.user_is_on_Home_page_screen()"
});
formatter.result({
  "duration": 59511602,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.close_the_browser()"
});
formatter.result({
  "duration": 1174146338,
  "status": "passed"
});
});