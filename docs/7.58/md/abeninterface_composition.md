  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterfac.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Nesting%20Interfaces%2C%20ABENINTERFACE_COMPOSITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Nesting Interfaces

Interfaces of ABAP objects can be nested. An [interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterfac.htm) can contain one or more interfaces as components, which themselves can contain interfaces. An interface that contains another interface is called a [nested interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompound_interface_glosry.htm "Glossary Entry"). An interface that is nested within an interface is called a component interface. An interface that does not contain any nested interfaces is called an elementary interface.

All interface components of a nested interface have the same level. If a nested interface i3 contains interface components i2 that themselves are nested, their interface components i1 become interface components of i3. A nested interface contains each interface component exactly once. Even if a component interface is implemented again as a component of another component interface, it still exists only once.

The statement INTERFACES is used for nesting interfaces within an interface definition:

[INTERFACE i3.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface.htm)
[INTERFACES: i1, i2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterfaces.htm)
[ENDINTERFACE.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendinterface.htm)

Here, the interface i3 consists of its components and the interfaces i1 and i2. In the nested interface, the components of the component interfaces are visible using the interface component selector (~). Within the above definition of i3, expressions such as i1~comp or i2~comp are possible. However, independent names can also be defined using the [ALIASES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapaliases.htm) statement.

Using Alias Names   

Within interface definitions, the statement [ALIASES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapaliases.htm) can be used to assign alias names to the components of component interfaces. This makes those that are nested deeper than one level visible within the interface definition.

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

Reference variables typed with reference to a nested interface can be assigned reference variables typed with reference to one of the component interfaces (known as an [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry")). The latter can be used to address the components of the component interfaces. The opposite case cannot be checked statically and must be done using the [casting operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_operator_glosry.htm "Glossary Entry") (?= or CAST) (know as a [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry")).

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