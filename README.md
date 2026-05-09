# Testing Academy - JavaScript Fundamentals

A comprehensive learning resource for JavaScript basics covering core concepts and programming fundamentals.

## 📁 Repository Structure

### Chapter 1: Basics (`ch_1/`)
- **File:** `ch_1.js`
- **Topics Covered:**
  - Variable declaration and initialization
  - hotcode
  - Console logging and output
  - Node.js environment basics (process.platform, process.version)

### Chapter 2: Variable Scoping (`ch_2/`)
- **File:** `ch_2.js`
- **Topics Covered:**
  - `var` keyword - function-scoped variables
  - `let` keyword - block-scoped variables
  - `const` keyword - block-scoped constants
  - Variable redeclaration and reassignment rules
  - Scope differences and best practices

### Chapter 3: JavaScript Fundamentals (`ch_3/`)

#### 3.1 Identifiers (`identifier.js`)
Learn the rules and best practices for naming variables:
- **Identifier Rules:**
  - Can start with letters (A-Z, a-z), underscore (_), or dollar sign ($)
  - Can include digits (but not at the start)
  - Cannot use reserved keywords
  - Case-sensitive
  - Cannot contain spaces

- **Naming Conventions:**
  - **camelCase** - Standard for variables and functions (e.g., `firstName`)
  - **snake_case** - Used in databases (e.g., `first_name`)
  - **PascalCase** - Used for classes (e.g., `FirstName`)
  - **Hungarian Notation** - Prefix with type info (e.g., `strName`, `arrItems`)

#### 3.2 Keywords (`keyword.js`)
Reserved words with special meaning in JavaScript:
- **Variable Declaration:** `var`, `let`, `const`
- **Control Flow:** `if`, `else`, `switch`, `case`, `break`, `default`
- **Loops:** `for`, `while`, `do`, `continue`, `break`
- **Functions:** `function`, `return`, `typeof`, `yield`
- **Objects & Classes:** `new`, `this`, `class`, `extends`, `super`, `instanceof`
- **Error Handling:** `try`, `catch`, `finally`, `throw`
- **Other:** `in`, `of`, `delete`, `void`, `with`, `debugger`

#### 3.3 Literals (`literals.js`)
Fixed values in code:
- **Numeric Literals:** integers, floats, binary, octal, hexadecimal
- **String Literals:** single quotes, double quotes, template literals
- **Boolean Literals:** `true`, `false`
- **Special Literals:** `null`, `undefined`
- **Array Literals:** `[1, 2, 3]`
- **Object Literals:** `{ key: value }`
- **Template Literals:** `` `string with ${expressions}` ``

## 🚀 Getting Started

1. Clone or download this repository
2. Ensure you have Node.js installed
3. Navigate to any chapter folder and run:
   ```bash
   node filename.js
   ```

## 📚 Learning Path

1. Start with **Chapter 1** to understand basic variable declaration and loops
2. Progress to **Chapter 2** to master variable scoping with `var`, `let`, and `const`
3. Complete **Chapter 3** to solidify your understanding of identifiers, keywords, and literals

## 💡 Key Takeaways

- Always use `let` or `const` instead of `var` for better scoping
- Use `const` by default, `let` when you need to reassign
- Follow naming conventions for code readability
- Understand the difference between identifiers and keywords
- Master JavaScript literals for better data handling

## 📝 Notes

- These are fundamental concepts that form the building blocks of JavaScript programming
- Practice each concept by modifying and running the code examples
- Understand scope to avoid common JavaScript bugs

---

**Created for:** JavaScript Learning & Practice  
**Updated:** May 9, 2026
