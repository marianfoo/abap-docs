  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_null%2C%20ABENSQL_NULL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_null

Syntax

... NULL ...

Effect

Special null expression in ABAP SQL. The operand NULL represents the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). Null expressions are context-dependent and the type of NULL is determined by the [context](javascript:call_link\('abenobj_context_glosry.htm'\) "Glossary Entry"). Generally, null expressions can be used in operand positions of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)). Any exception is documented for the respective position.

Hints

-   At any operand position, it must be possible to determine an exact type for NULL. If this is not the case, a syntax error occurs or a catchable exception is raised.
-   The expression NULL must not be confused with the relational expression with the predicate syntax [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).

Example

Returns the airline code, flight connection number, null value, and distance of all Lufthansa flights. When passing NULL to the result table, the null value is converted to the initial value.

SELECT FROM spfli
       FIELDS carrid,
              connid,
              CAST( NULL AS INT1 ) AS start,
              distance
       WHERE carrid = 'LH'
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Null Expression](javascript:call_link\('abensql_expr_null_abexa.htm'\))

Continue
![Example](exa.gif "Example") [sql\_exp - Null Expression](javascript:call_link\('abensql_expr_null_abexa.htm'\))