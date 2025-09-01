---
title: "ABAP Objects - Object Orientation"
description: |
  Object orientation, or rather object-oriented programming, is a problem-solving method that represents the real world in a series of software objects. Object-oriented programming is based on a programming model in which data and functions are unified in objects. The remaining language scope of ABAP
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_orientation.htm"
abapFile: "abenobject_orientation.htm"
keywords: ["do", "while", "if", "method", "class", "data", "object-oriented", "abenobject", "orientation"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Object Orientation, ABENOBJECT_ORIENTATION, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Object Orientation

Object orientation, or rather object-oriented programming, is a problem-solving method that represents the real world in a series of software objects.

Object-oriented programming is based on a programming model in which data and functions are unified in objects. The remaining language scope of ABAP mainly supports procedural programming, where the data is stored separately from objects and where programs that are modularized by procedures access this data.

In the following, a few general terms that are widely used in object orientation and in ABAP Objects are defined.

Objects   

Objects represent abstract or concrete objects of the real world and are the center of object oriented thinking. Objects contain data, called attributes, and provide services in the form of methods (sometimes also referred to as operations or functions). Methods typically operate on private data (also referred to as attributes or object state) that are only visible to the methods of the object. The attributes of an object are therefore not changed directly by the user, but only by the methods of the object. This guarantees the internal consistency of the object.

Classes   

Classes are program code that describes objects. Technically, an object is an instance of a class. In theory, it is possible to create an infinite number of similar objects from a single class definition. Each instance of a class (object) has its own values for all of its attributes.

Object References   

Programs identify and address objects using a unique object reference. They are used to access the attributes and methods of an object.

In object-oriented programming, objects usually have the following characteristics:

Encapsulation   

Objects restrict the external visibility of their resources (attributes and methods) for others. Each object has an interface that determines how other objects or applications can handle it. The implementation of the object is encapsulated, that is, it is not visible to the outside.

Polymorphism   

The same identically named methods can behave differently in different classes. In object-oriented programming, there is a construct called interface that can be used to address methods with the same name in different objects. While the address is always the same using the interface, the execution of the method is class-specific and can differ.

Inheritance   

A class can be derived from another class. A derived class (subclass) inherits the data and methods of its superclass. New methods can be added or existing methods redefined. Redefined methods have the same name and interface as the original method. Their classes are therefore also polymorphous.

Benefits of Object Orientation   

The benefits of object oriented programming include, among other things, meeting the following goals:

-   Complex software systems become easier to understand, since an object-oriented architecture resembles reality to a greater extent than other programming techniques.
-   Changes in object-oriented systems should be possible locally (at class level), without further changes being necessary in other parts of the system. This reduces overall maintenance work.
-   Object-oriented programming supports the reusability of individual components by polymorphism and inheritance.
-   Object-oriented systems require fewer revisions and less maintenance work, because many problems can be discovered and corrected in the design and development phases.

Achieving these goals requires:

-   Object-oriented programming languages
    
    Object-oriented programming techniques do not necessarily depend on object-oriented programming languages. However, they do depend on the implementation of object-oriented constructions in the system kernel.
    
-   Object-oriented tools
    
    Object-oriented tools support the creation of object-oriented programs with object-oriented languages. They are used to store and visualize development objects and the relationships between them.
    
-   Object-oriented modeling
    
    Object-oriented modeling of a software system is the most important requirement and also the most time consuming and most difficult task when achieving the goals mentioned above. Object-oriented design includes more than just object-oriented programming, and offers logical advantages that are independent of the actual implementation.