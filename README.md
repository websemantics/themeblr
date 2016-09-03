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
>  Whether building a Bootstrap 4 theme or a brand new CSS toolkit, Themeblr has your back. Themeblr provides an easy way to extend Bootstrap 4 styles and plugins using Bootstrap 4 Grunt system. [Brimer](https://github.com/websemantics/Brimer), [Ant Strap](https://github.com/websemantics/ant-strap) and [Semantic Strap](https://github.com/websemantics/semantic-strap) are examples of using Themeblr to build brand new CSS toolkits. Huge thanks to the creators and authors of [Bootstrap](https://getbootstrap.com/) for creating such a magnificent framework and build system.

### [Features](http://websemantics.github.io/themeblr)&nbsp;&nbsp;&nbsp;[Getting Started](#getting-started)&nbsp;&nbsp;&nbsp;[Submit Issue](https://github.com/websemantics/themeblr/issues)


## Getting Started

To build a new project from [Themeblr](https://github.com/websemantics/themeblr), go through the following steps,

1. Clone or fork [Themeblr](https://github.com/websemantics/themeblr) repository into your new project,  `my_project`

  ```bash
  git clone https://github.com/websemantics/themeblr my_project
  ```

2. Install Node packages,

  ```bash
  npm i
  ```

3. Run the `rebrand` script to customize your new project,

  ```bash
  npm run rebrand -- themeblr my_project
  ```

  This will replace instances of the word `themeblr` throughout the project files (including `package.json`, `composer.json`) with the name of the current project, `my_project`,

  Replace all instance of `websemantics` with your Github username,

  ```bash
  npm run rebrand -- websemantics username
  ```

  Lastly, reset the project release number to `1.0.0` as follows,

  ```bash
  npm run rebrand -- 1.0.1 1.0.0
  ```

  Notice that the first number is Themeblr current version, and `1.0.0` is the initial release of the new project,

4. Change project details in `_config.yml` as appropriate,

5. Remove `dist` folder from `.gitignore`,

  This is required so that when the project is released as a Node package, the `dist` folder can this be used to access the compiled release of the toolkit. Themeblr itself does not need to keep this folder in version control.

6. Start building a fancy brand new [CSS framework](#projects) or a new Bootstrap 4 theme,

  This can be done by overriding Bootstrap components inside the `scss` folder, and or creating new jQuery/Bootstrap plugins inside `js` folder.

  Bootstrap provides a great level of freedom changing its look and feel with a comprehensive list of variables. Copy variables from `node_modules/bootstrap/scss/_variables.scss` to
  the theme variables file at `scss/_variables` and apply the desired changes,

  Override the individual components styles by adding new style rules to the components files at `scss` folder,

7. Compile the `docs` folder into project pages,

  ```bash
  npm run prep-release
  ```

  The will generate the docs site at `_gh_pages`,

8. If you have Travis setup, run the `deploy` script

  ```bash
  npm run deploy
  ```

9. Optionally, add new  jQuery/Bootstrap plugins inside `js` folder. These plugins along-side Bootstrap's will be compiled and distributed when the `build` script is executed,

  ```bash
  npm run build
  ```

  Or simply run the default `grunt` task,

  ```bash
  grunt
  ```

  This will generate distribution files at `dist\css` and `dist\js`. It will also copy the distribution files to the docs folder, `docs\dist` and copy Font Awesome to `dist\fonts`.

10.g Finally, for seamless development run the `watch` script,

  ```bash
  npm run watch
  ```

  This will recompile and sync with the browser when changes in the project pages are detected,

There are other Grunt targets with support for generating docs, publishing and deployment can be found in `Gruntfile.js`.


## Font Awesome

Themeblre brings Bootstrap 4 prepackaged with over 634 [Font Awesome](http://fontawesome.io/) icons that can be styled with any CSS you desire, obviously.


## Static Pages

This project supports generating static content for Github Pages. The original [Bootstrap](https://github.com/twbs/bootstrap) project used this feature to generate documentation,

Grunt copies the theme built `css` and `js` files to `docs/dist` and processes any `scss` / `js` files in `docs/assets/scss` / `docs/assets/js` into  `docs/assets/css` and  `docs/assets/js` respectively . You might also want to uncomment `postcss-docs` script in `package.js` to enable `docs` postcss processing.

To build the docs pages run,

```
npm run prep-release
```

The following section provides examples of projects using this feature to generate project static pages.


## Projects

These are few projects built on Themeblr,

[Brimer](https://github.com/websemantics/brimer), The base coat of GitHub, [Primer](http://primercss.io/) built from Bootstrap 4.

[Ant Strap](https://github.com/websemantics/strapant), Bootstrap 4 CSS toolkit inspired by [Ant Design](http://ant.design/).

[Semantic Strap](https://github.com/websemantics/semantic-strap), Bootstrap 4 CSS toolkit inspired by [Semantic-UI](http://semantic-ui.com/),


## TODO

There are quite a number of [steps](#getting-started) to get a Themeblr instance customized to your requirements. An app generator, perhaps using [Yeoman](https://github.com/yeoman/generator) can make this process less painful. Oh well, maybe one day!


## Resource

[Bootstrap 4](http://v4-alpha.getbootstrap.com/), the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.

[Bootstrap 4 Cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/), a quick reference for Bootstrap v4.0.0-alpha.3.

[Flat Colors](http://www.flatdesigncolors.com/), list of flat colors to use with your designs.

[Color calculator](http://razorjam.github.io/sasscolourfunctioncalculator/), sass color function for calculating the Sass color function required to get from one color to another.


## Screenshot

[![Themeblr](https://raw.githubusercontent.com/websemantics/themeblr/master/docs/assets/img/themeblr.png)](https://websemantics.github.io/themeblr/)

Love the Github repository buttons used and want to use them to showcase your own GitHub repositories? the name is Bragit, [Brag It](http://websemantics.github.io/bragit/).


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
