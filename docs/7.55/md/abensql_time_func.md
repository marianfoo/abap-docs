---
title: "Syntax"
description: |
  ... TIMS_IS_VALID( time ) ... Variants: 1. ... TIMS_IS_VALID( time )(#!ABAP_VARIANT_1@1@) Effect These SQL functions perform operations with arguments of the built-in data type TIMS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The arguments of the
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_time_func.htm"
abapFile: "abensql_time_func.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "data", "types", "abensql", "time", "func"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_special_functions.htm) →  [sql\_func - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_date_time_functions.htm) → 

sql\_func - Time Functions

Syntax

... TIMS\_IS\_VALID( time ) ...

Variants:

[1\. ... TIMS\_IS\_VALID( time )](#!ABAP_VARIANT_1@1@)

Effect

These SQL functions perform operations with arguments of the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) of matching data types can be specified as actual parameters. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except TIMS\_IS\_VALID returns a null value.

Variant 1

... TIMS\_IS\_VALID( time )

Effect

The function TIMS\_IS\_VALID determines whether the specification time contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). A valid time produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

The use of this function requires the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_753.htm).

Example

Applying the time function to a time column of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_TIME\_FUNCTIONS executes this access to the table and represents the result.

DATA(time1) = sy-timlo.
...
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id      = 'X'
  tims1 = time1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS tims1 AS time1,
              tims\_is\_valid( tims1 ) AS valid1
       INTO @DATA(result).