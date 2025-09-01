---
title: "Inheritance"
description: |
  Background Inheritance is the method by which subclasses are derived from a superclass while inheriting the components of the superclass. A subclass can be made more specific by declaring new components and redefining instance methods. ABAP Objects supports simple inheritance, in which a class can h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninheritance_guidl.htm"
abapFile: "abeninheritance_guidl.htm"
keywords: ["do", "while", "if", "method", "class", "abeninheritance", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobj_oriented_guidl.htm) → 

Inheritance

Background

Inheritance is the method by which subclasses are derived from a superclass while inheriting the components of the superclass. A subclass can be made more specific by declaring new components and redefining instance methods. ABAP Objects supports simple inheritance, in which a class can have multiple subclasses but only one direct superclass. (Despite this, the interface concept does enable something like multiple inheritance to take place, at least with respect to attributes and method declarations. Method implementations, on the other hand, are not inherited when an interface is included.) This creates an inheritance hierarchy in an inheritance tree, with a unique path running from each subclass to a root class. In ABAP Objects, all classes are subclasses of the predefined abstract root class object. Final classes (classes defined using the addition FINAL) close the bottom of a path in the inheritance tree.

Rule

Avoid using deep inheritance hierarchies

Avoid using deep inheritance hierarchies, since they are often difficult to maintain.

Details

Deep inheritance hierarchies are examples of successful reuse, but are also the source of maintenance problems, due to the complexity inherent in the large number of classes involved.

-   The behavior of classes deep down in the inheritance hierarchy is difficult to predict, since they potentially inherit from a large number of methods.

-   Classes with a lot of subclasses exert great influence on the system as a whole, making the consequences of modifications to a superclass hard to predict.

-   A large number of subclasses may also indicate an unsuitable level of abstraction.

To prevent unintended reuse of your classes by inheritance, we recommend that you use final classes to close the paths of inheritance trees.

Note

If your main aim is to exploit the possibilities of polymorphism, interfaces are often a preferable solution to inheritance. If all you want to do is use interfaces, method interfaces should be used instead of abstract classes. These can be used to create composite interfaces. In ABAP, on the other hand, a composite interface is impossible due to the nature of simple inheritance using classes.