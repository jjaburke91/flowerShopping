# Flower Shopping

Here's my solution to the task you gave me. Hopefully this details my knowledge of Angular, HTML, CSS and generally how to build applications.

## Build

The project was built in an environment using Bower, NPM, Grunt and Node JS.

With these installed, run:

```
grunt build
```
Then: 

```
node node-app.js
```
This should build and run all the necessary dependencies. Happy to give an explanation as to what's going on in the grunt tasks if you wish. My favourite tasks in there are *wiredep* and *concat*, both save me a lot of time messing about with imports and / or concatenating files. Re-using those tasks very frequently these days.

Branch "*prod build*" contains all the files required to execute the application if don't wish to go through the build processes.

## Comments on implementation

### Loading API From Local File
Had minor issues with CORS trying to access the live feed. I'm aware of *$http.jsonp* however I couldn't get the end-point executing a callback. Chose to hard-code the feed for sake of time as I believe there are more important skills at test here, though I'm sure there is an alternative solution to using a json callback.

### Slider library
Not the prettiest but simple to use. Hopefully displays to you my knowledge of the limitations of *ng-model* and when to use *$watch*. 

### Project structure
On a larger project I wouldn't make it's structure based on controller, service and directive folders, at least not at the highest level. On a larger project, I'd most likely (though always valid arguments for variations) divide such content into folders that are relevant to specifics components. It's current project strucure seemed appropriate giving the tiny size of the application and the fact it literally has one page.

### Extras
Was tempted on numerous occasions to expand on the styling that's going on however needed to draw a line due to my schedule. [Displaying text over images is something I'd like to have more fun with](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96). Also considered expanding the app to be more responsive, including some media queries to change the grid structure however such code is trivial with media queries.