# Testing Academy - JavaScript Fundamentals

A comprehensive learning resource for JavaScript fundamentals through hands-on examples and chapter notes.

## 📁 Repository Structure

### Chapter 1: Basics (`ch_1/`)

- **File:** `ch_1.js`
- **Topics Covered:**
  - Variable declaration and initialization
  - `for` loop example and hotcode demonstration
  - Console logging and output
  - Node.js environment checks: `process.platform`, `process.version`
- **Notes:**
  - `ch_1.js` uses a large loop example to demonstrate hotcode behavior, not production-style logic.
  - Commented lines show how to preserve examples while preventing execution.

### Chapter 2: Variable Scoping (`ch_2/`)

- **Status:** folder exists and currently contains no lesson files.
- **Expected Topics:**
  - `var`, `let`, and `const`
  - Scope differences: function scope vs block scope
  - Redeclaration and reassignment rules
  - Best practices for modern JavaScript
- **Notes:**
  - This chapter is ready for scoped variable examples in a future update.
  - Modern JavaScript prefers `let` and `const` over `var`.

### Chapter 3: JavaScript Fundamentals (`ch_3/`)

- **Files:** `comments.js`, `identifier.js`, `keyword.js`, `literals.js`

#### 3.1 Comments (`comments.js`)

- **Topics Covered:**
  - Single-line comments using `//`
  - Multi-line comments using `/* ... */`
- **Notes:**
  - Comments do not execute and are useful for temporarily disabling code or explaining intent.
  - Good comments describe _why_ code exists, not just _what_ it does.

#### 3.2 Identifiers (`identifier.js`)

- **Topics Covered:**
  - Identifier rules: start with a letter, `_`, or `$`
  - Identifiers may include digits but cannot begin with one
  - Reserved keywords cannot be used as identifiers
  - JavaScript identifiers are case-sensitive
  - Identifiers cannot contain spaces
- **Naming Conventions:**
  - `camelCase` — preferred for variables and functions, e.g. `firstName`
  - `snake_case` — common in databases and some variable styles, e.g. `first_name`
  - `PascalCase` — used for classes and constructors, e.g. `FirstName`
  - `SCREAMING_SNAKE_CASE` — used for constants, e.g. `MAX_COUNT`
  - Hungarian notation is shown but not recommended for modern JavaScript
- **Notes:**
  - Use meaningful, consistent names to make code easier to understand.
  - JavaScript identifiers can also use Unicode letters, but ASCII-style names are most common.
  - Avoid invalid forms such as kebab-case and train-case, and do not use reserved keywords.

#### 3.3 Keywords (`keyword.js`)

- **Topics Covered:**
  - Reserved keywords and their purpose
  - Variable declaration keywords: `var`, `let`, `const`
  - Control flow keywords: `if`, `else`, `switch`, `case`, `break`, `default`
  - Loop keywords: `for`, `while`, `do`, `continue`, `break`
  - Function keywords: `function`, `return`, `typeof`, `yield`
  - Object and class keywords: `new`, `this`, `class`, `extends`, `super`, `instanceof`
  - Error handling: `try`, `catch`, `finally`, `throw`
  - Other important keywords: `in`, `of`, `delete`, `void`, `with`, `debugger`
- **Notes:**
  - Avoid using reserved words as variable or function names.
  - Some keywords are reserved for future JavaScript versions and should not be reused.
  - `yield` is valid only inside generator functions, and `await` is reserved in async or module contexts.

#### 3.4 Literals (`literals.js`)

- **Topics Covered:**
  - Numeric literals: integers, floats, binary, octal, hexadecimal
  - String literals: single quotes, double quotes, template literals
  - Boolean literals: `true`, `false`
  - Special literals: `null`, `undefined`
  - Array literals
  - Object literals
  - Template literals with embedded expressions
- **Notes:**
  - Template literals are useful for multi-line strings and interpolation.
  - `null` is an explicit empty value, while `undefined` means a variable has no assigned value.
  - Modern JavaScript also supports numeric separators like `1_000` for readability.

### Chapter 4: Advanced Variables (`ch_4/`)

- **Files:** `const_explain.js`, `let_explain.js`, `var_explain.js`, `var_let_const.js`, `hoisting.js`, `hoisting_with_function.js`, `function.js`
- **Topics Covered:**
  - `const` behavior, block scope, initialization, and non-reassignable values
  - `let` behavior, block scope, reassignment, and no redeclare in the same scope
  - `var` behavior, function scope, redeclaration, and legacy hoisting rules
  - Comparison of `var`, `let`, and `const`
  - Hoisting and Temporal Dead Zone (TDZ)
  - Function definition, invocation, parameters, and return values
- **Notes:**
  - Prefer `const` for values that should remain constant and `let` for mutable variables.
  - `const` does not make objects or arrays immutable; it only prevents reassignment of the binding.
  - `let` and `const` are hoisted but stay in the Temporal Dead Zone until initialized.
  - `var` declarations are hoisted and initialized to `undefined`, which can lead to subtle bugs.
  - `hoisting.js` illustrates function declaration hoisting and `var` hoisting behavior.
  - `hoisting_with_function.js` is currently a placeholder but can be expanded to compare function declarations and function expressions.
  - `function.js` shows reusable code, calls, parameters, and return values; function declarations are also hoisted.

## 🚀 Getting Started

1. Clone or download this repository.
2. Ensure Node.js is installed.
3. Run examples with:
   ```bash
   node filename.js
   ```
4. Begin with `ch_1/ch_1.js`, then move to `ch_3` and `ch_4`.

## 📚 Learning Path

1. Start with **Chapter 1** for basic variables, loops, and Node.js checks.
2. Continue with **Chapter 3** to learn comments, identifiers, keywords, and literals.
3. Study **Chapter 4** for advanced variable behavior, hoisting, and functions.
4. Return to **Chapter 2** once scoped variable lessons are available.

## 💡 Key Takeaways

- Use `const` by default and `let` when reassignment is needed.
- Prefer `camelCase` for variables and functions, and use clear, descriptive names.
- Avoid using reserved keywords as identifiers.
- Keep comments useful and current.
- Understand hoisting and TDZ to avoid runtime errors.
- Reuse functions with parameters and return values instead of duplicating logic.

## 📝 Notes

- Each chapter builds on the previous one: basics → fundamentals → advanced variables.
- Practice by editing examples, running them, and observing console output.
- Chapter 2 is currently empty; scope-focused examples will be added later.
- Chapter 4 contains the most important modern JavaScript concepts for avoiding bugs.
- Naming conventions and identifier rules are critical for readable, maintainable code.
