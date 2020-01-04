# simplest typescript project how to

*  install typescript compiler
```
npm install -g typescript
```
* sample code -> greeter.ts
```
function greeter() {
    return "Hello World";
}

document.body.textContent = greeter();
```
* compile(transpile) code to js
```
tsc greeter.ts
```
* create html file -> greeter.html
```
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```
* run via browser(ctrl + shift + k to see the webconsole)
```
firefox greeter.html
```
* run via node
```
node greeter.js
```
# Typescript project structure
* package.json - dependencies
```
{
  "name": "sample project",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "serve",
    "tsc": "tsc"
  },
  "devDependencies": {
    "@types/node": "^10.5.1",
    "typescript": "~3.0.0"
  }
}
```
* tsconfig.json - typescript compiler's options
```
{
  "compilerOptions": {
  	"module": "commonjs",
    "outDir": "./dist",
    "target": "es2015",
    "lib": [
      "es2015"
    ]
  }
}
`lib` specify the symbols only. Libs: github.com/Microsoft/TypeScript/tree/master/lib.   
`module` choose between commonjs and amd formats of module split.  
```
* necessary commands 
```
npm install
//for console npm install @types/node
npm run tsc
// to check
// npm run tsc --project tsconfig.json
```
# vue.js project
* src/components - ui components. vue files
* sec/lib - app logic
* .env - environment variables
* babel.config.js - babel configuration

# source map how to
* tsconfig.json
```
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist",
    "target": "es5",
    "module": "es6",
    "lib": [
      "dom",
      "es2018"
    ]
  }
}
```

# how to inherit base tsconfig.json
```
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "module": "commonjs"
  }
}
```
# run scripts to deploy package
```
{
  "name": "TypeScript_Quickly_chapter9",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "serve",
    "compileDeploy": "tsc && npm run deploy",
    "deploy": "copyfiles -f src/browser/*.html src/browser/*.css dist"
  },
  "devDependencies": {
    "@types/node": "^10.5.1",
    "serve": "^10.0.1",
    "copyfiles": "^2.1.0",
    "typescript": "~3.0.0"
  }
}
```
* https://docs.npmjs.com/misc/scripts (postpack, prepack, publish, preinstall, install, version, preversion, postversion, pretest, test, posttest)
* start - starts web server on the localhost's port 500. 