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
