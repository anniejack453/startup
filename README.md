# StoryTogether
Stories are better when shared.

[My Notes](notes.md)

> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Ever had a fantastic idea for a story, but no idea how to write it on your own? Using StoryTogether, you can begin your tale with a premise of your choosing and let other users submit their own plot ideas. Storytelling with others adds intrigue, unpredictability, and inspiration. Create and explore a new world together. Who knows where your adventure will take you?

### Design

The user starts out with a Login page. Once logged in, they see a home page with the stories they have personally created. They can choose to click the "start your story" button to create a story, or they could click "browse" to browse story ideas from other users. If the title of a story is clicked on, the user is taken to the story page, where the title, premise, and users' thoughts and ideas are visible.

![Design image](startupIdeaPic.jpg)

<!-- ```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design
``` -->

### Key features

- Secure login over HTTPS
- Ability to post stories or suggestions
- Display of stories and suggestions
- Stories and suggestions are persistently stored
- Ability to select story ideas to read
- Updates on stories and suggestions displayed in realtime

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Six HTML pages. One for login, one for home page, one for browse page, one for story page, one for story idea submission page, one for idea submission page. Hyperlinks between different pages.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **React** - Provides login, user functionality by posting stories, ideas, and switching pages.
- **Service** - Backend service with endpoints for:
    * Retrieving icons for stories using https://lordicon.com/ 
    * Retrieving posts
    * Submitting posts
    * Register, login, and logout users. Credentials securely stored in database. Can't submit anything unless authenticated.
- **DB/Login** - Store authentication information, users, story premises and plot ideas in database. 
- **WebSocket** - As users submit story and plot ideas, the pages are updated for all users.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://storytogether260.click/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created 6 html pages.
- [X] **Proper HTML element usage** - I properly used html tags to separate different elements and organized everything in elements.
- [x] **Links** - I had links between pages.
- [x] **Text** - I had textual representation of my site content.
- [x] **3rd party API placeholder** - I had a 3rd party api placeholder to choose an icon for a story.
- [x] **Images** - I had an image on the login page.
- [x] **Login placeholder** - I had a login form placeholder.
- [x] **DB data placeholder** - I had a DB data placeholder.
- [x] **WebSocket placeholder** - I had a WS placeholder.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - The headers, footers, and main content body have been updated with CSS.
- [x] **Navigation elements** - I created a standardized navbar with links to other parts of the website.
- [x] **Responsive to window resizing** - The pages are responsive to window resizing.
- [x] **Application elements** - I have different elements such as forms and buttons that I styled with CSS.
- [x] **Application text content** - I had text content representations of application functions. The text is formatted with CSS.
- [x] **Application images** - I had an image on the login page.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - The startup is bundled using Vite.
- [x] **Components** - Each html page is now a component and renders correctly.
- [x] **Router** - The startup uses a router.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
