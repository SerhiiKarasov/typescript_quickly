# simples typescript project how to

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
```
