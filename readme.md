# String Calculator TDD Kata

This project implements the **String Calculator** following the principles of Test-Driven Development (TDD). It is a simple calculator that sums numbers provided in a string with various requirements and constraints.

---

## Features

1. **Empty String:**
   - Returns `0` for an empty string.
   - Example: `"" => 0`

2. **Single Number:**
   - Returns the single number itself.
   - Example: `"1" => 1`

3. **Two Numbers:**
   - Adds two numbers separated by a comma.
   - Example: `"1,2" => 3`

4. **Multiple Numbers:**
   - Handles any number of comma-separated values.
   - Example: `"1,2,3" => 6`

5. **Newline as a Delimiter:**
   - Supports newline (`\n`) as a delimiter alongside commas.
   - Example: `"1\n2,3" => 6`

6. **Custom Delimiters:**
   - Allows specifying a custom delimiter at the start of the string using `//[delimiter]\n`.
   - Example: `"//;\n1;2" => 3`

7. **Negative Numbers:**
   - Throws an exception for negative numbers with a message listing all negatives.
   - Example: `"1,-2,-3"` throws `"negatives not allowed: -2, -3"`

8. **Ignore Numbers > 1000:**
   - Ignores numbers greater than 1000.
   - Example: `"2,1001" => 2`

9. **Include Numbers <= 1000:**
   - Includes numbers less than or equal to 1000.
   - Example: `"2,1000" < 2`

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shre111/TDD-assessment.git

2. Install the dependencies:
    ```bash
   npm install

3. Run tests: 
    ```bash
   npm test