---
title: "ABAP Objects - Interfaces"
description: |
  The components of a class use their visibility sections(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_visibility.htm) to define the class-specific interfaces(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintf_gen_glosry.htm 'Glossary Entry') of the class t
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterfac.htm"
abapFile: "abeninterfac.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abeninterfac"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Interfaces, ABENINTERFAC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

ABAP Objects - Interfaces

The components of a class use their [visibility sections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_visibility.htm) to define the class-specific [interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintf_gen_glosry.htm "Glossary Entry") of the class to the outside. For example, the public components form the public interface of the class, since all of its attributes and method parameters can be addressed by all users. The protected components form an interface between the class and its subclasses during inheritance.

[Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoo_intf_glosry.htm "Glossary Entry") of ABAP Objects are independent constructs that enable the class-specific [interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintf_gen_glosry.htm "Glossary Entry") to be enhanced by implementing them in classes. Different classes that implement the same interface can all be addressed using identical interfaces. In addition to [inheritance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninheritance.htm), Interfaces are a basis for the [polymorphism](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpolymorphism_glosry.htm "Glossary Entry") of classes, since a method of an interface can behave differently in different classes. [Interface reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") allow users to address different classes in the same way. Interfaces can also be [nested](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_composition.htm).

-   [Defining Interfaces](#abeninterfac-1-------interface-components---@ITOC@@ABENINTERFAC_2)
-   [Implementing Interfaces](#abeninterfac-3-------interface-reference-variables---@ITOC@@ABENINTERFAC_4)
-   [Accessing Objects Using Interface References](#abeninterfac-5-------accessing-the-static-components-of-interfaces---@ITOC@@ABENINTERFAC_6)

Defining Interfaces   

Like classes, interfaces can be [defined](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_interface_definition.htm) either [globally](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_interface_glosry.htm "Glossary Entry") in the [repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm "Glossary Entry") or [locally](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_interface_glosry.htm "Glossary Entry") in an ABAP program.

Interface Components   

Exactly the same [components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components.htm) can be defined in an interface as in a class.

Implementing Interfaces   

Unlike classes, interfaces do not have instances. Instead, they are implemented by classes. The statement [INTERFACES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterfaces.htm) in the declaration part of a class is used to implement these interfaces in a class. This statement may only be specified in the public visibility section of the class, that is, after PUBLIC SECTION. Here, some interface components can be adapted to the requirements of the class. For example, methods can be flagged as abstract or final, or [initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") can be assigned to attributes.

When an interface is implemented in a class, the components of this interface are added to the other components of the public visibility section. A component comp of an implemented interface intf becomes a fully-fledged component of the class and is addressed with the name intf~comp. For use outside and inside the classes, [ALIASES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapaliases.htm) can be used to define alias names for these components.

The class must implement the methods of all implemented interfaces in it. The implementation part of the class must therefore contain a method implementation for each non-abstract and non-optional interface method meth:

[METHOD intf~meth.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod.htm)
  ...
[ENDMETHOD.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendmethod.htm)

Interface methods defined as optional using the addition [DEFAULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm) do not need to be implemented explicitly and react with default behavior when they are called.

Interfaces can be implemented by different classes. Each of these classes is extended by the same set of components. However, the methods of the interface can be implemented differently in each class.

Interfaces enable different classes to be used in a uniform way using [interface reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") (known as polymorphism). Interfaces that are implemented in different classes expand the public interfaces of each class by the same set of components. If a class does not have any class-specific public components, the interfaces define the entire public interface of the class.

Interface Reference Variables   

Object references are used in object reference variables to address [objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject.htm). Instead of creating object reference variables with reference to a [class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses.htm), they can also be created with reference to an interface. This kind of reference variable can contain references to objects of classes that implement the corresponding interface. A reference variable obj with reference to an interface intf is declared using the statement [DATA obj TYPE REF TO intf](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_references.htm). This reference variable allows programs access to exactly those components defined in the interface, that is, the components of an object that are added to the class-specific components by implementing the interface.

Accessing Objects Using Interface References   

To create an object of the class class, a reference variable cref must first be declared with reference to the class. If the class class implements an interface intf, the class reference variable cref can be assigned to the interface reference variable iref as follows:

iref = cref.

The reference in iref now points to the same object as the reference in cref.

It is also possible to directly create an object to which the interface reference variable points initially. In this case, the TYPE addition of the statement CREATE OBJECT must be used to specify a class that implements the interface.

CREATE OBJECT iref TYPE class.

If the interface intf contains an instance attribute attr and an instance method meth, the interface components can be addressed as follows:

Using the class reference variable (not recommended)

-   Access to an attribute attr: cref->intf~attr
-   Call of a method meth: cref->intf~meth

Using the interface reference variable (recommended):

-   Access to an attribute attr: iref->attr
-   Call of a method meth: iref->meth( )

Accessing the Static Components of Interfaces   

In the case of [static components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_component_glosry.htm "Glossary Entry") of interfaces, the name of the interface can only be used to access constants.

-   Accessing a constant const: intf=>const

All other static components of an interface, apart from object references, can be accessed using classes class that implement the interface.

-   Access to a static attribute attr:class=>intf~attr
-   Call of a static method meth: class=>intf~meth( )

Executable Example

[Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_abexa.htm)

Continue
[ABAP Objects - Nesting Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_composition.htm)