  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

Object Orientation

Object orientation (or, more correctly, object-oriented programming) is a problem-solving method that represents the real world in a series of software objects.

Object-oriented programming is based on a programming model in which data and functions are unified in objects. The remaining language scope of ABAP mainly supports procedural programming, where the data is stored in places other than the objects and where programs that are modularized by procedures access this data.

This document defines a few general terms that are widely used in object orientation and in ABAP Objects.

Objects

Objects represent abstract or concrete objects of the real world. An object is a section of program code that has data (called attributes) and provides services called methods (sometimes also known as operations or functions). Methods typically work with private data in the object (attributes, also known as the object state) that are only visible within the object. This guarantees the internal consistency of the object, since the data is only changed by the methods, not by the consumer. This ensures that the object is consistent in itself.

Classes

Classes are pieces of program code that describe objects. Technically, an object is an instance of a class. In theory, it is possible to create an infinite number of objects from a single class definition. Each instance of a class (an object) has its own values for its attributes.

Object References

Programs identify and address objects using a unique object reference. They make it possible to access the attributes and methods of an object.

In object-oriented programming, objects usually have the following characteristics:

Encapsulation

Objects restrict the external visibility of their resources (attributes and methods). Each object has an interface that determines how other objects or applications can use it. The implementation of the object is encapsulated (not visible outside the class).

Polymorphism

Methods with the same name can behave differently in different classes. In object-oriented programming, interfaces can be used to address methods with the same name in different objects. The form of address always remains the same, but the actual method implementation is class-specific, and can be different in each class.

Inheritance

A class can be derived from another class. A derived class (subclass) inherits the data and methods of its superclass. New methods can be added to a subclass, or existing methods redefined. Redefined methods have the same name and interface as the original method. Their classes are therefore polymorphous, too.

Benefits of Object Orientation

Object orientation has the following advantages:

-   Complex software systems become easier to understand, since an object-oriented architecture resembles reality more closely than other programming techniques.
    

-   Changes in object-oriented systems should be possible locally (at class level), without further changes being necessary in other parts of the system. This reduces the amount of maintenance required.
    

-   Polymorphism and inheritance enable many individual components to be reused.
    

-   Object-oriented systems require fewer revisions and less maintenance, because the majority of problems can be discovered and corrected in the design and development phases.
    

Achieving these goals requires:

-   Object-oriented programming languages
    Object-oriented programming techniques do not necessarily require object-oriented programming languages. However, they do depend on the implementation of object-oriented constructions in the system kernel.

-   Object-oriented tools
    Object-oriented tools help when creating object-oriented programs in object-oriented languages. They make it possible to store and visualize program objects and the relationships between them.

-   Object-oriented modeling
    Object-oriented modeling of a software system is the most important, most time consuming, and most difficult task required to achieve the above goals. Object-oriented design encompasses more than just object-oriented programming, and offers logical advantages that are independent of the eventual implementation.