  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) →  [sql\_cond - Comparison Operators](javascript:call_link\('abenwhere_logexp_compare.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20ALL%2C%20ANY%2C%20SOME%2C%20ABENWHERE_LOGEXP_ALL_ANY_SOME%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - ALL, ANY, SOME

Syntax

... operand [operator](javascript:call_link\('abenwhere_logexp_compare.htm'\)) *\[*ALL*|*ANY*|*SOME*\]* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Effect

Comparison of an operand operand with the result set of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). The clauses in the subquery [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) must represent a scalar subquery. The [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), and [EXCEPT](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply to specifying clauses.

Any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified for operand. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

operator stands for a [comparison operator](javascript:call_link\('abenwhere_logexp_compare.htm'\)). Result sets can be single row or multirow.

Hint

When an SQL expression occurs on the left side, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Single Row Result Set   

If the result set of the subquery defined by the clause [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) contains only one row, the comparison can be performed without specifying ALL, ANY, or SOME. The expression is true if the corresponding comparison of the value of the operand operand with the result of the scalar subquery subquery returns true. If the result set for the subquery contains multiple rows, an uncatchable exception is raised when the statement is executed.

Example

Reads the flights with the most passengers.

SELECT \*
       FROM sflight
       WHERE seatsocc = ( SELECT MAX( seatsocc )
                                 FROM sflight )
       INTO TABLE @FINAL(flights).

Multirow Result Set   

If the result set of the subquery defined by the clause [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) contains more than one row, ALL, ANY, or SOME must be specified.

-   If using ALL, the expression is true if the comparison is true for all rows in the result set of the scalar subquery subquery.
-   If the addition ANY or SOME is used, the expression is true if the comparison is true for at least one of the rows in the result set of the subquery.

Hint

The equality operator (\= or EQ) in conjunction with ANY or SOME acts like [IN subquery](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)).

Example

Reads the customer numbers of the customers who made the most bookings.

SELECT customid, COUNT( \* )
       FROM sbook
       GROUP BY customid
       HAVING COUNT( \* ) >= ALL ( SELECT COUNT( \* )
                                         FROM sbook
                                         GROUP BY customid )
       INTO (@FINAL(id), @FINAL(cnt)).
  ...
ENDSELECT.