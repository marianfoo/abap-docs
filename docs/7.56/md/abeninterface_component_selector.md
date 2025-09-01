  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Interface Component Selector

A component comp of an interface is accessed using the following name:

intf~comp

In this case, the character ~ is the interface component selector. The name intf of an interface must be to the left of the interface component selector. The name comp of the component must be to the right of the interface component selector.

The name intf~comp identifies the components of interfaces in classes, or component interfaces in linked interfaces.

Programming Guideline

[Address interface components using interface reference variables](javascript:call_link\('abenclass_ref_interf_ref_guidl.htm'\) "Guideline")

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
...
DATA oref TYPE REF TO c1.
oref->i2~m2( ... ).
...
CLASS c1 IMPLEMENTATION.
  METHOD i2~m2.
    ...
  ENDMETHOD.
ENDCLASS.