# Testing

## Types of tests

### Unit tests
- most granular. written by devs and executed automatically as part of the build process (Jest, Enzyme, React Testing Library)
- snapshot testing
- mocking
 
### Integration test
- tests to see if units of code work together as expected (Jest, Enzyme, React Testing Library, Cypress)

### Acceptance test
- test by end user(project manager) to verify the software meets their requirements (Done by PM)

### Performance test
- Software under different load conditions (Lighthouse)

### Retression test
- verify that changes to the software have not introduced new defects (handled by QA, done manually or automated) (Test Cafe, Cypress)

### Somke test
- quick test

### End to end test
- go through the process

### Cross browser tests
- IE11, (SauceLabs)

### Contract testing
- api testing


## Thought Process
- What are you trying to test?
- What are the inputs and expected ouputs? 
- Consider different scenarios
- Use clear unambiguous language
- Be specific about the steps that are executed
- Identify the expected outcome

## Testing methodologies
- Waterfall testing: testing performed when development process is complete
- Agile testing: integrated throughout the development lifecycle. As you develop, you test
- TDD: write tests before writing the code
- BDD: Define behavior specifications that non-tech stakeholders can understand (Cucumber)
- A/B Testing

## CI/CD Pipeline
- code check
- testing
- build check
- code is deployed to staging/prod
- GitHub Actions
- Jenkins
- Circle CI

Used Kibana
