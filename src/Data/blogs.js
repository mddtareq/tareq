import js1 from '../images/blogs/javascript1.jpeg'
import js2 from '../images/blogs/javascript2.jpg'
import react1 from '../images/blogs/react1.png'
import react2 from '../images//blogs/react2.png'

var blogs = [
    {id:1,name: 'A simple introduction to JavaScript',description: 'JavaScript is a programming language commonly used in web development...',detail:`JavaScript is a programming language commonly used in web development.JavaScript is a scripting or programming language that allows you to implement complex features on web pages. JavaScript is a client-side scripting language, which means the source code is processed by the client web browser rather than on the webserver. That means JavaScript functions can run after a webpage has loaded without communicating with the server. The JavaScript code can produce an error message before connecting it to the server.
    The parseInt() the function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
    The parseInt() the function parses a string argument and returns a float of the specified radix (the base in mathematical numeral systems).
    Nan() method determines whether a value is not a number . This method returns true if the value is of the type Number, and equates to Nan. Otherwise, it returns false.
    The let statement declares a block-scoped local variable, optionally initializing it to a value.
    Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.
    pop() removes and returns the last item. push() appends items to the end of the array.
    shift() removes and returns the first item. unshift() prepends items to the start of the array.
    reverse() reverses the array. slice(start[, end]) returns a sub-array. splice(start, delcount[, item1[, …[, itemN]]]) lets you modify an array by deleting a section and replacing it with more items.
    Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object. it works with the Number type. It doesn’t work with BigInt.
    IndexOf() is a string method that is used to find the location of a substring in a string. Because the indexOf() method is a method of the String object, it must be invoked through a particular instance of the String class.`,liveLink: 'https://mddtareq.medium.com/a-simple-introduction-to-javascript-89abe79b6848',image1: js1,type: 'javascript'},
    {id:2,name: 'Know More About JavaScript',description: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages...',detail:`JavaScript is a programming language commonly used in web development.JavaScript is a scripting or programming language that allows you to implement complex features on web pages. JavaScript is a client-side scripting language, which means the source code is processed by the client web browser rather than on the webserver. That means JavaScript functions can run after a webpage has loaded without communicating with the server. The JavaScript code can produce an error message before connecting it to the server.
    Data Types: In primitive data have stored directly values. Without these types of data, all are objects in JS(like the number). In non-primitive data, they are not directly saved value. but have saved reference value. There has property.
    Commenting: In JS, comment means if you comment you ant data or sentences it will not work with other’s active code. Sentences will not show in the browser. In two ways, you can comment.
    Operators: JavaScript includes operators as in other languages. An operator performs some operation on single or multiple operands (data value) and produces a result. For example 1 + 2, where + sign is an operator and 1 is the left operand and 2 is the right operand. + operator adds two numeric values and produces a result which is 3 in this case. There are Arithmetic Operators, Comparison Operators, Logical Operators, Assignment Operators, and Conditional Operators.
    Semicolons: After line semicolon is mandatory in some programming language. In javascript, though it is not wrong technically, to make code easy readable professional developers should practice it all time.
    Arrow function: An arrow function expression is a compact alternative to a traditional function expression, but is limited and can’t be used in all situations.
    Spread operator: The spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array. The code is shorter, cleaner, and no need to use a useless null.
    Try, Catch, Finally: The try statement used to test a block of code for errors. The catch statement used to handle the error. The throw statement used to create custom errors by the programmer. The finally statement used to execute code, after try and catch regardless of the result.
    Callback(): It is used to handle the execution of a function after the completion of the execution of another function. A callback would be helpful in working with events. In the callback, a function can be passed as an argument to another function.
    Template String: It is one of the most promising features of ES6. It can make the JavaScript code dynamic. Using the backtick symbol () normal JavaScript can be turned into a dynamic code.
    Destructure: It is one of the coolest features of ES6. It is mostly used for the destructuring of an array, object. In-case of array destructuring we use [] and inside of this square bracket, we put variables that refer to the value of this array according to its index number of this array`,liveLink: 'https://mddtareq.medium.com/know-more-about-javascript-a84c10eb1473',image1: js2,type: 'javascript'},
    {id:3,name: 'Know About React',description: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components....',detail:`React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.
    Babel
    Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. With Babel, you can use the newest features of JavaScript (ES6 — ECMAScript 2015). Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.
    JSX
    JSX stands for JavaScript XML.JSX is an XML/HTML like extension to JavaScript. As you can see above, JSX is not JavaScript nor HTML. JSX is an XML syntax extension to JavaScript that also comes with the full power of ES6 (ECMAScript 2015). Just like HTML, JSX tags can have tag names, attributes, and children. If an attribute is wrapped in curly braces, the value is a JavaScript expression.
    Library or framework
    We know the framework is big than a library where a few decisions are made for you already. Such as Angular, in that, you can’t change most of the things without their function. But React is just a library and here you can make all decisions by yourself and use the different third-party functions.
    Components
    Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props), and returns a React element that describes how a section of the UI (User Interface) should appear.
    State
    The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
    Props
    Props are short for properties and they are used to pass data between React components. React’s the data flow between components is uni-directional (from parent to child only).
    Redux
    Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.
    Context
    According to the React docs, context provides a way to pass data through the component tree without having to pass props down manually at every level.
    Virtual DOM
    The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
    One-way Data Binding
    React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when a developer designs a React app, they often nest child components within parent components. This way, a developer knows where and when an error occurs, giving them better control of the whole web application.`,liveLink: 'https://mddtareq.medium.com/know-about-react-197d56683062',image1: react1,type: 'react'},
    {id:4,name: 'Some Js Problems Code',description: 'The JavaScript code can produce an error message before connecting it to the server...',detail:`JavaScript is a programming language commonly used in web development.JavaScript is a scripting or programming language that allows you to implement complex features on web pages. JavaScript is a client-side scripting language, which means the source code is processed by the client web browser rather than on the webserver. That means JavaScript functions can run after a webpage has loaded without communicating with the server. The JavaScript code can produce an error message before connecting it to the server.
    Find the largest element of an array
    const array = [1, 3, 2];
    Math.max(…array);
    Sum of all numbers in an array
    var array = [1, 2, 3, 4, 5];
    var sum = array.reduce(function(a, b){ return a + b; }, 0);
    Remove duplicate item from an array
    var unique = […new Set(array)];
    Count the number of words in a string
    var str = “I took a shower. I need a friend. Noone like this stikcy guy.”;
    var count = 0;
    for(var i = 0; i<str.length;i++){
    var element = str[i];
    if(element == “ “){
    count++; }}
    count++;
    console.log(“number of words:”, count);
    Reverse a string
    var str = “I am becoming a web dev!”;
    var reverse = ‘’;
    for(var i = 0; i<str.length; i++){
    var element = str[i];
    reverse = element + reverse;}
    console.log(reverse);
    Calculate Factorial of a number using for loop
    function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
    fact = fact * I;
    }
    return fact;
    }
    var result = factorial(6);
    console.log(result);
    Calculate Factorial of a number using a while loop
    function factorial(n) {
    var i = 1; var fact = 1;
    while (i <= n) {
    fact = fact * i; i++;
    }
    return fact;
    }
    var result = factorial(5);
    console.log(result);
    Calculate Factorial in a Recursive function
    function factorial(n) {
    if (n == 0) {
    return 1; }
    else {
    return n * factorial(n — 1); }}
    var result = factorial(10);
    console.log(result);
    Create a Fibonacci Series using a for loop
    function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i — 1] + fibo[i — 2];
    }
    return fibo;}
    var result = fibonacci(12);
    console.log(result);
    Fibonacci Element in a Recursive Way
    function fibonacci(n) {
    if (n == 0) {
    return 0; }
    if (n == 1) {
    return 1; }
    else {
    return fibonacci(n — 1) + fibonacci(n — 2); }}
    var result = fibonacci(10);
    console.log(result);
    Create a Fibonacci series in a recursive way
    function fibonacci(n) {
    if (n == 0) {
    return [0] }
    else if (n == 1) {
    return [0, 1]; }
    else {
    var fibo = fibonacci(n — 1);
    var nextElement = fibo[n — 1] + fibo[n — 2];
    fibo.push(nextElement);
    return fibo; }}
    var result = fibonacci(15);
    console.log(result);
    Check whether a number is a Prime Number or not
    function isPrime(n) {
    for (i = 2; i < n; i++) {
    if (n % i == 0) {
    return ‘Not a prime number’;
    } }
    return ‘Your Number is a Prime Number’;}
    var result = isPrime(139);
    console.log(result);`,liveLink: 'https://mddtareq.medium.com/some-js-problems-code-ad856e5eeff',image1: react2,type: 'javascript'},
    
]
export default blogs;