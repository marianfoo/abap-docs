  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Encapsulation

Background

A program that is created based on the procedural programming model and that includes many procedures and global variables is usually difficult to understand because the numerous possible interdependencies of these publicly accessible variables and procedures are difficult to comprehend . The object-oriented approach solves this particular problem by providing visibility sections that are not public. This enables readers who want to get an overview of how the software functions to restrict the overview to the public interfaces of the classes involved. The non-public visibility sections only contain details of the implementation that are not important for a view from the outside.

Of course, this clear overview benefit is only realized in places where the developer makes use of the non-public visibility sections. The same applies to the non-public object generation and final classes, where it is becomes immediately clear whether objects can also be generated outside of the class or whether derived classes can exist.

For the development or the design of an application, it is useful to encapsulate as restrictively as possible initially, and to undo the encapsulation only where required.

Rule

Exploit the benefits of encapsulation

Utilize the encapsulation options provided in the form of non-public visibility sections, non-public object generation, and final classes as much as possible. The use of units that are encapsulated in such a way should preferably be free of side effects.

Details

This simple rule provides practical access to object-oriented programming that results in programs that are more robust and more easily maintainable than if you use procedural ABAP, and without a prolonged object-oriented design phase. To use encapsulation appropriately, do the following:

-   Keep the number of public components of a class as small as possible (components that may be private or protected should therefore be created in the corresponding visibility section as well).

-   Declare public attributes only as READ-ONLY.

-   Consider the private instantiation of classes.

-   Mark classes that are not intended as superclasses as [FINAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_guidl.htm "Guideline").

Conversely, within an encapsulated unit, that is, within a class, you should avoid accessing more global data directly. Within methods, you should generally modify attributes of the class only. Write access to global data outside the class is not recommended. Accessing data in this way should only be done using specially marked methods, if at all. The use of methods of a class should not evoke any side effects outside the class itself.