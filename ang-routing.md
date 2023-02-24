# Routing

## Setting up

1. Define the base path 
   1. `<base href="/">` 
2. Import RouterModule
   1. Use RouterModule.forRoot() for app routes (one time only!)
   2. Use RouterModule.forChild() for feature routes

## Configuring routes

1. path: Url segment(s) for the route
   - No leading slash
   - ' ' for default rout; '**' for wildcard route
   - Casing matters
  
  component
  - Not a string name; not enclosed in quotes
  - Component must be imported

Order matters!


``` ts
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
```

## Placing the Template

Add the RouterOutlet to the directive
- Identifies where to display the routed component's template
- ` <router-outlet></router-outlet>`
- Primary RouterOutlet normally specified in the App component's template

## Configuration

Import RouterModule
- Use RouterModule.forChild()
- configure the routes
- Order matters

## Naming routes

Use a common root path name for related feature routs
- products
- products/:id
- products/:id/edit

## Activate route with code

Import the Router
Adds a dependency on the router service
- as a constructor parameter

Use the Router service navigate method

Pass in a link parameters array
- first element is the root Url segment
- All other elemments are route parameters or additional Url segments
- ` this.router.navigate(['/welcome']);`
- ` this.router.navigateByUrl('/welcome');`

## Routing Modules

Seperate out routes to their own routing module
Keep route path order in mind


## Required parameters

**Configure**

`{ path: 'products/:id, component: ProductDetailComponent' }` 

**Populate**

`<a [routerLink]="['/products', product.id]">...</a>` 
`this.router.navigate(['/products', this.product.id]);`

**Read**

`this.route.snapshot.paramMap.get('id')` 

## Optional Parameters

Pass optional or complext in information to a route
- search component passes search criteria to the list component to filter data

**Not configured**

`{ path: 'products', component: ProductListComponent }` 
\
**Populate**

`<a [routerLink]="['/products', {start: startDate, end: endDate}]">...</a>` 

`this.router.navigate(['/products', {start: startDate, end: endDate}]);`
