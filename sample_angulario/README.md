# 1) create new application
```
ng new angular-tour-of-heroes
```
It creates the following workspace and starter project files:
*    A new workspace, with a root folder named angular-tour-of-heroes.
*    An initial skeleton app project, also called angular-tour-of-heroes (in the src subfolder).
*    An end-to-end test project (in the e2e subfolder).
*    Related configuration files.

# 2) builds and starts the application
```
cd angular-tour-of-heroes
ng serve --open
```

# 3) The page you see is the application shell. 
The shell is controlled by an Angular component named AppComponent. Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.

You'll find the implementation of the shell AppComponent distributed over three files:
*    app.component.ts— the component class code, written in TypeScript.
*    app.component.html— the component template, written in HTML.
*    app.component.css— the component's private CSS styles.

# 4) Using the Angular CLI, generate a new component.
```
ng generate component heroes
```
Component is a decorator function that specifies the Angular metadata for the component.
The CLI generated three metadata properties:
*    selector— the component's CSS element selector
*    templateUrl— the location of the component's template file.
*    styleUrls— the location of the component's private CSS styles.
    
* The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.
* The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
* Always export the component class so you can import it elsewhere ... like in the AppModule.

# 5) Add a new property
* add a property in heroes.component.ts
```
  hero = 'Windstorm';
```
* change heroes.component.html
```
<p>{{hero}}</p>
```
* change app.component.html(app-heroes, because selector has this value)
```
    <app-heroes></app-heroes>
```
# 6) Create an interface.
create a class hero.ts
```
export interface Hero {
    id: number;
    name: string;
}
```
use it in heroes.component.ts
```
import { Hero } from '../hero';
...
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
...
```
# 7) Add input field in the application.
update heroes.component.html
```
<div>
    <label>name:
        <input [(ngModel)]="hero.name" placeholder="name" />
    </label>
</div>
```
* [(ngModel)] is Angular's two-way data binding syntax. Here it binds the hero.name property to the HTML textbox so that data can flow in both directions: from the hero.name property to the textbox, and from the textbox back to the hero.name.Although ngModel is a valid Angular directive, it isn't available by default. It belongs to the optional FormsModule and you must opt-in to using it.
Hence import module in app.module.ts
```
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
...
imports: [
    ...,
  FormsModule,
  ...
],
```

# 8) Declare HeroesComponent
* every component must be declared in exactly one NgModule.
* cli declared compoment in src/app/app.module.ts
```
declarations: [
  AppComponent,
  HeroesComponent
],
```
* cli imported component in src/app/app.module.ts
```
import { HeroesComponent } from './heroes/heroes.component';
```
