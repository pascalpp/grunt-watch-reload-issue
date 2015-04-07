# grunt-watch-reload-issue
Demonstrates an issue with using grunt-contrib-watch to livereload @imported css files

# The Issue

Given this directory structure:

```
/css/
  main.css
  lib/
    general.css
    text.css
```

and where main.css just @imports all the other CSS files:

```
/* main.css */
@import url(lib/general.css);
@import url(lib/text.css);
```

When I make changes to any of the imported files (e.g. css/lib/text.css), livereload is triggering a request to my dev server for /lib/text.css instead of /css/lib/text.css.

# Try It Yourself

Clone this repo locally. 

Run `grunt` to start a grunt-contrib-connect webserver on port 9090 and watch:reload on port 9091. Then open [http://localhost:9090](http://localhost:9090) and follow the instructions shown there.
