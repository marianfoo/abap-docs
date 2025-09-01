  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSIGN, ELSE UNASSIGN, ABAPASSIGN_ELSE_UNASSIGN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ASSIGN, ELSE UNASSIGN

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_shortref.htm)

Syntax

... ELSE UNASSIGN ...

Effect

This addition to the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) unassigns the field symbol if the assignment is not successful. The addition can be specified for the following variants of the ASSIGN statement:

-   [dynamic assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_dobj.htm)
-   [assignments of dynamic components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm)
-   [dynamic access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_access.htm)
-   [assignment of a table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@)

These variants set sy-subrc. If the assignment is not successful, and sy-subrc is set to 4 or 8, then:

-   If ELSE UNASSIGN is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the ASSIGN statement.
-   If ELSE UNASSIGN is not specified, the field symbol keeps its previous state.

Hints

-   For the [static variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_static_dobj.htm) of the ASSIGN statement, the addition ELSE UNASSIGN is implicitly set and cannot be used explicitly.
-   Using the addition for the variants listed above harmonizes the their behavior with the behavior of the static variant.
-   Setting a field symbol to unassigned in case of an unsuccessful assignment prevents unintentional use of a previous assignment,
-   Using the addition allows the success of the assignment to be checked using the predicate [\>IS ASSIGNED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_assigned.htm) as well as checking sy-subrc.
-   The assign variants for constructor expressions [NEW](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_1@1@) or [CASE](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_2@2@) are either successful or lead to an exception and the addition ELSE UNASSIGN is not possible.
-   If the addition is specified, but the assignment is interrupted by an exception and sy-subrc is not set, the field symbol keeps its previous state.
-   The addition is not possible for obsolete variants of the ASSIGN statement.

Example

After a successful assignment, the next assignment is not successful because of a wrong dynamic specification. sy-subrc is set to 4 and the field symbol that was assigned before is unassigned.

FINAL(field) = \`exists\`.
ASSIGN ('field') TO FIELD-SYMBOL(<fs>) ELSE UNASSIGN.
ASSERT sy-subrc = 0 AND <fs> IS ASSIGNED.
ASSIGN ('exists') TO <fs> ELSE UNASSIGN.
ASSERT sy-subrc = 4 AND <fs> IS NOT ASSIGNED.