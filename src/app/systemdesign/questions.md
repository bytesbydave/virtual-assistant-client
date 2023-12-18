1. **Explain what a single page app is and how to make one SEO-friendly**
   A single page app (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts. To make it SEO-friendly, use server-side rendering or prerendering techniques to provide search engines with crawlable content.

2. **Have you ever used a grid system, and if so, what do you prefer?**
   Yes, I've used grid systems. I prefer CSS Grid for its powerful layout capabilities and flexibility.

3. **How do you serve a page with content in multiple languages?**
   To serve a page with content in multiple languages, use internationalization (i18n) techniques such as language-specific HTML attributes, separate language files, or server-side language negotiation.

4. **How do you serve your pages for feature-constrained browsers?**
   Serve pages for feature-constrained browsers by using feature detection to conditionally load polyfills or alternative code paths.

5. **How is responsive design different from adaptive design?**
   Responsive design adapts to different screen sizes, while adaptive design involves creating specific layouts for different devices.

6. **How would you approach fixing browser-specific styling issues?**
   Browser-specific styling issues can be fixed using feature queries (`@supports`), browser prefixes, or conditional comments for older versions.

7. **What advantage is there for using the arrow syntax for a method in a constructor?**
   The arrow syntax for a method in a constructor maintains the lexical scope of `this`, preventing common pitfalls when using traditional function expressions.

8. **What are `data-` attributes good for?**
   `data-` attributes are good for storing custom data private to the page or application, often used for scripting or styling purposes.

9. **What are the advantages/disadvantages of using CSS preprocessors?**
   CSS preprocessors like Sass or Less offer advantages such as variables, nesting, and mixins, but may lead to code bloat and debugging challenges.

10. **What are the differences between ES2015 class and ES5 function constructors?**
    ES2015 classes provide a cleaner syntax for object-oriented programming compared to ES5 function constructors.

11. **What are the different ways to visually hide content (and make it available only for screen readers)?**
    Visually hide content using techniques like `display: none`, `visibility: hidden`, or placing it off-screen while making it accessible for screen readers using ARIA attributes.

12. **What is progressive rendering?**
    Progressive rendering involves displaying content gradually as it loads, enhancing user experience.

13. **What is the definition of a higher-order function?**
    A higher-order function is a function that takes one or more functions as arguments or returns a function.

14. **What is `"use strict";`?**
    `"use strict";` is a pragma that enables a strict mode, catching common coding errors and preventing the use of certain features.

15. **What's the difference between an "attribute" and a "property"?**
    An "attribute" is a property in HTML, while a "property" is a characteristic of a JavaScript object.

16. **What's the difference between feature detection, feature inference, and using the UA string?**
    Feature detection checks if a browser supports a feature, feature inference assumes support based on other detected features, and using the UA string involves checking the user agent string.

17. **What's the difference between "resetting" and "normalizing" CSS?**
    "Resetting" CSS removes default styles, while "normalizing" CSS aims to make default styles consistent across browsers.

18. **Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?**
    It's generally a good idea to leave the global scope unchanged to avoid conflicts and maintain modular code.

19. **Why you would use a `srcset` attribute in an image tag?**
    The `srcset` attribute in an image tag is used for responsive images, allowing browsers to choose the appropriate image source based on device characteristics.

20. **Are you familiar with styling SVG?**
    Styling SVG involves applying CSS rules directly to SVG elements, taking advantage of SVG's XML-like structure.

21. **Can you describe the main difference between a `.forEach` loop and a `.map()` loop?**
    The main difference between a `.forEach` loop and a `.map()` loop is that `.map()` creates a new array based on the return values of the callback, while `.forEach` just iterates over the array.

22. **Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?**
    Coding a website to be responsive means designing it to adapt to various screen sizes, while a mobile-first strategy prioritizes the mobile layout and progressively enhances for larger screens.

23. **Can you give an example for destructuring an object or an array?**
    Destructuring an array: `const [first, second] = [1, 2]`; Destructuring an object: `const { name, age } = { name: 'John', age: 25 }`.

24. **Can you give an example of a curry function and why this syntax offers an advantage?**
    Curry function example: `const curryFunction = (a) => (b) => a + b;`. It allows partial application of arguments.

25. **Can you give an example of an `@media` property other than `screen`?**
    `@media print` is an example of an `@media` property other than `screen`.

26. **Create a for loop that iterates up to `100` while outputting "fizz" at multiples of `3`, "buzz" at multiples of `5`, and "fizzbuzz" at multiples of `3` and `5`.**

    ```javascript
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
      else if (i % 3 === 0) console.log('Fizz');
      else if (i % 5 === 0) console.log('Buzz');
      else console.log(i);
    }
    ```

27. **Describe what you like and dislike about the CSS preprocessors you have used.**
    CSS preprocessors: Advantages include code organization, variables, and mixins. Disadvantages may include a learning curve and potential for code bloat.

28. **Difference between document `load` event and document `DOMContentLoaded` event?**
    Document `load` event fires when a resource and its dependent resources have finished loading, while `DOMContentLoaded` fires when the initial HTML document has been completely loaded and parsed.

29. **ES2015 Template Literals offer a lot of flexibility in generating strings, can you give an example?**
    ES2015 Template Literals example: `` `Hello, ${name}!` `` for string interpolation.

30. **Explain the same-origin policy with regards to JavaScript.**
    Same-origin policy restricts JavaScript from making requests to a different domain for security reasons.

31. **Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?**
    The given function
    Sure, let's go through each question:

32. **Describe the difference between `<script>`, `<script async>` and `<script defer>`**

    - `<script>`: Executes the script immediately, blocking HTML parsing.
    - `<script async>`: Downloads the script asynchronously while HTML parsing continues, then executes immediately after download.
    - `<script defer>`: Downloads the script asynchronously while HTML parsing continues, then defers execution until HTML parsing is complete.

33. **Explain how prototypal inheritance works**
    Prototypal inheritance in JavaScript involves objects inheriting properties and methods from their prototype, forming a chain of linked objects. When an object is accessed, if a property or method is not found on the object itself, the JavaScript engine looks up the prototype chain until it finds the property or until it reaches the end of the chain.

34. **Explain how `this` works in JavaScript**
    `this` in JavaScript refers to the current execution context. Its value is determined by how a function is called. In a method, `this` refers to the object the method is called on. In a function not part of an object, `this` refers to the global object (e.g., `window` in a browser). Arrow functions don't have their own `this`, and they inherit it from the surrounding lexical scope.

35. **Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.**
    The box model in CSS defines how elements are rendered in the browser, comprising content, padding, border, and margin. To change the box model, you can use the `box-sizing` property. Setting it to `border-box` includes padding and border in the element's total width and height, while the default `content-box` includes only the content.

36. **What are the differences between variables created using `let`, `var`, or `const`?**

    - `let`: Has block scope and can be reassigned.
    - `var`: Has function scope (or global scope if declared outside a function) and can be reassigned.
    - `const`: Has block scope and cannot be reassigned after initialization.

37. **What does `* { box-sizing: border-box; }` do?**
    It sets the box-sizing property to `border-box` for all elements, making padding and border included in the element's total width and height.

38. **What is CSS selector specificity and how does it work?**
    CSS selector specificity is a measure of how specific a selector is. It is calculated based on the number and type of selectors used. Specificity determines which rule is applied when conflicting rules exist.

39. **What is the CSS `display` property, and can you give a few examples of its use?**
    The `display` property in CSS sets how an element is displayed. Examples include:

    - `block`: Renders as a block-level element.
    - `inline`: Renders as an inline element.
    - `flex`: Enables a flex container.
    - `none`: Hides the element.

40. **What is the difference between `==` and `===`?**
    `==` performs type coercion, allowing values of different types to be compared after conversion. `===` requires both value and type to be identical.

41. **What's the difference between a variable that is: `null`, `undefined` or undeclared?**

    - `null`: Assigned value representing no value or no object.
    - `undefined`: Variable declared but not assigned.
    - Undeclared: Variable not declared at all.

42. **What's the difference between `.call` and `.apply`?**
    Both are methods to invoke a function with a specific `this` value:

    - `.call`: Accepts arguments individually.
    - `.apply`: Accepts arguments as an array.

43. **Describe the difference between a cookie, `sessionStorage` and `localStorage`.**

    - Cookie: Small data sent to the browser, stored and sent with each HTTP request.
    - `sessionStorage`: Stores data for a session, limited to the duration of the page session.
    - `localStorage`: Stores data with no expiration date, persisting even after the browser is closed and reopened.

44. **What's the difference between a `relative`, `fixed`, `absolute` and `static`-ally positioned element?**

    - `relative`: Positioned relative to its normal position.
    - `fixed`: Positioned relative to the viewport.
    - `absolute`: Positioned relative to the nearest positioned ancestor.
    - `static`: Positioned based on the normal flow of the document.

45. **What's the difference between `inline` and `inline-block`?**

    - `inline`: Flows with the content, doesn't allow setting width and height.
    - `inline-block`: Flows with the content and allows setting width and height.

46. **Can you offer a use case for the new arrow => function syntax?**
    Arrow functions are concise and maintain the lexical scope of `this`. Use them for shorter syntax in functions and when the lexical scope is crucial, e.g., in callbacks or within object methods.

47. **Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`?**
    Placing CSS `<link>`s in `<head>` ensures styles are loaded before rendering content, and JS `<script>`s just before `</body>` ensure scripts execute after content is parsed, optimizing page rendering.

48. **Describe event bubbling.**
    Event bubbling is the propagation of events from the target element to the root of the DOM. The event starts at the target and bubbles up through its ancestors.

49. **Explain event delegation.**
    Event delegation involves attaching a single event listener to a common ancestor rather than individual elements. Events are then handled based on the target, improving performance and allowing dynamic content.

50. **Explain `Function.prototype.bind`.**
    `Function.prototype.bind` creates a new function with a specified `this` value and initial arguments. It allows setting the context in which a function will be executed.

51. **Explain "hoisting".**
    Hoisting in JavaScript moves declarations to the top of their containing scope during the compilation phase. While variable declarations are hoisted, assignments are not.

52. **Explain how a browser determines what elements match a CSS selector.**
    The browser determines matching elements for a CSS selector by traversing the DOM, starting from the root or context node, and applying the selector criteria.

53. **Explain the difference between synchronous and asynchronous functions.**
    Synchronous functions block further execution until completed, while asynchronous functions allow execution to continue without waiting for completion.

54. **Have you played around with the new CSS Flexbox or Grid specs?**
    Yes, both CSS Flexbox and Grid provide powerful layout capabilities. Flexbox is ideal for one-dimensional layouts, while Grid is suitable for two-dimensional layouts.

55. **Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?**
    `translate()` is used for smooth animations without affecting layout, while `absolute` positioning is used for precise layout control. The choice depends on the specific design requirements.

56. \*\*What are the pros and

cons of using Promises instead of callbacks?\*\*
Pros of Promises include better readability, error handling, and avoiding callback hell. Cons include potential unhandled promise rejections and increased complexity for simple tasks.

26. **What is a closure, and how/why would you use one?**
    A closure is a function that "closes over" variables from its outer scope, preserving their values. Closures are used to create private variables, implement data encapsulation, and maintain state in functional programming.

27. **What is event loop?**
    The event loop is a core concept in JavaScript, responsible for handling asynchronous operations by continuously checking the message queue and executing tasks in a non-blocking manner.

28. **What language constructions do you use for iterating over object properties and array items?**

    - For objects: `for...in` loop or `Object.keys()`, `Object.values()`, `Object.entries()`.
    - For arrays: `for...of` loop, `forEach()`, `map()`, `filter()`, etc.

29. **What's a typical use case for anonymous functions?**
    Anonymous functions are often used as arguments for higher-order functions or for short-lived, one-time-use functions where naming is unnecessary.

30. **Describe Block Formatting Context (BFC) and how it works.**
    BFC is a part of the visual formatting model in CSS. It defines how elements in a document are laid out and how they interact with each other, providing control over layout and preventing certain layout issues.

31. **Describe `float`s and how they work.**
    `float` is a CSS property used for text wrapping around images or elements. It removes an element from the normal document flow, causing surrounding elements to flow around it.

32. **Describe pseudo-elements and discuss what they are used for.**
    Pseudo-elements in CSS represent a specific part of an element. Examples include `::before` and `::after`, often used for adding decorative content or styling specific parts of an element.

33. **Describe `z-index` and how stacking context is formed.**
    `z-index` in CSS controls the stacking order of positioned elements. Stacking context is formed when an element has a `position` value other than `static` and a `z-index` value other than `auto`.

34. **What kind of things must you be wary of when designing or developing for multilingual sites?**
    Consideration should be given to text expansion/contraction, cultural nuances, right-to-left languages, and the use of proper language attributes. Ensure proper encoding, avoid hardcoding text, and allow for easy content translation.

35. **Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?**

    - `function Person(){}`: Function declaration.
    - `var person = Person()`: Invokes the function but assigns its return value, which may be `undefined`.
    - `var person = new Person()`: Instantiates an object using the `Person` constructor.

36. **Explain Ajax in as much detail as possible.**
    Ajax (Asynchronous JavaScript and XML) is a technique for making asynchronous requests to a server from a web page. It allows data to be exchanged with the server without a full page reload, enhancing the user experience.

37. **Explain CSS sprites, and how you would implement them on a page or site.**
    CSS sprites combine multiple images into a single image to reduce the number of server requests. They are implemented by setting the background image and adjusting the background position for individual elements.

38. **Explain how JSONP works (and how it's not really Ajax).**
    JSONP (JSON with Padding) is a technique for making cross-domain requests using `<script>` tags. It works by dynamically adding a script tag to the document, with the source pointing to a server that returns data wrapped in a callback function. It's not Ajax in the traditional sense as it doesn't use XMLHttpRequest.

39. **Explain the difference between mutable and immutable objects.**
    Mutable objects can be modified after creation, while immutable objects cannot be changed. In JavaScript, primitive data types (e.g., numbers, strings) are immutable, while objects (arrays, objects) are mutable.

40. **Explain the differences in the usage of `foo` between `function foo() {}` and `var foo = function() {}`.**
    - `function foo() {}`: Function declaration; `foo` is hoisted and can be called before its declaration.
    - `var foo = function() {}`: Function expression; `foo` is assigned the function and is not hoisted.
