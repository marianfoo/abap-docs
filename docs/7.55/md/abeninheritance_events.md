  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninheritance.htm) → 

ABAP Objects - Inheritance and Events

Once declared in a superclass, an event is known in all subclasses of the inheritance tree in which it is visible and can be raised in the methods there.

An event handler can be declared with reference to all classes of the inheritance tree in which the event is visible for the event handler. However, it can only handle events raised in classes that are more specific than or equal to the class for which it is declared. If the event is raised in a method of a superclass of the class for which an event handler is declared, it cannot handle it.

The latter is particularly important when raising static events in static methods, since a static method is always executed in the class in which it was declared (see also [Inheritance and Static Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninheritance_statical.htm)).

Hint

In the case of event handlers for events declared in interfaces, the above also applies to the class in which the interface is included.

Executable Example

[Events in Inheritance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_inheritance_abexa.htm)