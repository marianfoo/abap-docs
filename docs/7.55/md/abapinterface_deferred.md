  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [INTERFACE](javascript:call_link\('abapinterface.htm'\)) → 

INTERFACE, DEFERRED

[Short Reference](javascript:call_link\('abapinterface_deferred_lo_shortref.htm'\))

Syntax

INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

This variant of the statement INTERFACE is used to declare the interface intf independently of the location of the actual definition in the program. It does not introduce a declaration part and cannot be ended using ENDINTERFACE. The meaning is the same as for the corresponding variants of the statement [CLASS](javascript:call_link\('abapclass_deferred.htm'\)).

Hint

This variant of the statement INTERFACE can also only be specified in the context described under [INTERFACE](javascript:call_link\('abapinterface.htm'\)).

Example

Use of the interface intf2 in front of the actual declaration in a type reference in the interface intf1. For this, it must be made known using INTERFACE DEFERRED.

INTERFACE intf2 DEFERRED.
INTERFACE intf1.
  ...
  DATA iref TYPE REF TO intf2.
  ...
ENDINTERFACE.
INTERFACE intf2.
  ...
ENDINTERFACE.