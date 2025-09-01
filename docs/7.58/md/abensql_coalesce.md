  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - SQL Functions](javascript:call_link\('abenabap_sql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20Coalesce%20Function%2C%20ABENSQL_COALESCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - Coalesce Function

Syntax

... COALESCE( sql\_exp1, sql\_exp2, ..., sql\_expn ) ...

Effect

Calls the coalesce function as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in ABAP SQL. The coalesce function can have a comma-separated list with at least two but no more than 255 arguments sql\_exp1, sql\_exp2, ..., sql\_expn. This function returns the value of the first argument that does not have the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). If every argument has the null value, the value of the last argument sql\_expn is returned. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The arguments can be any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) of all dictionary types except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB. The data types of the arguments must either be the same or the data type of one argument must be able to fully represent the value of the other data types. The result has the dictionary type of the argument with the largest value range.

Hints

-   The coalesce function can be used to assign a target object a user-defined value or the result of an expression when null values are read. The type-dependent initial value is assigned by default.
-   A maximum of ten coalesce functions can be nested.
-   A coalesce function is a short form of the following [complex case distinction](javascript:call_link\('abensql_searched_case.htm'\)):
    
    CASE WHEN sql\_exp1 IS NOT NULL THEN sql\_exp1
         WHEN sql\_exp2 IS NOT NULL THEN sql\_exp2
         ...
         ELSE sql\_expn
    END
    
-   The coalesce function can be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)) for accessing the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).

Example

The first four [CASE expressions](javascript:call_link\('abensql_simple_case.htm'\)) return the null value, since no WHEN condition is met and no ELSE is specified. The result of the fifth CASE expression is not a null value and is returned by COALESCE.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS coalesce( CASE id WHEN 'A'  THEN 'a' END,
                        CASE id WHEN 'B'  THEN 'b' END,
                        CASE id WHEN 'C'  THEN 'c' END,
                        CASE id WHEN NULL THEN 'd' END,
                        CASE id WHEN 'X'  THEN 'x' END  ) AS coalesced
       INTO @FINAL(result).

Executable Example

[SQL Expressions, Coalesce Function](javascript:call_link\('abensql_expr_coalesce_abexa.htm'\))

Continue
![Example](exa.gif "Example") [sql\_func - Coalesce Function](javascript:call_link\('abensql_expr_coalesce_abexa.htm'\))