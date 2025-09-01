  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - EXISTS

Syntax

... EXISTS ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[* [UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Effect

Checks the results set of a subquery. The relational expression is true when the results set of the subquery defined by the clauses [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) contains at least one row. This expression is possible for all results sets that can be defined using the clauses [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)). The language element [UNION](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply for specifying clauses.

Example

Extracts all available flights leaving from New York from the database table SFLIGHT to the internal table free\_flights.

DATA city         TYPE spfli-cityfrom VALUE 'NEW YORK'.
SELECT \*
       FROM sflight AS s
       WHERE seatsocc < s~seatsmax AND
             EXISTS ( SELECT  \*
                             FROM spfli
                             WHERE carrid   =  s~carrid AND
                                   connid   =  s~connid AND
                                   cityfrom = @city )
       INTO TABLE @DATA(free\_flights).