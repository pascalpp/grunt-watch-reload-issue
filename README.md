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

When I make changes to any of the imported files (e.g. lib/text.css), livereload is triggering a request to my dev server for WIP
