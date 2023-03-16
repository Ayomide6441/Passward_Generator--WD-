# Password Generator

## Introduction

You have been taught about loops and array methods. You are going to use that knowledge to build a `password generator`.
This project has a starter file that contains the HTMl and JS for the task.

# Your Task

Generating a very strong password is needed to secure our accounts but it can be difficult to generate one. Using a pattern, name, date of birth and others can be easily guessed by hackers. There are so many apps and extensions that sloves the problem of generation a strong passworg. Google is a very good example.Google gives suggestions for strong password. Have you ever wondered how the password is generated? You are going to build your own password generator in this project.

## Part 1

A part of the code has been written for you in the script.js file. There is an array of numbers, an array of special characters and an array of alphabets. The password will be from these arrays. There is also a `password_list` array which is empty and a `password` variable with empty string. These two will be talked about later.

- To start with we need to ask the users how many symbols,numbers and alphabets they want in their password. `This has been written for you`.

        console.log("Welcome to the My Password Generator!");
        let num_letters = parseInt(prompt("How many letters would you like in your password?"));
        let num_symbols = parseInt(prompt("How many symbols would you like?"));
        let num_numbers = parseInt(prompt("How many numbers would you like?"));

- After that, we loop through the arrays created to generate the password. For example , the `ALPHABETIC_CHARACTERS`. The array has been looped based on the number of alphabets the user wants for you and the result was added to the `password_list` array.

  - You will do the same for the `SPECIAL_CHARACTERS` and `NUMBERS` array.

## Part 2

After completing part 1 , you should have the generated password in an array but it can't be displayed to users as an array. Now you will make the array a string. Follow the steps below to complete this.

- Before you change the array to a string, you will see that the array is has a specifc order. That is, the alphabets come first, then the special characters and numbers. This will still make it easy for hackers to hack. We can make it better by making the arrangement scattered. To do this we are going to sort the array. Use the code below to acheive this

        password_list.sort(() => Math.random() - 0.5);

- Now that you have the sorted, you can now loop through the `password_list` array and put it in the `password` variable as a string.

- After this the password will be displayed for the users to see.

**If you get stuck while trying to solve this problem, search for possible solutions online. If you still can't solve the problem then you should check the final folder**
