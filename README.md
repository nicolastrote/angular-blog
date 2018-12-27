# Angular Fitness App
Best practises for an Angular Fitness App with Node.js, MaterialUI, NgRx, Angularfire, Firebase.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.



## Important Links
 * http://material.angular.io
 * http://karma-runner.github.io


## Preleminary: Homebrew Installation
Brew is a package manager for OSX
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew -v
```
or if you have already brew installed
```$ brew update```


## Git
Install from https://git-scm.com/ or 
```
$ brew install git

```
Make your setup on:
```
$ git config --global color.ui true

$ git config --global user.name "JeanTruchet"

$ git config --global user.email "jean.truchet@r3d.com"
```
Ssh keys creation :
```
$ ssh-keygen -t rsa -C "jean.truchet@r3d.com"
```

## Node.js
```
$ brew install nodejs
$ node -v
```

## Visual Code
 * install Visual Code from : https://code.visualstudio.com/

### Plugins To Install:
  * TSLint
  * Auto close Tag
  * Prettier ou Beautify
  * ESLint
  * Angular 7 Snippets (why not!)


## Workspace
 * Create a Workspace forlder:
```
$ md ~/Worspace/
$ cd ~/Workspace
```

## Angular 6 And Blog Project Creation
```
$ npm install -g @angular/cli
$ ng new angular-blog
// chose "no rooter" and "with scss"
```
Customize your application :
  * change title in the index.html file
  * change the default angular favicon.ico
  * Make a README.md file
  * Make a LICENSE file


## SetUp your GitHub Repository
  * Make an empty repository "angular-blog" on GitHub
Localy on your terminal:
  * cd ~/Workspace/angular-blog
  * git init
  * git add README.md
  * git commit -m "first commit"
  * git remote add origin https://github.com/nicolastrote/angular-blog.git
  * git push -u origin master


## Angular Material
source: https://material.angular.io/guide/getting-started

### Install Material
```
npm install --save @angular/material @angular/cdk
```

### Manage Material Component In App.module.ts File
Import in app.module.ts
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...
imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
```

### Create Material.module.ts : 
```
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
})
export class MaterialModule {}
```
and import it in app.module.ts
```
import { MaterialModule } from './material.module';
...
@NgModule({
...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ]
```

### Material Theme
 Include a theme in style.scss file:

```
@import "@angular/material/prebuilt-themes/indigo-pink.css";
```
 * Error on "~@angular/.."
 * All themes are in node_modules/@angular/material/prebuilt-themes

### Gesture Support
 * install hammerjs
```
npm install --save hammerjs
```
 * inside the main.ts file:
```
import 'hammerjs';
```

### Add Material Icons
 * Add the icon font in your index.html:
 ```
  <head>
    ...
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
 ```
### Create New Module Component And Add It Automaticaly In App.module
``` ng g c auth/signup --module app.module ````

### Main-nav
```
$ ng generate @angular/material:material-nav --name=main-nav
```