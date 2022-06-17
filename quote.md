# Note for Audit

## DI -Dependency injection

## Life cycle

## OOP - class - interface - extends - implements

[Read](https://stackoverflow.com/questions/38834625/whats-the-difference-between-extends-and-implements-in-typescript)

## Routing

- Feature Modules, Child Routes and Services

## contructor vs ngOnInit

- Why should ngOnInit be used, if we already have a constructor?
  > The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses.
- Angular, or better Dependency Injector (DI), analyses the constructor parameters and when it creates a new instance by calling new MyClass() it tries to find providers that match the types of the constructor parameters, resolves them and passes them to the constructor
  > ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
- Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work"
  >  Important to note that @Input values are not accessible in the constructor (Thanks to @tim for suggestion in comments)
  >  Angular bootstrap process consists of the two major stages:

1. constructing components tree
2. running change detection

[Detail](https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit)

## State management

[Link](https://haidnguyen.dev/vi/state-management-with-ngrx-in-angular/)



## Typescript 
### abstract class, protected, private, readonly,...
