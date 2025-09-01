  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_names.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Dereferencing Operator, ABENDEREFERENCING_OPERATOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Dereferencing Operator

The content of a data object pointed to by a [data reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_reference_type.htm) is accessed using the dereferencing operator:

dref->\*

The dereferencing operator \->\* can be specified after a [data reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref.

-   If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position.
-   For data reference variables with the generic static type data, it can be specified at any operand position except for:
    -   Replacement parameters behind DEFAULT for methods, functions or events.
    -   [Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_components.htm) of internal tables.
    -   Operand positions where a certain operand type, e.g. an internal table, is expected.

If the data reference variable contains the [null reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_reference_glosry.htm "Glossary Entry"), the uncatchable exception DATREF\_NOT\_ASSIGNED is raised when the dereferencing operator is used. The exception to this is the dereferencing in the statement ASSIGN.

Hint

The dereferencing operator uses the [object component selector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_component_selector.htm).

Example

Uses the dereferencing operator in a general operand position and in the statement ASSIGN. Only in ASSIGN can dref be initial without raising an uncatchable exception.

DATA dref TYPE REF TO data.
dref = NEW i( 111 ).
cl\_demo\_output=>write( |dref->\* { dref->\* }| ).
CLEAR dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>write( |sy-subrc { sy-subrc }| ).
cl\_demo\_output=>display( ).