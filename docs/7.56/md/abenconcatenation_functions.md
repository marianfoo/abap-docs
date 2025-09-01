---
title: "Syntax"
description: |
  ... concat_lines_of( table = itab sep = sep ) ... Effect This built-in function(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) concatenates all line content of an internal table itab and returns the result as a character string. itab expect
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconcatenation_functions.htm"
abapFile: "abenconcatenation_functions.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "internal-table", "abenconcatenation", "functions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocess_functions.htm) → 

string\_func - concat\_lines\_of

Syntax

... concat\_lines\_of( *\[*table =*\]* itab *\[*sep = sep*\]* ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) concatenates all line content of an internal table itab and returns the result as a character string. itab expects an [index table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry") with character-like line type. itab is a [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

sep can be used to specify a string as a separator, which is then inserted between the lines. sep is a [character-like expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If sep is not specified, the line content of the internal table is appended to each other directly. If the line types or the argument sep have a fixed length, trailing blanks are ignored.

The formal parameter table must be specified explicitly only if sep is also specified.

The return value has the type string.

Hint

The [concatenation operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && can be used to concatenate elementary character strings.

Example

This function returns "ABAP Objects".

TYPES: c80  TYPE c LENGTH 80,
       itab TYPE TABLE OF c80 WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 'ABAP' ) ( 'Objects' ) ).
cl\_demo\_output=>display(
  concat\_lines\_of( table = itab sep = \` \` ) ).