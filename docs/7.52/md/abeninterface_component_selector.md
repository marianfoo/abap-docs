  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_names.htm) → 

Interface Component Selector

A component comp of an interface is accessed using the following name:

intf~comp

In this case, the character ~ is the interface component selector. The name intf of an interface must be on the left of the interface component selector. The name comp of the component must be on the right of the interface component selector.

The name intf~comp identifies the components of interfaces in classes or component interfaces in composite interfaces.

Programming Guideline

[Address interface components using interface reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ref_interf_ref_guidl.htm "Guideline")

Note

An interface contains each component exactly once, regardless of how it is composed of component interfaces. All the interface components are at the same hierarchical level. The name of an interface component is uniquely defined using intf~comp. intf is always the interface in which the component is declared. A direct chaining of interface names intf1~...~intfn~comp is not possible.

Example

Declares interfaces and accesses their components.

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
...
DATA oref TYPE REF TO c1.
oref->i2~m2( ... ).
...
CLASS c1 IMPLEMENTATION.
  METHOD i2~m2.
    ...
  ENDMETHOD.
ENDCLASS.