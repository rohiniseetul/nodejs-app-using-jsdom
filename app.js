console.log(
  "This is a node.js app using the latest version of jsdom to prove that 'onBlur' event is being fired incorrectly!"
);

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM(`
                <input 
                    type="text" 
                    id="foo" 
                    onfocus="console.log('foo input field - onfocus event handler is fired')" 
                    onblur="console.log('foo input field - onblur event handler is fired')"  />

                <input 
                    type="text" 
                    id="bar" 
                    onfocus="console.log('bar input field - onfocus event handler is fired')" 
                    onblur="console.log('bar input field - onblur event handler is fired')"  />
`).window;

getFooInputElement = () => document.getElementById("foo");
getBarInputElement = () => document.getElementById("bar");

// Attached event listeners
getFooInputElement().addEventListener(
  "focus",
  () => console.log("foo input field - heard browser focus event"),
  { capture: true }
);
getFooInputElement().addEventListener(
  "blur",
  () => console.log("foo input field - heard browser blur event"),
  { capture: true }
);

getBarInputElement().addEventListener(
  "focus",
  () => console.log("bar input field - heard browser focus event"),
  { capture: true }
);
getBarInputElement().addEventListener(
  "blur",
  () => console.log("bar input field - heard browser blur event"),
  { capture: true }
);

// Execute
console.log(
  "App runing...\n-------------------------------------------------------------------------"
);
console.log("Calling 'focus()' on an input field");
getFooInputElement().focus();

console.log(
  "\nCalling on focus on the same foo input field which has focused already"
);
getFooInputElement().focus();

console.log(
  "-------------------------------------------------------------------------"
);
console.log(
  "Result/Issue: As we can see, `onBlur` event is fired when we call 'focus()' on the focused foo input field. "
);
