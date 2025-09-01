  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands_names.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Interface%20Component%20Selector%2C%20ABENINTERFACE_COMPONENT_SELECTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Interface Component Selector

A component comp of an interface is accessed using the following name:

intf~comp

In this case, the character ~ is the interface component selector. The name intf of an interface must be to the left of the interface component selector. The name comp of the component must be to the right of the interface component selector.

The name intf~comp identifies the components of interfaces in classes, or component interfaces in linked interfaces.

Programming Guideline

[Address interface components using interface reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ref_interf_ref_guidl.htm "Guideline")

Hint

An interface contains each component exactly once, regardless of its combination of component interfaces. All the interface components are at the same hierarchical level. The name of an interface component is uniquely defined by intf~comp, where intf is always the interface in which the component is declared. A direct chaining of interface names intf1~...~intfn~comp is not possible.

Example

Declaration of interfaces and access to their components.

INTERFACE i1.
  TYPES t1 TYPE string.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  METHODS m2 IMPORTING p1 TYPE i1~t1.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i2~m2.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    ...
    DATA oref TYPE REF TO c1.
    FINAL(p1) = \`...\`.
    oref->i2~m2( p1 = p1 ).
    ...
  ENDMETHOD.
ENDCLASS.