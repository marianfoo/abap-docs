  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_references.htm) →  [Assignment Rules for Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments Between Object Reference Variables, ABENCONVERSION_REFERENCES_OBJECTS, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments Between Object Reference Variables

Object reference variables are either class references or interface reference variables.

-   [Upcast in Object References](#@@ITOC@@ABENCONVERSION_REFERENCES_OBJECTS_1)
-   [Downcast in Object References](#@@ITOC@@ABENCONVERSION_REFERENCES_OBJECTS_2)

Upcast in Object References   

An [upcast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry") in object references is possible in the following cases:

-   If both static types are classes, the class of the target variable must be the same class or a superclass of the source variable.
-   If both static types are interfaces, the interface of the target variable must be the same interface or a component interface of the source variable.
-   If the static type of the target variable is an interface and the static type of the source variable is a class, the class of the source variable must implement the interface of the target variable.
-   If the static type of the target variable is a class and the static type of the source variable is an interface, the class of the target variable must be the generic type or the root class object.

Example

The statement iref = NEW class( ) is an upcast, because it is followed by an interface reference variable that points to an object of a class.

INTERFACE intf.
ENDINTERFACE.
CLASS class DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
DATA iref TYPE REF TO intf.
START-OF-SELECTION.
  iref = NEW class( ).

Downcast in Object References   

For all cases not specified under the upcast, assignments can only be programmed using a downcast.

Example

Declaration of interfaces and classes, creation of an object in the subclass, and access to the components of the object. In the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object.htm), an upcast occurs implicitly from c2 to iref. The interface reference iref can only be used to access the components declared in the interface i2. Method m1 of the object cannot be called using iref. Once the object reference has been assigned to the class reference cref using a downcast, m1 can be accessed dynamically but not statically.

INTERFACE i1.
  DATA a1 TYPE string.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  ALIASES a1 FOR i1~a1.
  DATA a1 TYPE string.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i2.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    METHODS m1.
ENDCLASS.
...
DATA: iref TYPE REF TO i2,
      cref TYPE REF TO c1.
...
CREATE OBJECT iref TYPE c2.
... iref->a1 ...
... iref->a2 ...
...
IF iref IS INSTANCE OF c1.
  cref ?= iref.
  TRY.
      CALL METHOD cref->('M1').
    CATCH cx\_sy\_dyn\_call\_illegal\_method.
      ...
  ENDTRY.
ENDIF.