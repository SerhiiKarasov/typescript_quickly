# typescript project how to

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
* run via browser
```
firefox greeter.html
```
* run via node
```
node greeter.js
```
