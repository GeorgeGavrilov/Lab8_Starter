1) We would fit our automated tests within a Github action that runs whenever code is pushed. In that case, whatever the new code we push into our repository, our tests automatically run to check wether the new changes break any of the tests. If they do, we have to fix our newly pushed code, and if not, we keep the new code changes.

2) No, we I woudn't

3) No, we wouldn't use unit test to test the "message" feature because just like mentioned earlier, unit tests caanot test how some individual components would interact with each other on an application/feature level.

4) Yes, we can use unit test to test the "max message length" by just creating one test case to check if the passed in string's length is less or equals to 80 (we can pass one in that is greater than 80 and expect the feature to reject that input).