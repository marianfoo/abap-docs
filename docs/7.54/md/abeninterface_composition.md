  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) →  [Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterfac.htm) → 

Nesting Interfaces

Interfaces can be nested. An [interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterfac.htm) can include one or more interfaces as components, which can contain interfaces themselves. An interface that includes another interface is called a [compound interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompound_interface_glosry.htm "Glossary Entry"). An interface nested within an interface is called a component interface. An interface that does not contain any compound interfaces is called an elementary interface.

All interface components of a compound interface have the same level. If a compound interface i3 contains compound interfaces i2, its interface components i1 becomes interface components of i3. A compound interface includes each interface component exactly once. A component interface exists only once even if it is used again as a component of another component interface.

The statement INTERFACES is used for nesting interfaces within an interface definition:

[INTERFACE i3.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterface.htm)
  [INTERFACES: i1, i2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm)
[ENDINTERFACE.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendinterface.htm)

Here, the interface i3 consists of its components and the interfaces i1 and i2. In the compound interface, the components of the component interfaces are visible using the interface component selector (~). Within the above definition of i3, expressions such as i1~comp or i2~comp are possible. However, independent names can be defined using the [ALIASES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapaliases.htm) statement.

Using Alias Names

Within interface definitions, the statement [ALIASES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapaliases.htm) can be used to assign alias names to the components of component interfaces. This makes those nested to a depth greater than one level visible within the interface definition.

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

Reference variables typed with reference to a compound interface can be assigned reference variables typed with reference to one of the component interfaces (known as an [up cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry")). The latter can be used to address the components of the component interfaces. The opposite case cannot be checked statically and must be done using the [casting operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencasting_operator_glosry.htm "Glossary Entry") (?= or CAST) (know as a [down cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry")).

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

When a nested interface is implemented in a class, all associated interfaces are implemented in the class at the same level irrespective of their nesting hierarchy and the class must implement all methods only once.

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

You can always assign reference variables using up cast. Class reference variables for classes that implement a compound interface can be assigned to all interface references that are typed with reference to an associated interface component. In the class, the interface reference variables know only the components of their respective interfaces. The same applies for assignments between interface reference variables. It is possible to access components using the interface component selector, but this is not recommended. Compound expressions such as cref->i3~i2~comp2 or cref->i3~i2~i3~comp3 are not possible.