---
title: "Syntax"
description: |
  ... COALESCE( sql_exp1, sql_exp2, ..., sql_expn ) ... Effect Calls the coalesce function as an SQL expression(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The coalesce function can have a comma-separated list with at least
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm"
abapFile: "abensql_coalesce.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "data", "types", "abensql", "coalesce"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - Coalesce Function, ABENSQL_COALESCE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

sql\_func - Coalesce Function

Syntax

... COALESCE( sql\_exp1, sql\_exp2, ..., sql\_expn ) ...

Effect

Calls the coalesce function as an [SQL expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The coalesce function can have a comma-separated list with at least two but no more than 255 arguments sql\_exp1, sql\_exp2, ..., sql\_expn. This function returns the value of the first argument that does not have the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"). If every argument has the null value, the value of the last argument sql\_expn is returned. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The arguments can be any [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) of all dictionary types except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB. The data types of the arguments must either be the same or the data type of one argument must be able to fully represent the value of the other data types. The result has the dictionary type of the argument with the largest value range.

Hints

-   The coalesce function can be used to assign a target object a self-defined value or the result of an expression when null values are read. The type-dependent initial value is assigned by default.
-   A maximum of ten coalesce functions can be nested.
-   A coalesce function is a short form of the following [complex case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_searched_case.htm):
    
    CASE WHEN sql\_exp1 IS NOT NULL THEN sql\_exp1
         WHEN sql\_exp2 IS NOT NULL THEN sql\_exp2
         ...
         ELSE sql\_expn
    END
    
-   The coalesce function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry"). [Table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not bypassed when the coalesce function is used.

Example

The first four [CASE expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_simple_case.htm) return the null value, since no WHEN condition is met and no ELSE is specified. The result of the fifth CASE expression is not a null value and is returned by COALESCE.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS COALESCE( CASE id WHEN 'A' THEN 'a' END,
                        CASE id WHEN 'B' THEN 'b' END,
                        CASE id WHEN 'C' THEN 'c' END,
                        CASE id WHEN 'X' THEN 'x' END  ) AS coalesced
       INTO @FINAL(result).

Executable Example

[SQL Expressions, Coalesce Function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_coalesce_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_func - Coalesce Function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_coalesce_abexa.htm)