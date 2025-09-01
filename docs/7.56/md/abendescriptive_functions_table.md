---
title: "Syntax"
description: |
  ... lines( arg ) ... Effect The built-in(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) table function lines returns the number of lines in an internal table. The argument arg is a functional operand position(https://help.sap.com/doc/abapdocu_756_index_htm
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescriptive_functions_table.htm"
abapFile: "abendescriptive_functions_table.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abendescriptive", "functions", "table"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [itab - Table Functions (table\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_functions.htm) → 

table\_func - lines

Syntax

... lines( arg ) ...

Effect

The [built-in](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) table function lines returns the number of lines in an internal table. The argument arg is a [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry") that expects an internal table. The return value has the type i.

Hint

The function specified here is one of the functions that can be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_functional_positions.htm) if its argument is a single data object.

Example

The number of lines in an internal table filled from a database table must match the number of lines on the database.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(itab).
SELECT COUNT(\*)
       FROM scarr
       INTO @DATA(lines).
ASSERT lines( itab ) = lines.