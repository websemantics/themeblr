```
              :
        . :   : :
        ; . : ' : ;
        : : : . : ;  
        ; . : ' : ;
        ____________
      _/_/_.______/ \
     | \__________\_/
     |______   _                         _     _      
          | \ | |__   ___ _ __ ___   ___| |__ | |_ __
          | | | '_ \ / _ \ '_ ` _ \ / _ \ '_ \| | '__|
          | | | | | |  __/ | | | | |  __/ |_) | | |   
          [_] |_| |_|\___|_| |_| |_|\___|_.__/|_|_|  

          Build Bootstrap Themes the Right Way!

```
> Themeblr is a powerful themes builder boilerplate for Bootstrap 4. It provides an easy way to extend Bootstrap 4 styles and plugins using Bootstrap grunt builder. Themeblr can also be used as the basis for developing new css frameworks, for example: [Brimer](https://github.com/websemantics/Brimer).


## Quick start

First, clone or fork this repository and change the detailes inside `package.json` (name, version etc).

Start building a custom Bootstrap theme or a new css framework by overriding Bootstrap components (`scss` folder) and creating jQuery plugins (`js` folder).

Bootstrap provides a comprehensive list of variables to enable great level of freedom to change the look and feel of the framework.

Copy variables from `node_modules/bootstrap/scss/_variables.scss` to
the theme variables file at `scss/_variables` to apply the desired changes.

For greater level of control, override the individual components styles by adding new style rules to the components files at, `scss` folder.


## Javascript

Because Themeblr uses Bootstrap grunt build system, you can write your own jQuery plugins inside `js` folder. These plugins along-side Bootstrap's will be compiled and distributed with the theme.


## build

To build the theme, run Grunt as follows,

```
grunt
```

This will generate the theme files at `dist\css` and `dist\js`.

There are other grunt targets that provide support for generating docs, publishing and deployment of the theme.


## Creators

**Adnan M.Sagar, PhD**

- <https://twitter.com/adnan_msagar>
- <https://websemantics.ca>


## Copyright and license

Code and documentation copyright 2016 the Bootstrap Authors, Twitter, Inc. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
