  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [INTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INTERFACE, DEFERRED, ABAPINTERFACE_DEFERRED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

INTERFACE, DEFERRED

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_deferred_lo_shortref.htm)

Syntax

INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

This variant of the statement INTERFACE is used to declare the interface intf independently of the location of the actual definition in the program. It does not introduce a declaration part and cannot be ended using ENDINTERFACE. The meaning is the same as for the corresponding variants of the statement [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_deferred.htm).

Hint

This variant of the statement INTERFACE can also only be specified in the context described under [INTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface.htm).

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