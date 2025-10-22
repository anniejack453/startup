# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Git and GitHub

It's easier to create a repository in Github first and then clone it locally.

git add -> git commit -> git push

git fetch: get latest info about changes in Github without changing local repo

git status: see differences between clones

GithHub fork: provides the ability to create a copy of a GitHub repository on GitHub

To change something in someone else's repo: fork repo, then pull request with changes

## Console Commands

echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
You can also chain the input and output of commands using special characters

| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists

## Vim

To use VI, open your console and change directory to one that holds some code you want to work on. For example, if you wanted to edit index.html you would type: vi index.html

Vim commands:
keystroke	meaning
:h	help
i	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
u	undo
CTRL-r	redo
gg	go to beginning of file
G	go to end of file
/	search for text that you type after /
n	next search match
N	previous search match
v	visually select text
y	yank or copy selected text to clipboard
p	paste clipboard
CTRL-wv	Split window vertically
CTRL-ww	Toggle windows
CTRL-wq	Close current window
:e	Open a file. Type ahead available. If you open a directory you can navigate it in the window
:w	write file (save)
:q	quit. Use :q! to exit without saving

## AWS

My IP address is: 52.70.18.49
SSH command: 
ssh -i [key pair file] ubuntu@[ip address]
Ex: ssh -i ~/keys/production.pem ubuntu@53.104.2.123
Everything worked great.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

element	meaning
html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page

Special Characters
Character	Entity
&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;

### HTML Input
Element	Meaning	Example
form	Input container and submission	<form action="form.html" method="post">
fieldset	Labeled input grouping	<fieldset> ... </fieldset>
input	Multiple types of user input	<input type="" />
select	Selection dropdown	<select><option>1</option></select>
optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
option	Selection option	<option selected>option2</option>
textarea	Multiline text input	<textarea></textarea>
label	Individual input label	<label for="range">Range: </label>
output	Output of input	<output for="range">0</output>
meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>

### Input Types
Type	Meaning
text	Single line textual value
password	Obscured password
email	Email address
tel	Telephone number
url	URL address
number	Numerical value
checkbox	Inclusive selection
radio	Exclusive selection
range	Range limited number
date	Year, month, day
datetime-local	Date and time
month	Year, month
week	Week of year
color	Color
file	Local file
submit	button to trigger form submission

example: <label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />

Attribute	Meaning
name	The name of the input. This is submitted as the name of the input if used in a form
disabled	Disables the ability for the user to interact with the input
value	The initial value of the input
required	Signifies that a value is required in order to be valid

### HTML Media
Images: <img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />

Audio: <audio controls src="testAudio.mp3"></audio>

Video: <video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>

Internal Media:
SVG: <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>


This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

There are three ways that you can associate CSS with HTML. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.

<p style="color:green">CSS</p>
The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.

<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document.

<link rel="stylesheet" href="styles.css" />
styles.css

p {
  color: green;
}

### CSS Declarations

Property	Value	Example	Discussion
background-color	color	red	Fill the background color
border	color width style	#fad solid medium	Sets the border using shorthand where any or all of the values may be provided
border-radius	unit	50%	The size of the border radius
box-shadow	x-offset y-offset blu-radius color	2px 2px 2px gray	Creates a shadow
columns	number	3	Number of textual columns
column-rule	color width style	solid thin black	Sets the border used between columns using border shorthand
color	color	rgb(128, 0, 0)	Sets the text color
cursor	type	grab	Sets the cursor to display when hovering over the element
display	type	none	Defines how to display the element and its children
filter	filter-function	grayscale(30%)	Applies a visual filter
float	direction	right	Places the element to the left or right in the flow
flex			Flex layout. Used for responsive design
font	family size style	Arial 1.2em bold	Defines the text font using shorthand
grid			Grid layout. Used for responsive design
height	unit	.25em	Sets the height of the box
margin	unit	5px 5px 0 0	Sets the margin spacing
max-[width/height]	unit	20%	Restricts the width or height to no more than the unit
min-[width/height]	unit	10vh	Restricts the width or height to no less than the unit
opacity	number	.9	Sets how opaque the element is
overflow	[visible/hidden/scroll/auto]	scroll	Defines what happens when the content does not fix in its box
position	[static/relative/absolute/sticky]	absolute	Defines how the element is positioned in the document
padding	unit	1em 2em	Sets the padding spacing
left	unit	10rem	The horizontal value of a positioned element
text-align	[start/end/center/justify]	end	Defines how the text is aligned in the element
top	unit	50px	The vertical value of a positioned element
transform	transform-function	rotate(0.5turn)	Applies a transformation to the element
width	unit	25vmin	Sets the width of the box
z-index	number	100	Controls the positioning of the element on the z axis


### CSS Units

Unit	Description
px	The number of pixels
pt	The number of points (1/72 of an inch)
in	The number of inches
cm	The number of centimeters
%	A percentage of the parent element
em	A multiplier of the width of the letter m in the parent's font
rem	A multiplier of the width of the letter m in the root's font
ex	A multiplier of the height of the element's font
vw	A percentage of the viewport's width
vh	A percentage of the viewport's height
vmin	A percentage of the viewport's smaller dimension
vmax	A percentage of the viewport's larger dimension

### CSS Display
Value	Meaning
none	Don't display this element. The element still exists, but the browser will not render it.
block	Display this element with a width that fills its parent element. A p or div element has block display by default.
inline	Display this element with a width that is only as big as its content. A b or span element has inline display by default.
flex	Display this element's children in a flexible orientation.
grid	Display this element's children in a grid orientation.
This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.



I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```
## JavaScript Notes

Script block: Directly including it in the HTML within the content of a <script> element
External code: Using the src attribute of the script element to reference an external JavaScript file.
Inline event attribute: Putting JavaScript directly inline as part of an event attribute handler.

index.js
```js
function sayHello() {
  alert("Hello");
}
```
index.html
```html
<!-- external script -->
<head>
  <script src="index.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>

  <!-- internal script block -->
  <script>
    function sayGoodbye() {
      alert("Goodbye");
    }
  </script>

  <!-- inline attribute handler -->
  <script>
    let i = 1;
  </script>
  <button onclick="alert(`i = ${i++}`)">counter</button>
</body>
```

## Node and NPM
With NPM initialized to work with your project, you can now use it to install a node package. You can search for it on the NPM website, see how often it is installed, examine the source code, and learn about who created it. You install the package using npm install followed by the name of the package. If you decide you no longer want a package dependency you can always remove it with the npm uninstall <package name here> console command.
When you start installing package dependencies, NPM will create an additional file named package-lock.json and a directory named node_modules in your project directory. The node_modules directory contains the actual JavaScript files for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do not want to check this directory into your source control system since it can be very large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node_modules in your .gitignore file.

When you clone your source code from GitHub to a new location, the first thing you should do is run npm install in the project directory. This will cause NPM to download all of the previously installed packages and recreate the node_modules directory.

The package-lock.json file tracks the version of the package that you installed. That way if you rebuild your node_modules directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.

create index.js
```js
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```
run node index.js on console

Steps:
Create your project directory
Initialize it for use with NPM by running npm init -y
Make sure .gitignore file contains node_modules
Install any desired packages with npm install <package name here>
Add require('<package name here>') to your application's JavaScript
Use the code the package provides in your JavaScript
Run your code with node index.js

## JavaScript

Array Functions:
Function	Meaning	Example
push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop()
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => i < 1)

console is basically print, but has console.log, console.time, console.timeEnd, console.count.

# Midterm Study Guide
In the following code, what does the link element do?
 It links an external resource (usually a CSS file) to the HTML document. Example: <link rel="stylesheet"
 href="styles.css"> applies styles from styles.css to the page.
 In the following code, what does a div tag do?
 A &lt;div&gt; is a block-level container that groups other elements. It's used for structure and layout.
 Examples (use in layouts):
 &lt;div class="header"&gt; ... &lt;/div&gt;
 &lt;div class="content"&gt; ... &lt;/div&gt;
 Divs have default display:block and take full width. They don't add behavior by themselves.
 In the following code, what is the difference between the #title and .grid selector?
 #title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements).
 In the following code, what is the difference between padding and margin?
 Padding: space inside the element (between content and border). Margin: space outside the element (between
 border and other elements).
 Given this HTML and this CSS how will the images be displayed using flex?
 If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless
 flex-direction: column; is specified.
 What does the following padding CSS do?
 Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element.
 What does the following code using arrow syntax function declaration do?
 Arrow functions are a compact function syntax. (a, b) => a + b means a function with parameters a and b that
 returns a+b.
 Examples:
 const add = (a, b) => a + b;
 const greet = name => `Hi ${name}`;
 const square = x => { return x * x; } // block form
 Note: arrow functions do not bind their own 'this' and are not suitable as constructors.
 What does the following code using map with an array output?
 map() transforms every element of an array and returns a new array without mutating the original.
 Examples:
const nums = [1,2,3];
 const doubled = nums.map(n => n * 2); // [2,4,6]
 const names = ['Amy','Bob'];
 const greetings = names.map(n => `Hi ${n}`); // ['Hi Amy','Hi Bob']
 What does the following code output using getElementByID and addEventListener?
 Typical pattern:
 const btn = document.getElementById('btn');
 btn.addEventListener('click', () => console.log('Clicked!'));
 Behavior: When user clicks the element with id 'btn', the callback runs and prints 'Clicked!'.
 What does the following line of Javascript do using a # selector?
 document.querySelector('#title') selects the first element that matches the CSS selector #title (element with id='title').
 querySelector accepts any CSS selector (classes, attributes, pseudos).
 Which of the following are true? (mark all that are true about the DOM)
 The DOM represents the HTML document as a tree of objects. You can use JavaScript to access and modify
 DOM elements. Each HTML element is a node in the DOM.
 By default, the HTML span element has a default CSS display property value of:
 inline
 How would you use CSS to change all the div elements to have a background color of red?
 div { background-color: red; }
 How would you display an image with a hyperlink in HTML?
 Wrap the &lt;img&gt; element with an &lt;a&gt; tag. Ensure the image file is in the correct folder (public or
 images/) and the src path points to it.
 Example:
 &lt;a href="https://example.com"&gt;
  &lt;img src="images/logo.png" alt="Logo"&gt;
 &lt;/a&gt;
 Folder scheme example:
 project/
  index.html
  images/
    logo.png
  css/
    styles.css
 If using a framework, the image may need to be in a 'public' or 'static' folder so it is served directly.
 In the CSS box model, what is the ordering of the box layers starting at the inside and working
 out?
 Order: Content -> Padding -> Border -> Margin
 Diagram:
 +----------------+
|    Margin      |
 | +------------+ |
 | |  Border    | |
 | | +--------+ | |
 | | |Padding | | |
 | | |Content | | |
 | | +--------+ | |
 | +------------+ |
 +----------------+
 Padding increases size inside border; margin creates space between elements.
 Given the following HTML, what CSS would you use to set the text "trouble" to green and leave
 the "double" text unaffected?
 Given <p><span class="trouble">trouble</span> double</p>, use .trouble { color: green; }
 What will the following code output when executed using a for loop and console.log?
 for (let i = 0; i < 3; i++) { console.log(i); }
 This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output lines: 0 1 2
 How would you use JavaScript to select an element with the id of “byu” and change the text
 color of that element to green?
 Option 1 (direct):
 document.getElementById('byu').style.color = 'green';
 Option 2 (variable):
 const byu = document.getElementById('byu');
 byu.style.color = 'green';
 Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.
 What is the opening HTML tag for a paragraph, ordered list, unordered list, second level
 heading, first level heading, third level heading?
 Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>
 How do you declare the document type to be html?
 <!DOCTYPE html>
 What is valid javascript syntax for if, else, for, while, switch statements?
 if (x > 5) { ... } else { ... } for (...) { ... } while (...) { ... } switch (x) { case 1: ...; break; default: ... }
 What is the correct syntax for creating a javascript object?
 const person = { name: "John", age: 30 };
 Is it possible to add new properties to javascript objects?
 Yes. Example: person.city = "Provo";
 If you want to include JavaScript on an HTML page, which tag do you use?
<script src="script.js"></script>
 Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and
 leave the "fish" text unaffected?
 HTML:
 <p id="animal">animal</p>
 <p id="fish">fish</p>
 Option 1 (direct):
 document.getElementById('animal').textContent = 'crow';
 Option 2 (variable):
 const animal = document.getElementById('animal');
 animal.textContent = 'crow';
 Both work; second is clearer if reusing element.
 Which of the following correctly describes JSON?
 JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: {
 "name": "John", "age": 25 }
 What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps,
 wget, sudo do?
 chmod - change permissions, pwd - print working directory, cd - change directory, ls - list files, vim/nano - text
 editors, mkdir - make directory, mv - move/rename, rm - remove, man - manual, ssh - remote shell, ps 
processes, wget - download files, sudo - run as admin
 Which of the following console command creates a remote shell session?
 ssh
 Which of the following is true when the -la parameter is specified for the ls console command?
 ls -la lists all files (including hidden) in long format
 Which of the following is true for the domain name banana.fruit.bozo.click, which is the top
 level domain, which is a subdomain, which is a root domain?
 TLD: .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
 subdomain)
 Is a web certificate is necessary to use HTTPS.
 Yes, HTTPS requires a valid SSL/TLS certificate.
 Can a DNS A record can point to an IP address or another A record.
 A DNS A record points to an IP address; it should not point to another A record.
 Port 443, 80, 22 is reserved for which protocol?
 443 -> HTTPS, 80 -> HTTP, 22 -> SSH
What will the following code using Promises output when executed?
 Many possibilities depending on promise behavior. Examples:
 1) Promise.resolve('Done').then(console.log) -> 'Done'
 2) Promise.reject('Error').catch(console.error) -> 'Error'
 3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
 4) Async function returns value -> printed when awaited or .then
 5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
 6) Reject handled -> shows error via catch.

What does a div tag do?
 <div> is a container element used to group other HTML elements together. It has no visual
 effect by itself, but helps structure the page for styling and layout using CSS. Commonly used
 for sections, wrappers, and layout blocks.
 <div>
  <p>This is inside a div</p>
 </div>
 In this example, the paragraph is grouped inside a div, which can be styled or positioned together.
 What does the following padding CSS do?
 div {
  padding: 20px;
 }
 This adds 20 pixels of space inside the div, between its content and its border. Padding increases the
 internal spacing, unlike margin which affects the space outside the element.
 What does the following code using arrow syntax function declaration do?
 const greet = (name) => {
  return 'Hello, ' + name;
 }
 console.log(greet('Amur'));
 This defines an arrow function named greet that takes one argument name and returns a greeting
 string.
 const square = x => x * x;
 console.log(square(5));
 Here, square takes a number and returns its square. The arrow syntax allows concise one-line
 functions.
 const add = (a, b) => a + b;
 console.log(add(2, 3));
 This function takes two arguments and returns their sum. Arrow functions are common in modern JS,
 especially with array methods.
 What does the following code using map with an array output?
 const numbers = [1, 2, 3];
 const doubled = numbers.map(n => n * 2);
 console.log(doubled);
 Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.
 const students = [{name: 'Amy'}, {name: 'Ben'}];
 const names = students.map(s => s.name);
 console.log(names);
Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn't change the
 original array.
 What does the following code output using getElementById and addEventListener?
 const button = document.getElementById('myButton');
 button.addEventListener('click', () => {
  alert('Button clicked!');
 });
 getElementById() selects the HTML element with the specified id. addEventListener() waits for an event
 (like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens
 for the event.
 const input = document.getElementById('username');
 input.addEventListener('change', () => {
  console.log('Input changed');
 });
 Listens for a change in an input field and logs a message when the value changes.
 const form = document.getElementById('loginForm');
 form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form submitted');
 });
 Prevents form refresh on submit and handles the event using JS.
 const heading = document.getElementById('title');
 heading.style.color = 'green';
 This example changes the text color of an element with id='title' to green.
 How would you display an image with a hyperlink in HTML?
 <a href="https://www.example.com">
  <img src="images/photo.jpg" alt="Example image">
 </a>
 This code wraps an image inside a hyperlink. Clicking the image takes the user to the linked page.
 Your folder structure could look like this:
 project-folder/
 index.html
 images/
 photo.jpg
 You can also use an external image URL:
 <a href="https://openai.com">
  <img src="https://example.com/image.png" alt="External image">
 </a


## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
