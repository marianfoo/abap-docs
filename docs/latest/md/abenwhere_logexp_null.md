  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20IS%20NULL%2C%20ABENWHERE_LOGEXP_NULL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - IS NULL

Syntax

... operand IS *\[*NOT*\]* NULL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The following applies to operand:

-   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
-   In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) can also be used.
-   Unlike in other relational expressions, the data type can also be [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), or [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)).

Hints

-   The relational expression IS *\[*NOT*\]* NULL is the only expression for which the result is true or false when the operand contains the null value. The result is unknown for all other possible relational expressions in a condition [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) when one of the operands in question contains the null value. This concerns in particular also expressions specified as operands when their result is the null value. This is especially true for the [null expression NULL](javascript:call_link\('abensql_null.htm'\)) that contains the null value by definition.
-   The expression IS *\[*NOT*\]* NULL must not be confused with the expression [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\)).
-   The relational expression with the predicate syntax IS *\[*NOT*\]* NULL must not be confused with the expression [NULL](javascript:call_link\('abensql_null.htm'\)).
-   Null values can also be evaluated using a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry").
-   IS *\[*NOT*\]* NULL can be used to check [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") and [geodata types](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry"). As in all other relational expressions, operands of the data types [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) and [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) are not possible.

Example

Comparison of the results of an inner and a left outer [join](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry"). The row with null values produced by the left outer join is removed again by the WHERE condition with IS NOT NULL, so the results are the same.

DELETE FROM demo\_join1.
INSERT demo\_join1 FROM TABLE @( VALUE #(
  ( a = 'a1' b = 'b1' c = 'c1'  d = 'd1' )
  ( a = 'a2' b = 'b2' c = 'c2'  d = 'd2' ) ) ).
DELETE FROM demo\_join2.
INSERT demo\_join2 FROM TABLE @( VALUE #(
  ( d = 'd1' e = 'e1' f = 'f1'  g = 'g1'  h = 'h1' ) ) ).
SELECT \*
       FROM demo\_join1 AS d1
         INNER JOIN demo\_join2 AS d2
           ON d1~d = d2~d
       INTO TABLE @FINAL(result1).
SELECT \*
       FROM demo\_join1 AS d1
         LEFT OUTER JOIN demo\_join2 AS d2
           ON d1~d = d2~d
       WHERE d2~d IS NOT NULL
         AND CAST( NULL AS CHAR( 2 ) ) IS NULL
       INTO TABLE @FINAL(result2).
ASSERT result1 = result2.