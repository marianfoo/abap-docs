---
title: "Dereferencing Operator"
description: |
  The content of a data object pointed to by a data reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm) is accessed using the dereferencing operator: dref-> The dereferencing operator -> can be specified after a data reference variable(https://hel
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendereferencing_operator.htm"
abapFile: "abendereferencing_operator.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "data", "types", "internal-table", "field-symbol", "abendereferencing", "operator"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_names.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Dereferencing%20Operator%2C%20ABENDEREFERENCING_OPERATOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Dereferencing Operator

The content of a data object pointed to by a [data reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm) is accessed using the dereferencing operator:

dref->\*

The dereferencing operator \->\* can be specified after a [data reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref.

-   If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position.
-   For data reference variables with the generic static type data, it can be specified at any operand position except for:
    -   Replacement parameters behind DEFAULT for methods, functions or events.
    -   [Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_components.htm) of internal tables.
    -   Operand positions where an [index table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry") is expected.

If the data reference variable contains the [null reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_reference_glosry.htm "Glossary Entry"), the uncatchable exception DATREF\_NOT\_ASSIGNED is raised when the dereferencing operator is used. The exception to this is the dereferencing in the statement ASSIGN.

Hints

-   The dereferencing operator uses the [object component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_component_selector.htm).
-   For an index access to an internal table referenced by a generically typed data reference variable, it must be assigned to a field symbol typed with [index table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm) first.

Example

Uses the dereferencing operator in a general operand position and in the statement ASSIGN. Only in ASSIGN can dref be initial without raising an uncatchable exception.

DATA dref TYPE REF TO data.
dref = NEW i( 111 ).
cl\_demo\_output=>write( |dref->\* { dref->\* }| ).
CLEAR dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>write( |sy-subrc { sy-subrc }| ).
cl\_demo\_output=>display( ).