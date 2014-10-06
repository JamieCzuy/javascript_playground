basic_javascript
---

Three Ways to Run JavaScript:
---
0. cljs - Command Line Javascript [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
        ./helloworld.js
0. html - In the Browser embedded in html (either inline or as script)
        open helloworld.html
0. node - As a node application [API](http://nodejs.org/api/)
        node helloworld.js
      

cljs - Command Line JavaScript:
---
There are a few different JavaScript engines around. The main ones are:
0. [V8](https://code.google.com/p/v8/)
0. [SpiderMoney](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
0. [Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)
0. [JSC](http://trac.webkit.org/wiki/JSC)

For now (2014-08-31) using JSC - This is the JavaScript engine that comes with
the OS-X on the Mac. It can be run directly from where is is installed:

    /System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Resources/jsc

But it is recommended that you create a link to it:

    sudo ln -s /System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Resources/jsc /bin/jsc

Then is can be run:

    jsc

And it can be put into the top of javascript files to make them runable (after
running `chmod +x` against the js file):

    #!/bin/jsc

Application List:
---

0. App00 - Hello World

    * Just print Hello World in console
