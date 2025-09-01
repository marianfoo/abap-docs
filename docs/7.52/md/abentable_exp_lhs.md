---
title: "Note"
description: |
  The constructor operators VALUE and REF used to control the result(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_result.htm) of the table expression cannot be used in writing positions. Example An internal table is prefilled with initial rows, which are overwritten with
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_lhs.htm"
abapFile: "abentable_exp_lhs.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "internal-table", "field-symbol", "abentable", "exp", "lhs"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_expr_func.htm) →  [table\_exp - Table Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) → 

table\_exp - Writing Positions

Table expressions and their [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) can be specified as [writable expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in [result positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_position_glosry.htm "Glossary Entry"). The result of a table expression in these positions is always a temporary field symbol.

-   If a single table expression is specified, or a [chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) whose last position is a table expression, the entire row that was found is modified in the writing position.

-   If a [chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) is specified whose last position is a structure component after a structure component selector, this component is modified in the writing position.

In the case of writes performed on the temporary field symbol, the same rules apply as to a field symbol assigned a table row using [READ TABLE ASSIGNING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm). More specifically, the read-only character of key fields must be respected. Table expressions that return a row of a sorted table or hashed table to writing positions (like the left side of an assignment) or as actual parameters for output parameters always raise an exception.

Note

The constructor operators VALUE and REF used to control the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_result.htm) of the table expression cannot be used in writing positions.

Example

An internal table is prefilled with initial rows, which are overwritten with a value in the [DO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 5 ( ) ).
DO lines( itab ) TIMES.
  itab\[ sy-index \] = sy-index \*\* 2.
ENDDO.

Executable Example

[Table Expressions, Writer Position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_changing_abexa.htm)

Continue
![Example](exa.gif "Example") [Table Expressions, Writer Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_changing_abexa.htm)