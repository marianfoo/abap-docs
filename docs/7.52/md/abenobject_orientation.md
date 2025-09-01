  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) → 

Object Orientation

Object orientation (or, more correctly, object-oriented programming) is a problem-solving method that represents the real world in a series of software objects.

Object-oriented programming is based on a progamming model in which data and functions are unified in objects. The remaining language scope of ABAP mainly supports procedural programming, where the data is stored at other places than the objects and where programs that are modularized by procedures access this data.

This document defines a few general terms that are widely used in object orientation and in ABAP Objects.

Objects

Objects represent abstract or concrete objects of the real world. An object is a section of program code that has data (called attributes) and provides services called methods (sometimes also known as operations or functions). Methods typically work with private data in the object (attributes, also known as the object state), that are only visible within the object. This guarantees the internal consistency of the object, since the data is only changed by the methods, not by the user. This ensures that the object is consistent in itself.

Classes

Classes are program code that describes objects. Technically, an object is an instance of a class. In theory, you can create an infinite number of objects from a single class definition. Each instance of a class (object) has its own values for its attributes.

Object References

In a program, you identify and address objects using a unique object reference. They allow you to access the attributes and methods of an object.

In object-oriented programming, objects usually have the following characteristics:

Encapsulation

Objects restrict the external visibility of their resources (attributes and methods). Each object has an interface that determines how other objects or applications can use it. The implementation of the object is encapsulated (not visible outside the class).

Polymorphism

Methods with the same name can behave differently in different classes. In object-oriented programming, you can use interfaces to address methods with the same name in different objects. The form of address always remains the same, but the actual method implementation is class-specific, and can be different in each class.

Inheritance

You can derive a class from another class. A derived class (subclass) inherits the data and methods of its superclass. You can add new methods to a subclass, or redefine existing methods. Redefined methods have the same name and interface as the original method. Their classes are therefore polymorphous, too.

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
    Object-oriented tools help you create object-oriented programs in object-oriented languages. They allow you to store and visualize your program objects and the relationship between them.

-   Object-oriented modeling
    Object-oriented modeling of a software system is the most important, most time consuming, and most difficult task required to achieve the above goals. Object-oriented design encompasses more than just object-oriented programming, and offers logical advantages that are independent of the eventual implementation.