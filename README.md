# Angular Fitness App
Best practises for an Angular Fitness App with Node.js, MaterialUI, NgRx, Angularfire, Firebase.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

![alt text](https://github.com/nicolastrote/angular-blog/blob/master/src/app/img/first-view.png)


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
npm install --save @angular/animations
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
* create a file named material.module.ts
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

###  Flex-Layout
Installation :
```
npm install @angular/flex-layout @angular/cdk --save
```
src/app/app.module.ts
```
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
// other imports 
@NgModule({
  imports: [FlexLayoutModule],
  ...
})
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

### Main-nav
```
$ ng generate @angular/material:material-nav --name=main-nav --module app
```

### Roboto Font
read source : https://material.angular.io/guide/typography

### Home and Footer Component
```
ng g c home --module app
ng g c footer --module app
```
plus add home and footer in app.component.html
```
```

### Kill All Angular server on Mac 
```
sudo lsof -t -i tcp:4200 | xargs kill -9
```

## More Icons
source: https://www.npmjs.com/package/@mdi/angular-material
 * Download the mdi.svg file and place it in /assets/
 * Install the @mdi/angular-material npm package
```
npm install @mdi/angular-material
```
 * write in material.module.ts
```
import { MatIconModule, MatIconRegistry,...} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ 
    ...
    // Required by the Angular Material icon module
    MatIconModule,
    HttpClientModule,
  ],
  exports: [ 
    ...
    MatIconModule,
  ],
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
```
 * In angular.json
 ```
{
   // ...
   "architect": {
     "build": {
       "options": {
         "assets": [
           { "glob": "**/*", "input": "./assets/", "output": "./assets/" },
           { "glob": "favicon.ico", "input": "./", "output": "./" },
           { "glob": "mdi.svg", "input": "../node_modules/@mdi/angular-material", "output": "./assets" }
         ]
       }
     }
   }
   // ...
}
 ```