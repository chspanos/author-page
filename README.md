# Author Page

This project is my author website created using HTML, CSS, JavaScript, ```Knockout.js```, and other front-end technologies. This is very much a Work-In-Progress. I intend to continue adding pages and sections with more content (and perhaps implementing them using different techniques).

## Features (so far)

* The **Home** page was implemented using a [Knockout framework](http://knockoutjs.com). Specifically, Knockout was used to automatically load the publications and featured story elements and to implement all event handlers for the buttons on the page. Features of this page include:
  * A common header and footer with navigation links to other pages and my group blog.
  * A welcome image and message section. Since the message was too long to attractively fit on the page, I incorporated ```Read more``` and ```Read less``` buttons, so the reader may control how much of the text is displayed.
  * A publications section listing my published stories. The publication data is stored in a JSON object and automatically loaded with Knockout.
  * An image carousel to display the magazine covers for all publications. The reader can use the ```<``` and ```>``` buttons to scroll through the covers.
  * A featured story section, which includes a story excerpt and link to the full text. In the future, I may extend this to multiple stories and/or allow the reader to select a story.
* The **About** page employs the same basic layout as the **Home** page, but as its content consists of a single image and text, it is implemented in HTML and CSS.
* As I add additional pages, they will also use the common header and footer. The techniques used to implement the inner content may change depending on what is most appropriate.
* All components are rendered in a responsive manner designed to work on both mobile and desktop.

## Skills (so far)

* The layout is a grid-based layout achieved with ```flexbox```.
* Media queries are employed to resize and rearrange elements depending on device size.
* The **Home** page was implemented using a Model-View-ViewModel (MVVM) framework, which employs ```Knockout``` to handle links between the data model and the page views. Knockout uses ```observables``` to track variables and ```data-bindings``` to link the variables to their corresponding elements in the ```DOM```.

### Viewing my Author Page

The easiest way to view my author page is via my github pages [here](https://chspanos.github.io/author-page).
