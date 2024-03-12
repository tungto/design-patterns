# SOLID PRINCIPLES

## What's SOLID Meaning?

-   5 principles intended to make software designs more understandable, flexible, and maintainable

## Single Responsibility (SRP)

> There should never be more than one reason for a class to change. Every class should have only one responsibility

## Open/ Close

> Software entities should open for extension, but closed for modification

-   class should be extendable without modifying the class itself

## Liskov Substitution

> If S is subtype of T, then object of type T in a program may be replaced with objects of type S without altering any of the desire properties of that program

-   Should not throw error exception
-   Should not alter superclass behavior

## Interface Segregation

> No code should be forced to depend on methods it does not use

-   break interface to smaller, more targeted interfaces

## Dependency Inversion

> High level modules should not import anything from low-level modules. Both should depend on abstractions.
> Abstractions should not depend on details. Details (concrete implementation) should depend on abstractions
