  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - IN subquery

Syntax

... operand *\[*NOT*\]* IN ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Effect

Search for an operand operand in the result set of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). The clauses in the subquery [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) must constitute a scalar subquery. The language element [UNION](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply for specifying clauses.

The relational expression is true if the value of the operand operand is (is not) contained in the results set of the scalar subquery. [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

Example

Reads the geographical latitude and longitude of a city from the database table SGEOCITY, where this city is the city of origin of a flight in the database table SPFLI.

DATA: carr\_id TYPE spfli-carrid VALUE 'LH',
      conn\_id TYPE spfli-connid VALUE '400'.
SELECT SINGLE city, latitude, longitude
       FROM sgeocity
       WHERE city IN ( SELECT cityfrom
                              FROM spfli
                              WHERE carrid = @carr\_id AND
                                    connid = @conn\_id )
       INTO (@DATA(city), @DATA(lati), @DATA(longi)).