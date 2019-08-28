const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`
                <input 
                    type="text" 
                    id="foo" 
                    onfocus="() => console.log('foo - onfocus handler is fired')" 
                    onblur="() => console.log('foo - onblur handler is fired')"  />

                <input 
                    type="text" 
                    id="bar" 
                    onfocus="() => console.log('bar - onfocus handler is fired')" 
                    onblur="() => console.log('bar - onblur handler is fired')"  />
`)).window;

console.log('This is a node.js app')

getFooInputElement = () => document.getElementById('foo');
getBarInputElement = () => document.getElementById('bar');

getFooInputElement().addEventListener('focus', () => console.log('foo - browser onfocus handler is fired'), { capture: true});
getFooInputElement().addEventListener('blur', () => console.log('foo - browser onblur handler is fired'), { capture: true});

getBarInputElement().addEventListener('focus', () => console.log('bar - browser onfocus handler is fired'), { capture: true});
getBarInputElement().addEventListener('blur', () => console.log('bar - browser onfocus handler is fired'), { capture: true});

// Execute
console.log('Running.........')
getFooInputElement().focus();
getFooInputElement().focus();
