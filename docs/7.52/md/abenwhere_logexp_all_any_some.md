  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) →  [sql\_cond - Relational Operators](javascript:call_link\('abenwhere_logexp_compare.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - ALL, ANY, SOME

Syntax

... operand [operator](javascript:call_link\('abenwhere_logexp_compare.htm'\)) *\[*ALL*|*ANY*|*SOME*\]* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Effect

Comparison of an operand operand with the result set of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). The clauses in the subquery [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) must constitute a scalar subquery. The language element [UNION](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply for specifying clauses.

[Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

operator stands for a [relational operator](javascript:call_link\('abenwhere_logexp_compare.htm'\)). Results sets can be single row or multirow.

Note

When an SQL expression occurs on the left side, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Single Row Results Set

If the results set of the subquery defined by the clause [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) contains only one row, the comparison can be performed by specifying ALL, ANY, or SOME. The expression is true if the corresponding comparison of the value of the operand operand with the result of the scalar subquery returns "true". If the results set for the subquery contains multiple rows, a non-handleable exception is raised when the statement is executed.

Example

Reads the flights with the most passengers.

SELECT \*
       FROM sflight
       WHERE seatsocc = ( SELECT MAX( seatsocc )
                                 FROM sflight )
       INTO TABLE @DATA(flights).

Multirow Results Set

If the results set of the subquery defined by the clause [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) contains more than one row, ALL, ANY, or SOME must be specified.

-   If using ALL, the expression is true if the comparison is true for all rows in the results set of the scalar subquery.

-   If the addition ANY or SOME is used, the expression is true if it is true for at least one of the rows in the results set of the subquery.

Note

The equality operator (\= or EQ) in conjunction with ANY or SOME acts like [IN subquery](javascript:call_link\('abenwhere_logexp_in_subquery.htm'\)).

Example

Reads the customer number of the customer or customers who have made the most bookings:

SELECT customid, COUNT( \* )
       FROM sbook
       GROUP BY customid
       HAVING COUNT( \* ) >= ALL ( SELECT COUNT( \* )
                                         FROM sbook
                                         GROUP BY customid )
       INTO (@DATA(id), @DATA(cnt)).
  ...
ENDSELECT.