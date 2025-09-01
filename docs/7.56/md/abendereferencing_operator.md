  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Dereferencing Operator

The content of a data object pointed to by a [data reference](javascript:call_link\('abendata_reference_type.htm'\)) is accessed using the dereferencing operator:

dref->\*

The dereferencing operator \->\* can be specified after a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") dref.

-   If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position.
-   For data reference variables with the generic static type data, it can be specified at any operand position except for:
    -   Replacement parameters behind DEFAULT for methods, functions or events.
    -   [Components](javascript:call_link\('abenitab_components.htm'\)) of internal tables.
    -   Operand positions where a certain operand type, e.g. an internal table, is expected.

If the data reference variable contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), the uncatchable exception DATREF\_NOT\_ASSIGNED is raised when the dereferencing operator is used. The exception to this is the dereferencing in the statement ASSIGN.

Hint

The dereferencing operator uses the [object component selector](javascript:call_link\('abenobject_component_selector.htm'\)).

Example

Uses the dereferencing operator in a general operand position and in the statement ASSIGN. Only in ASSIGN can dref be initial without raising an uncatchable exception.

DATA dref TYPE REF TO data.
dref = NEW i( 111 ).
cl\_demo\_output=>write( |dref->\* { dref->\* }| ).
CLEAR dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>write( |sy-subrc { sy-subrc }| ).
cl\_demo\_output=>display( ).