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

          Build Bootstrap Stuff the Right Way!

```
>  Whether building a Bootstrap 4 theme or a brand new CSS toolkit, Themeblr has your back. Themeblr provides an easy way to extend Bootstrap 4 styles and plugins using Bootstrap 4 Grunt system. [Brimer](https://github.com/websemantics/Brimer), [StrapAnt](https://github.com/websemantics/strapant) and [Semantic Strap](https://github.com/websemantics/semantic-strap) are few examples of using Themeblr to build brand new CSS toolkits. Huge thanks to the creators and authors of [Bootstrap](https://getbootstrap.com/) for creating such a magnificent framework and build system.

### [Features](http://websemantics.github.io/themeblr)&nbsp;&nbsp;&nbsp;[Getting Started](#getting-started)&nbsp;&nbsp;&nbsp;[Submit Issue](https://github.com/websemantics/themeblr/issues)


## Getting Started

To build a new project from Themeblr, go through the following steps,

- Clone or fork [Themeblr(https://github.com/websemantics/themeblr) repository,

- Install Node packages

```bash
npm i
```

- Run the `rebrand` script

```bash
npm run rebrand
```

This script will replaces most instances of the word `themeblr` in `package.json`, `composer.json` and other files with the name of your current project (folder name). You will need to do search and replace for the rest (TODO: write more about this).

This script will also set the version of your new project to `1.0.0`.

- Remove `dist` folder from `.gitignore`,




Start building a fancy brand new [CSS framework](#projects) or a Bootstrap 4 theme by overriding Bootstrap components inside `scss` folder, and or creating new jQuery/Bootstrap plugins inside `js` folder.

Bootstrap provides a comprehensive list of variables for great level of freedom changing the look and feel of the framework.

Copy variables from `node_modules/bootstrap/scss/_variables.scss` to
the theme variables file at `scss/_variables` to apply the desired changes.

For greater level of control, override the individual components styles by adding new style rules to the components files at `scss` folder.


## Javascript

Because Themeblr uses Bootstrap Grunt build system, you can write your own jQuery/Bootstrap plugins inside `js` folder. These plugins along-side Bootstrap's will be compiled and distributed.


## Font Awesome

Themeblre brings Bootstrap 4 prepackaged with over 634 [Font Awesome](http://fontawesome.io/) icons that can be styled with any CSS you desire.


## build

To build the theme / framework simply run Grunt default target as follows,

```
grunt
```

This will generate distribution files at `dist\css` and `dist\js`. It will also copies the distribution files to the docs folder, `docs\dist`.

Other Grunt targets with support for generating docs, publishing and deployment can be found in `Gruntfile.js`.


## Static Pages

This project supports generating static content for Github Pages. The original project, [Bootstrap](https://github.com/twbs/bootstrap) used this feature to generate documentation.

Grunt copies the theme built `css` and `js` files to `docs/dist` and processes any `scss` / `js` files in `docs/assets/scss` / `docs/assets/js` into  `docs/assets/css` and  `docs/assets/js` respectively . You might also want to uncomment `postcss-docs` script in `package.js` to enable docs postcss processing.

To build the docs separately run,

```
grunt docs
```

The following section provides examples of projects using this feature to generate project static pages.


## Projects

These are few projects built on Themeblr,

[Strapant](https://github.com/websemantics/strapant), [Ant Design](http://ant.design/) inspired CSS framework built with Bootstrap 4.

[Brimer](https://github.com/websemantics/brimer), The base coat of GitHub, [Primer](http://primercss.io/) built from Bootstrap atoms.

[Semantic Strap](https://github.com/websemantics/semantic-strap), Semantic-UI inspired theme for Twitter Bootstrap 4.


## Resource

[Bootstrap 4](http://v4-alpha.getbootstrap.com/), the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.

[Bootstrap 4 Cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/), a quick reference for Bootstrap v4.0.0-alpha.3.

[Flat Colors](http://www.flatdesigncolors.com/), list of flat colors to use with your designs.

[Color calculator](http://razorjam.github.io/sasscolourfunctioncalculator/), sass color function for calculating the Sass color function required to get from one color to another.


## Support

Need help or have a question? post a questions at [StackOverflow](https://stackoverflow.com/questions/tagged/themeblr)

*Please don't use the issue trackers for support/questions.*


## Contributions

We are more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)


## Credits

This project was built using the original Grunt system from [Bootstrap](https://github.com/twbs/bootstrap) including, generating distributions for code, styles and docs. We tried to leave all copyright statements throughout this projects and mentions of the project authors but please feel free to correct any unintended inaccuracies or incorrect reuse of the code/materials; Thank you.


## Copyright and license

Code and documentation copyright 2016 the Bootstrap Authors, Twitter, Inc. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) Web Semantics, Inc.
