## APPLY Excercise

This repository contains an exercise with test cases written in Cypress.

Additionally it used mochawesome-reporter plugin to handled the test evidence.

This example app is configured to run tests locally.

## Test Strategy
The test strategy is based on E2E to check the app flow completely and make sure that all components are working together.
Each test validates a component and help to feed next stage flows to continue testing.
This example uses the should function to make BDD Assertions.

# 💻 Pre-requisites

Before you use this project you only need to have Node Js installed in your computer.

https://nodejs.org/es/download/

## Clone this repository to a local directory
command: git clone https://github.com/gmunozm/applyCypress.git

## Go to the cloned repository
command: cd applyCypress

## Install the node_modules
command: npm i

## Execute the test suite
command: npx cypress run