# Angular Exam Full Detailed Cheatsheet (With Explanations for Every Section)
A complete, deeply explained Angular reference. Every section begins with a clear definition of **what it is** and **why it matters**.

---

# 1. Angular CLI Commands
**What this section means:**  
The Angular CLI is a command‑line tool used to generate, serve, build, and test Angular applications. These commands automate setup and ensure proper project structure.

### Installation
```
npm install -g @angular/cli
```
Installs the CLI globally.

### Workspace / Project Commands
```
ng new my-app
ng serve -o
ng build
ng build --prod
```
Creates projects, runs a dev server, and generates production builds.

### Generate (Schematics)
```
ng g component my-component
ng g module my-module
ng g service my-service
ng g directive my-directive
ng g pipe my-pipe
ng g guard my-guard
ng g interceptor my-interceptor
```
Creates files with correct boilerplate and folder structure.

### Testing / Linting
```
ng test
ng e2e
ng lint
```
Runs tests and code-quality checks.

---

# 2. Angular Project Structure
**What this means:**  
This section explains the purpose of each major file and folder in an Angular project.

- **main.ts** – App entry point.
- **app.module.ts** – Root module and configuration.
- **app.component.*** – Root UI.
- **assets/** – Static files.
- **environments/** – Environment‑specific variables.

---

# 3. Decorators
**What this means:**  
Decorators are metadata tags that tell Angular how to treat classes (component, module, service). They define behavior and configuration.

### @Component
Defines a UI block.

### @NgModule
Defines a module.

### @Injectable
Marks a class available for dependency injection.

### @Input / @Output
Controls component communication.

---

# 4. Component Basics
**What this means:**  
Components are the building blocks of Angular apps: they contain UI + logic.

```ts
export class ExampleComponent {
  title = 'Hello';
  doSomething() {}
}
```

---

# 5. Data Binding
**What this means:**  
Binding connects the template (HTML) to the component (TypeScript).

Types:
- Interpolation
- Property binding
- Event binding
- Two‑way binding

---

# 6. Directives
**What this means:**  
Directives modify the DOM—either adding/removing elements or changing appearance/behavior.

Structural = change DOM layout.  
Attribute = modify existing elements.

---

# 7. Services
**What this means:**  
Services hold logic like API calls or data manipulation. They keep components clean.

```ts
@Injectable({ providedIn: 'root' })
export class ExampleService {}
```

---

# 8. HTTP Client
**What this means:**  
This section covers how Angular communicates with servers (APIs) using HttpClient.

Supports GET, POST, PUT, DELETE, etc.

---

# 9. Routing
**What this means:**  
Routing controls navigation between pages/screens inside your Angular app.

Includes route definitions, navigation, parameters, and lazy loading.

---

# 10. Guards
**What this means:**  
Guards protect routes by controlling access (authentication, permissions, etc.).

`CanActivate`, `CanDeactivate`, `Resolve`, etc.

---

# 11. Lifecycle Hooks
**What this means:**  
Hooks give you insight into a component’s life from creation to destruction.

Examples:
- ngOnInit – initialization
- ngOnDestroy – cleanup
- ngAfterViewInit – view ready

---

# 12. Pipes
**What this means:**  
Pipes are formatting tools used in templates—transforming data (uppercase, currency, date, custom logic).

```ts
@Pipe({ name: 'example' })
export class ExamplePipe {}
```

---

# 13. Forms (Highly Detailed)
**What this means:**  
Angular offers two form systems:
- Template‑driven (easy, HTML‑based)
- Reactive forms (powerful, TS‑based, best for large apps)

Both provide validation, state tracking, and event handling.

---

# 14. Interceptors
**What this means:**  
Interceptors modify HTTP requests/responses globally (e.g., adding tokens, logging, error handling).

```ts
export class AuthInterceptor implements HttpInterceptor {}
```

---

# 15. RxJS Essentials
**What this means:**  
RxJS provides Observables used heavily in Angular for async events like HTTP, timers, streams, and user input.

Operators include map, filter, tap, switchMap, mergeMap, etc.

---

# 16. Change Detection
**What this means:**  
Change Detection tracks when Angular should update the UI.
- Default: detects on everything.
- OnPush: updates only on reference changes.

Good for performance.

---

# 17. Architecture Best Practices
**What this means:**  
Guidelines for scalable app structure:
- CoreModule for singletons.
- SharedModule for reusable UI.
- Feature modules.
- Services for logic, components for UI.
- Reactive forms for complex data.

---

# 18. Deployment
**What this means:**  
How to build and distribute your Angular application.

```bash
ng build --configuration production
```
Outputs minified, optimized files.

---

If you want, I can also add:
- Angular Signals (new)
- Standalone Components
- Dependency Injection deep dive
- State management (NgRx, BehaviorSubject patterns)
- Flow diagrams for routing, DI, lifecycle
- Exam question bank


---

# 19. Example: Filtering a List of Products by Price, Date, and Name
**What this means:**  
This section demonstrates how to filter arrays in Angular using pipes or component logic. Filtering is common in dashboards, product lists, and search screens.

---

## **Product Interface**
```ts
export interface Product {
  name: string;
  price: number;
  date: Date;
}
```

---

## **Example Product List**
```ts
products: Product[] = [
  { name: 'Laptop', price: 1200, date: new Date('2024-01-03') },
  { name: 'Phone', price: 800, date: new Date('2024-02-10') },
  { name: 'Tablet', price: 500, date: new Date('2023-12-12') },
  { name: 'Monitor', price: 300, date: new Date('2024-01-20') }
];
```

---

# **A. Filtering in Component (Recommended)**
**What this means:**  
Filtering inside a component is more flexible and performant than using a pipe.

## **Component.ts**
```ts
filteredProducts: Product[] = [];

filter = {
  name: '',         // text input
  minPrice: 0,      // number input
  maxPrice: 99999,  // number input
  startDate: null,  // date input
  endDate: null     // date input
};

ngOnInit() {
  this.filteredProducts = this.products; // initial load
}

applyFilters() {
  this.filteredProducts = this.products
    .filter(p =>
      (!this.filter.name ||
        p.name.toLowerCase().includes(this.filter.name.toLowerCase()))
    )
    .filter(p => p.price >= this.filter.minPrice)
    .filter(p => p.price <= this.filter.maxPrice)
    .filter(p => !this.filter.startDate || p.date >= new Date(this.filter.startDate))
    .filter(p => !this.filter.endDate || p.date <= new Date(this.filter.endDate));
}
```

---

## **Component.html**
```html
<input placeholder="Search name" [(ngModel)]="filter.name" (input)="applyFilters()" />

<input type="number" placeholder="Min price" [(ngModel)]="filter.minPrice" (change)="applyFilters()" />
<input type="number" placeholder="Max price" [(ngModel)]="filter.maxPrice" (change)="applyFilters()" />

<input type="date" [(ngModel)]="filter.startDate" (change)="applyFilters()" />
<input type="date" [(ngModel)]="filter.endDate" (change)="applyFilters()" />

<ul>
  <li *ngFor="let p of filteredProducts">
    {{ p.name }} - ${{ p.price }} - {{ p.date | date:'shortDate' }}
  </li>
</ul>
```

---

# **B. Filtering with a Custom Pipe (Less Recommended)**
**What this means:**  
You can also create a pipe to filter lists in the template, but Angular discourages this for performance reasons.

## **filter-products.pipe.ts**
```ts
@Pipe({ name: 'filterProducts', pure: false })
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[], filter: any): Product[] {
    if (!products) return [];
    return products
      .filter(p => !filter.name || p.name.toLowerCase().includes(filter.name.toLowerCase()))
      .filter(p => p.price >= filter.minPrice)
      .filter(p => p.price <= filter.maxPrice)
      .filter(p => !filter.startDate || p.date >= new Date(filter.startDate))
      .filter(p => !filter.endDate || p.date <= new Date(filter.endDate));
  }
}
```

## **Usage in HTML**
```html
<li *ngFor="let p of products | filterProducts: filter">
  {{ p.name }} - {{ p.price }}
</li>
```

---

# Summary of Filtering
- **Name filtering** → uses `.includes()` ignoring case.
- **Price filtering** → numeric comparison.
- **Date filtering** → convert input to `Date` and compare.
- Works in both component logic and custom pipes.

---

If you want, I can add:
- sorting (ASC/DESC)
- pagination example
- reactive form version of filtering
- search debounce with RxJS

---

# 20. Parent Component With Two Children (Sidebar Filter + Product List)
**What this means:**  
This section demonstrates a common Angular architecture pattern:  
A parent component holds the state (filters + product list), and two child components communicate upward and downward using **@Input** and **@Output**.

- **Child 1:** Sidebar → emits filter changes
- **Child 2:** Product List → receives filtered data
- **Parent:** Manages data + filtering logic

This is the cleanest, scalable pattern for dashboards, catalogs, and admin panels.

---

# Folder Structure
```
parent/
  parent.component.ts
  parent.component.html
  parent.component.css

  sidebar/
    sidebar.component.ts
    sidebar.component.html

  product-list/
    product-list.component.ts
    product-list.component.html
```

---

# **A. Parent Component (Holds Data + Filtering)**
## parent.component.ts
```ts
import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  products: Product[] = [
    { name: 'Laptop', price: 1200, date: new Date('2024-01-03') },
    { name: 'Phone', price: 800, date: new Date('2024-02-10') },
    { name: 'Tablet', price: 500, date: new Date('2023-12-12') },
    { name: 'Monitor', price: 300, date: new Date('2024-01-20') }
  ];

  filteredProducts: Product[] = [...this.products];

  applyFilters(filter: any) {
    this.filteredProducts = this.products
      .filter(p => !filter.name || p.name.toLowerCase().includes(filter.name.toLowerCase()))
      .filter(p => p.price >= filter.minPrice)
      .filter(p => p.price <= filter.maxPrice)
      .filter(p => !filter.startDate || p.date >= new Date(filter.startDate))
      .filter(p => !filter.endDate || p.date <= new Date(filter.endDate));
  }
}
```

---

## parent.component.html
```html
<div class="layout">
  <app-sidebar (filterChanged)="applyFilters($event)"></app-sidebar>

  <app-product-list [products]="filteredProducts"></app-product-list>
</div>
```

**Explanation:**
- Sidebar sends filters **up** using `(filterChanged)`
- List receives filtered data **down** using `[products]`

---

# **B. Sidebar Component (Emits Filters Up)**
## sidebar.component.ts
```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Output() filterChanged = new EventEmitter<any>();

  filter = {
    name: '',
    minPrice: 0,
    maxPrice: 99999,
    startDate: null,
    endDate: null
  };

  updateFilters() {
    this.filterChanged.emit(this.filter);
  }
}
```

---

## sidebar.component.html
```html
<h3>Filters</h3>

<input placeholder="Search name" [(ngModel)]="filter.name" (input)="updateFilters()" />

<input type="number" placeholder="Min price" [(ngModel)]="filter.minPrice" (input)="updateFilters()" />
<input type="number" placeholder="Max price" [(ngModel)]="filter.maxPrice" (input)="updateFilters()" />

<label>Start date</label>
<input type="date" [(ngModel)]="filter.startDate" (change)="updateFilters()" />

<label>End date</label>
<input type="date" [(ngModel)]="filter.endDate" (change)="updateFilters()" />
```

**Explanation:**  
Every input triggers `updateFilters()` → sends updated filters to the parent.

---

# **C. Product List Component (Receives Filtered Products)**
## product-list.component.ts
```ts
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}
```

---

## product-list.component.html
```html
<h3>Product List</h3>

<ul>
  <li *ngFor="let p of products">
    {{ p.name }} - ${{ p.price }} - {{ p.date | date:'shortDate' }}
  </li>
</ul>
```

**Explanation:**  
The list displays whatever list the parent provides. No logic here.

---

# Why This Pattern Is Important
This pattern demonstrates:
- **Parent → Child communication** using @Input
- **Child → Parent communication** using @Output
- **Centralized filtering logic** in parent
- **Reusable child components** (sidebar + list)
- **Separation of concerns** (UI separated from logic)

This is a core Angular architectural pattern and is often tested in interviews/exams.

---

If you want, I can add:
- A version using **Reactive Forms** instead of ngModel
- A version using **RxJS BehaviorSubject** for shared state
- A version using **Signals** (Angular 17+) for filtering
- A diagram explaining data flow visually


---

# 21. Reactive Forms Version (Sidebar)
**What this means:**
Using Reactive Forms gives you strong programmatic control over form state, validation, and async behaviors. It's preferred for complex UIs and for integrating RxJS operators (debounce, distinctUntilChanged, etc.).

## sidebar-reactive.component.ts
```ts
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-reactive',
  templateUrl: './sidebar-reactive.component.html'
})
export class SidebarReactiveComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<any>();

  form = new FormGroup({
    name: new FormControl(''),
    minPrice: new FormControl(0),
    maxPrice: new FormControl(99999),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.filterChanged.emit(value);
      });
  }
}
```

## sidebar-reactive.component.html
```html
<form [formGroup]="form">
  <input formControlName="name" placeholder="Search name" />
  <input type="number" formControlName="minPrice" placeholder="Min price" />
  <input type="number" formControlName="maxPrice" placeholder="Max price" />
  <input type="date" formControlName="startDate" />
  <input type="date" formControlName="endDate" />
</form>
```

**Explanation:** The parent receives debounced filter updates, reducing frequent re-renders and API calls.

---

# 22. RxJS Debounce + switchMap Filtering (Useful for server-side search)
**What this means:**
When filtering triggers network requests, use RxJS to debounce user input and switchMap to cancel previous requests.

## parent-rxjs.service.ts (Service that calls API)
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  search(filters: any): Observable<Product[]> {
    // Build query params from filters
    const params: any = {};
    if (filters.name) params.name = filters.name;
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;
    if (filters.startDate) params.startDate = filters.startDate;
    if (filters.endDate) params.endDate = filters.endDate;

    return this.http.get<Product[]>('/api/products', { params });
  }
}
```

## parent-rxjs.component.ts
```ts
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ProductService } from './parent-rxjs.service';

@Component({ selector: 'app-parent-rxjs', templateUrl: './parent-rxjs.component.html' })
export class ParentRxjsComponent implements OnInit {
  products$ = new Subject<Product[]>();
  private filters$ = new Subject<any>();

  constructor(private svc: ProductService) {}

  ngOnInit() {
    this.filters$
      .pipe(
        debounceTime(300),
        switchMap(filters => this.svc.search(filters))
      )
      .subscribe(res => this.products$.next(res));
  }

  onFilterChanged(filters: any) {
    this.filters$.next(filters);
  }
}
```

## parent-rxjs.component.html
```html
<app-sidebar-reactive (filterChanged)="onFilterChanged($event)"></app-sidebar-reactive>
<app-product-list [products]="products$ | async"></app-product-list>
```

**Explanation:**
- `debounceTime` waits for user to pause typing.
- `switchMap` cancels the previous HTTP request if a new filter arrives.
- This pattern prevents race conditions and reduces unnecessary load on the server.

---

# 23. Angular Signals Example (Angular 16+ / 17+)
**What this means:**
Signals are a reactive primitive for state that can simplify change detection and reactivity. Use `signal()` and `computed()` to derive values.

## parent-signals.component.ts
```ts
import { Component, signal, computed } from '@angular/core';

@Component({ selector: 'app-parent-signals', templateUrl: './parent-signals.component.html' })
export class ParentSignalsComponent {
  products = signal<Product[]>([
    { name: 'Laptop', price: 1200, date: new Date('2024-01-03') },
    { name: 'Phone', price: 800, date: new Date('2024-02-10') }
  ]);

  filter = signal({ name: '', minPrice: 0, maxPrice: 99999, startDate: null, endDate: null });

  filteredProducts = computed(() => {
    const f = this.filter();
    return this.products().filter(p =>
      (!f.name || p.name.toLowerCase().includes(f.name.toLowerCase())) &&
      p.price >= f.minPrice &&
      p.price <= f.maxPrice &&
      (!f.startDate || p.date >= new Date(f.startDate)) &&
      (!f.endDate || p.date <= new Date(f.endDate))
    );
  });

  updateFilter(partial: Partial<any>) {
    this.filter.update(current => ({ ...current, ...partial }));
  }
}
```

## parent-signals.component.html
```html
<app-sidebar (filterChanged)="updateFilter($event)"></app-sidebar>
<app-product-list [products]="filteredProducts()"></app-product-list>
```

**Explanation:**
- Signals keep local reactive state without manual subscriptions.
- `computed()` recalculates only when inputs change, and templates can call `filteredProducts()` to get current value.

---

# 24. Grandparent → Parent → Child Communication Example (Using Service)
**What this means:**
For deeply nested components, a shared service with a `BehaviorSubject` or `signal` is cleaner than cascading @Output/@Input events.

## shared-filter.service.ts
```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedFilterService {
  private filterSubject = new BehaviorSubject<any>({ name: '', minPrice: 0, maxPrice: 99999 });
  filter$ = this.filterSubject.asObservable();

  updateFilter(f: any) { this.filterSubject.next(f); }
}
```

## grandparent.component.ts (emits filter)
```ts
@Component({ selector: 'app-grandparent', template: '<app-parent></app-parent>' })
export class GrandparentComponent {
  constructor(private shared: SharedFilterService) {}

  someAction() {
    this.shared.updateFilter({ name: 'Phone' });
  }
}
```

## parent.component.ts (subscribes to filter)
```ts
@Component({ selector: 'app-parent', template: '<app-product-list [products]="products"></app-product-list>' })
export class ParentComponent implements OnInit {
  products: Product[] = [];

  constructor(private shared: SharedFilterService) {}

  ngOnInit() {
    this.shared.filter$.subscribe(f => {
      // apply filter to products (or call server)
    });
  }
}
```

**Explanation:**
- `SharedFilterService` decouples components and provides a single source of truth.
- Use `takeUntil` or `async` pipe to avoid memory leaks when subscribing.

---

# 25. ASCII Diagram: Data flow (Parent + Sidebar + List)
```
+-----------------+        filterChanged()       +-----------------+
|                 | ----------------------------> |                 |
|   Sidebar (C1)  |                              |   Parent (P)    |
| emit filter obj | <---------------------------- |  applies filter |
+-----------------+      [filteredProducts]      +-----------------+
                                                     |
                                                     |
                                                     v
                                              +-----------------+
                                              |                 |
                                              | Product List(C2) |
                                              |   @Input products |
                                              +-----------------+
```

---

# 26. Standalone Components (Angular 14+)
**What this means:**  
Standalone components let you build Angular features without NgModules. They simplify structure and are ideal for micro frontends or libraries.

## Example
```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standalone-card',
  standalone: true,
  template: `<div>{{ title }}</div>`
})
export class StandaloneCardComponent {
  @Input() title = '';
}
```

**Usage:**
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneCardComponent } from './standalone-card.component';

bootstrapApplication(StandaloneCardComponent);
```

---

# 27. Dependency Injection Deep Dive
**What this means:**  
Dependency Injection (DI) is how Angular provides services and dependencies to classes. Understanding scopes and providers is key for scalable apps.

- **@Injectable({ providedIn: 'root' })**: Singleton, app-wide.
- **@Injectable({ providedIn: 'any' })**: New instance per lazy-loaded module.
- **Providers array in component/module**: New instance per component/module.

## Example: Service with DI
```ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  // ...
}
```

## Tree-shakable Providers
Angular removes unused services from production builds if not referenced.

---

# 28. State Management Patterns
**What this means:**  
State management helps coordinate data across components. Use simple RxJS patterns for small apps, or NgRx for large, complex state.

## A. BehaviorSubject Pattern
```ts
@Injectable({ providedIn: 'root' })
export class StateService {
  private count$ = new BehaviorSubject<number>(0);
  count = this.count$.asObservable();

  setCount(val: number) { this.count$.next(val); }
}
```

## B. NgRx Store (Very Brief)
- **Actions**: Describe events.
- **Reducers**: Update state.
- **Selectors**: Read state.
- **Effects**: Handle side effects (API calls).

```ts
// Action
defineAction('[Counter] Increment');
// Reducer
on(increment, state => ({ ...state, count: state.count + 1 }));
// Selector
select(state => state.counter.count);
```

---

# 29. Exam Question Bank (Sample)
**What this means:**  
Practice questions to test your Angular knowledge.

1. **Explain the difference between template-driven and reactive forms.**
2. **How does Angular’s change detection work?**
3. **What is the purpose of an interceptor? Give an example.**
4. **Describe the @Input and @Output decorators.**
5. **How do you implement a custom pipe?**
6. **What are signals and how do they differ from RxJS observables?**
7. **How would you share data between deeply nested components?**
8. **What is a standalone component and when would you use it?**
9. **Describe the role of the async pipe.**
10. **How do you optimize Angular app performance?**

---

# 30. Flow Diagrams (Routing, DI, Lifecycle)
**What this means:**  
Visualize how Angular handles routing, dependency injection, and component lifecycle.

## A. Routing Flow
```
User clicks link
   ↓
Router parses URL
   ↓
Finds matching Route
   ↓
Loads Component/Module
   ↓
Runs Guards/Resolvers
   ↓
Displays View
```

## B. DI Flow
```
Component requests Service
   ↓
Injector checks Providers
   ↓
Returns existing instance or creates new
   ↓
Injects into Component
```

## C. Lifecycle Flow
```
Component Created
   ↓
ngOnInit
   ↓
ngAfterViewInit
   ↓
ngOnDestroy (on removal)
```

---

# 31. Final Exam Tips
- Practice writing code by hand (no IDE autocompletion).
- Memorize key decorators and lifecycle hooks.
- Understand RxJS basics (map, filter, switchMap).
- Be able to explain parent/child communication.
- Know how to set up a basic Angular app from scratch.
- Review error messages and debugging steps.

---

# Good luck!

This sheet covers all major Angular exam topics, with practical code and explanations. For printable or PDF versions, or to request more topics/examples, just ask!


