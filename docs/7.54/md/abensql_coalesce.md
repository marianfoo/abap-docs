---
title: "Syntax"
description: |
  ... COALESCE( sql_exp1, sql_exp2, ..., sql_expn ) ... Effect Calls the Coalesce function as an SQL expression(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The Coalesce function can have a comma-separated list with at least
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm"
abapFile: "abensql_coalesce.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "data", "types", "abensql", "coalesce"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_functions.htm) → 

sql\_exp - sql\_coalesce

Syntax

... COALESCE( sql\_exp1, sql\_exp2, ..., sql\_expn ) ...

Effect

Calls the Coalesce function as an [SQL expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The Coalesce function can have a comma-separated list with at least two but no more than 255 arguments sql\_exp1, sql\_exp2, ..., sql\_expn. This function returns the values of the first argument, which does not have the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"). If every argument has the null value, the value of the last argument sql\_expn is returned. A blank must be placed after the opening parenthesis and before the closing parenthesis.

The arguments can be any [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) of all dictionary types except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB. The data types of arguments must either be the same or the data type of one argument must represent the value of the other data types. The result has the dictionary type of the argument with the largest value range.

Notes

-   The Coalesce function can be used to assign a target object a self-defined value or the result of an expression, when null values are read. The type-dependent initial value is assigned by default.

-   A maximum of 10 Coalesce functions can be nested.

-   A Coalesce function is a short from of the following [complex case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_searched_case.htm):

CASE WHEN sql\_exp1 IS NOT NULL THEN sql\_exp1
     WHEN sql\_exp2 IS NOT NULL THEN sql\_exp2
     ...
     ELSE sql\_expn
END

-   The Coalesce function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry"). [Table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") is not bypassed when the Coalesce function is used.

Example

The first three [CASE expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_simple_case.htm) return the null value, since no WHEN condition is met and no ELSE is specified. The result of the fourth CASE expression is not a null value and is returned by COALESCE.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS COALESCE( CASE id WHEN 'A' THEN 'a' END,
                        CASE id WHEN 'B' THEN 'b' END,
                        CASE id WHEN 'B' THEN 'b' END,
                        CASE id WHEN 'X' THEN 'x' END  ) AS coalesced
       INTO @DATA(result).

Executable Example

[SQL Expressions, Coalesce Function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_coalesce_abexa.htm)

Continue
![Example](exa.gif "Example") [SQL Expressions, Coalesce Function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_coalesce_abexa.htm)