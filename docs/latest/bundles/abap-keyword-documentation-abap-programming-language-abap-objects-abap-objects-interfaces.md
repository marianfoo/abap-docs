# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Objects / ABAP Objects - Interfaces

Included pages: 2


### abeninterfac.htm

---
title: "ABAP Objects - Interfaces"
description: |
  The components of a class use their visibility sections(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_visibility.htm) to define the class-specific interfaces(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenintf_gen_glosry.htm 'Glossary Entry') of t
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterfac.htm"
abapFile: "abeninterfac.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abeninterfac"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Interfaces%2C%20ABENINTERFAC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Interfaces

The components of a class use their [visibility sections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_visibility.htm) to define the class-specific [interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenintf_gen_glosry.htm "Glossary Entry") of the class to the outside. For example, the public components form the public interface of the class, since all of its attributes and method parameters can be addressed by all users. The protected components form an interface between the class and its subclasses during inheritance.

[Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_intf_glosry.htm "Glossary Entry") of ABAP Objects are independent constructs that enable the class-specific [interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenintf_gen_glosry.htm "Glossary Entry") to be enhanced by implementing them in classes. Different classes that implement the same interface can all be addressed using identical interfaces. In addition to [inheritance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance.htm), Interfaces are a basis for the [polymorphism](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpolymorphism_glosry.htm "Glossary Entry") of classes, since a method of an interface can behave differently in different classes. [Interface reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") allow users to address different classes in the same way. Interfaces can also be [nested](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_composition.htm).

-   [Defining Interfaces](#abeninterfac-1-------interface-components---@ITOC@@ABENINTERFAC_2)
-   [Implementing Interfaces](#abeninterfac-3-------interface-reference-variables---@ITOC@@ABENINTERFAC_4)
-   [Accessing Objects Using Interface References](#abeninterfac-5-------accessing-the-static-components-of-interfaces---@ITOC@@ABENINTERFAC_6)

Defining Interfaces   

Like classes, interfaces can be [defined](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_interface_definition.htm) either [globally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_interface_glosry.htm "Glossary Entry") in the [repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_glosry.htm "Glossary Entry") or [locally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_interface_glosry.htm "Glossary Entry") in an ABAP program.

Interface Components   

Exactly the same [components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_components.htm) can be defined in an interface as in a class.

Implementing Interfaces   

Unlike classes, interfaces do not have instances. Instead, they are implemented by classes. The statement [INTERFACES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces.htm) in the declaration part of a class is used to implement these interfaces in a class. This statement may only be specified in the public visibility section of the class, that is, after PUBLIC SECTION. Here, some interface components can be adapted to the requirements of the class. For example, methods can be flagged as abstract or final, or [initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstart_value_glosry.htm "Glossary Entry") can be assigned to attributes.

When an interface is implemented in a class, the components of this interface are added to the other components of the public visibility section. A component comp of an implemented interface intf becomes a fully-fledged component of the class and is addressed with the name intf~comp. For use outside and inside the classes, [ALIASES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapaliases.htm) can be used to define alias names for these components.

The class must implement the methods of all implemented interfaces in it. The implementation part of the class must therefore contain a method implementation for each non-abstract and non-optional interface method meth:

[METHOD intf~meth.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod.htm)
  ...
[ENDMETHOD.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendmethod.htm)

Interface methods defined as optional using the addition [DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm) do not need to be implemented explicitly and react with default behavior when they are called.

Interfaces can be implemented by different classes. Each of these classes is extended by the same set of components. However, the methods of the interface can be implemented differently in each class.

Interfaces enable different classes to be used in a uniform way using [interface reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") (known as polymorphism). Interfaces that are implemented in different classes expand the public interfaces of each class by the same set of components. If a class does not have any class-specific public components, the interfaces define the entire public interface of the class.

Interface Reference Variables   

Object references are used in object reference variables to address [objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject.htm). Instead of creating object reference variables with reference to a [class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses.htm), they can also be created with reference to an interface. This kind of reference variable can contain references to objects of classes that implement the corresponding interface. A reference variable obj with reference to an interface intf is declared using the statement [DATA obj TYPE REF TO intf](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_references.htm). This reference variable allows programs access to exactly those components defined in the interface, that is, the components of an object that are added to the class-specific components by implementing the interface.

Accessing Objects Using Interface References   

To create an object of a class class that implements an interface intf to which an interface reference variable iref points initially, the name of the class must be specified:

FINAL(iref) = NEW class(  ).

or

CREATE OBJECT iref TYPE class.

Also, a reference variable cref with reference to the class class that points to an object of the class can be used. A class reference variable cref of a class that implements an interface intf can be assigned to the interface reference variable iref:

iref = cref.

The reference in iref now points to the same object as the reference in cref.

If the interface intf contains an instance attribute attr and an instance method meth, the interface components can be addressed as follows:

Using the class reference variable (not recommended)

-   Access to an attribute attr: cref->intf~attr
-   Call of a method meth: cref->intf~meth

Using the interface reference variable (recommended):

-   Access to an attribute attr: iref->attr
-   Call of a method meth: iref->meth( )

Accessing the Static Components of Interfaces   

In the case of [static components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_component_glosry.htm "Glossary Entry") of interfaces, the name of the interface can only be used to access constants.

-   Accessing a constant const: intf=>const

All other static components of an interface, apart from object references, can be accessed using classes class that implement the interface.

-   Access to a static attribute attr:class=>intf~attr
-   Call of a static method meth: class=>intf~meth( )

Executable Example

[Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_abexa.htm)

Continue
[ABAP Objects - Nesting Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_composition.htm)


### abeninterface_composition.htm

---
title: "ABAP Objects - Nesting Interfaces"
description: |
  Interfaces of ABAP objects can be nested. An interface(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterfac.htm) can contain one or more interfaces as components, which themselves can contain interfaces. An interface that contains another interface is called a nested inter
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_composition.htm"
abapFile: "abeninterface_composition.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abeninterface", "composition"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects.htm) →  [ABAP Objects - Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterfac.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Nesting%20Interfaces%2C%20ABENINTERFACE_COMPOSITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Nesting Interfaces

Interfaces of ABAP objects can be nested. An [interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterfac.htm) can contain one or more interfaces as components, which themselves can contain interfaces. An interface that contains another interface is called a [nested interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompound_interface_glosry.htm "Glossary Entry"). An interface that is nested within an interface is called a component interface. An interface that does not contain any nested interfaces is called an elementary interface.

All interface components of a nested interface have the same level. If a nested interface i3 contains interface components i2 that themselves are nested, their interface components i1 become interface components of i3. A nested interface contains each interface component exactly once. Even if a component interface is implemented again as a component of another component interface, it still exists only once.

The statement INTERFACES is used for nesting interfaces within an interface definition:

[INTERFACE i3.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface.htm)
[INTERFACES: i1, i2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces.htm)
[ENDINTERFACE.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendinterface.htm)

Here, the interface i3 consists of its components and the interfaces i1 and i2. In the nested interface, the components of the component interfaces are visible using the interface component selector (~). Within the above definition of i3, expressions such as i1~comp or i2~comp are possible. However, independent names can also be defined using the [ALIASES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapaliases.htm) statement.

Using Alias Names   

Within interface definitions, the statement [ALIASES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapaliases.htm) can be used to assign alias names to the components of component interfaces. This makes those that are nested deeper than one level visible within the interface definition.

INTERFACE i2.
  INTERFACES i1.
  ALIASES alias21 FOR i1~comp1.
ENDINTERFACE.
INTERFACE i3.
  INTERFACES i2.
  ALIASES alias31 FOR i2~alias21.
  ALIASES alias32 FOR i2~comp2.
ENDINTERFACE.

Accessing Interface Reference Variables   

Reference variables typed with reference to a nested interface can be assigned reference variables typed with reference to one of the component interfaces (known as an [upcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenup_cast_glosry.htm "Glossary Entry")). The latter can be used to address the components of the component interfaces. The opposite case cannot be checked statically and must be done using the [casting operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencasting_operator_glosry.htm "Glossary Entry") (?= or CAST) (know as a [downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm "Glossary Entry")).

INTERFACE i1.
  DATA comp1.
ENDINTERFACE.
INTERFACE i2.
  DATA comp2.
  INTERFACES i1.
ENDINTERFACE.
INTERFACE i3.
  INTERFACES i2.
ENDINTERFACE.
DATA: iref1 TYPE REF TO i1,
      iref2 TYPE REF TO i2,
      iref3 TYPE REF TO i3.
iref2 = iref3.
iref1 = iref2.
\* recommended access:
... iref1->comp1 ...
... iref2->comp2 ...
\* this access is not recommended:
... iref2->i1~comp1 ...
... iref3->i2~comp2 ...

Implementing Nested Interfaces in Classes   

When a nested interface is implemented in a class, all involved interfaces are implemented in the class at the same level, regardless of their nesting hierarchy, and the class must implement each method only once.

INTERFACE i1.
  DATA comp1.
  METHODS meth1.
ENDINTERFACE.
INTERFACE i2.
  DATA comp2.
  INTERFACES i1.
ENDINTERFACE.
INTERFACE i3.
  DATA comp3.
  INTERFACES i2.
ENDINTERFACE.
CLASS class DEFINITION.
  PUBLIC SECTION.
    INTERFACES i3.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD i1~meth.
    ...
  ENDMETHOD.
ENDCLASS.
DATA cref TYPE REF TO class.
DATA iref1 TYPE REF TO i1.
DATA iref2 TYPE REF TO i2.
DATA iref3 TYPE REF TO i3.
iref1 = iref2 = iref3 = cref.
\* recommended access:
... iref1->comp1 ...
... iref2->comp2 ...
... iref3->comp3 ...
\* this access is not recommended:
... cref->i1~comp1 ...
... cref->i2~comp2 ...
... cref->i3~comp3 ...
... iref3->i1~comp1 ...
... iref3->i2~comp2 ...
... iref2->i1~comp1 ...

Assignments using upcasts are always possible. Class reference variables for classes that implement a nested interface can be assigned to all interface reference variables that are typed with reference to an associated interface component. In the class, the interface reference variables know only the components of their interface. The same applies to assignments between interface reference variables. It is possible to access components using the interface component selector, but it is not recommended. Nested expressions such as cref->i3~i2~comp2 or cref->i3~i2~i3~comp3 are not possible.
