  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) →  [Open SQL - SQL Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_functions.htm) → 

sql\_exp - sql\_coalesce

Syntax

... COALESCE( arg1, arg2, ..., argn ) ...

Effect

Calls the Coalesce function as an [SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) or operand of an expression in Open SQL. The Coalesce function can have a comma-separated list with at least two but no more than 255 arguments arg1, arg1, ..., argn. This function returns the values of the first argument, which does not have the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"). If every argument has the null value, the value of the last argument argn is returned. A blank must be placed after the opening parenthesis and before the closing parenthesis. There are a number of possible arguments:

-   Columns and other expressions with any dictionary types except for ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, and STRING.

-   Literals, host variables, and host expressions of ABAP types, except for string and xstring

The data types of arguments must either be the same or the data type of one argument must represent the value of the other data types. The result has the dictionary type of the argument with the largest value range.

Notes

-   The coalesce function can be used to assign a target object a self-defined value or the result of an expression, when null values are read. The type-dependent initial value is assigned by default.

-   A maximum of 10 coalesce functions can be nested.

-   A coalesce function is a short from of the following [complex case distinction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_searched_case.htm):

CASE WHEN arg1 IS NOT NULL THEN arg1
     WHEN arg2 IS NOT NULL THEN arg2
     ...
     ELSE argn
END

Example

The first three [CASE expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_simple_case.htm) return the null value, since no WHEN condition is met and no ELSE is specified. The result of the fourth CASE expression is not a null value and is returned by COALESCE.

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

[SQL Expressions, Coalesce Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_coalesce_abexa.htm)