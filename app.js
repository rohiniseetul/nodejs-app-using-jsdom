const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM(`
                <input 
                    type="text" 
                    id="foo" 
                    onfocus="() => console.log('foo - onfocus event handler is fired')" 
                    onblur="() => console.log('foo - onblur event handler is fired')"  />

                <input 
                    type="text" 
                    id="bar" 
                    onfocus="() => console.log('bar - onfocus event handler is fired')" 
                    onblur="() => console.log('bar - onblur event handler is fired')"  />
`).window;

console.log("This is a node.js app");

getFooInputElement = () => document.getElementById("foo");
getBarInputElement = () => document.getElementById("bar");

getFooInputElement().addEventListener(
  "focus",
  () => console.log("foo - heard browser focus event"),
  { capture: true }
);
getFooInputElement().addEventListener(
  "blur",
  () => console.log("foo - heard browser blur event"),
  { capture: true }
);

getBarInputElement().addEventListener(
  "focus",
  () => console.log("bar - heard browser focus event"),
  { capture: true }
);
getBarInputElement().addEventListener(
  "blur",
  () => console.log("bar - heard browser blur event"),
  { capture: true }
);

// Execute
console.log("Running.........");
getFooInputElement().focus();
getFooInputElement().focus();
