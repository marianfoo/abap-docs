  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20EXISTS%2C%20ABENWHERE_LOGEXP_EXISTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - EXISTS

Syntax

... EXISTS ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Effect

Checks the result set of a subquery. The relational expression is true if the result set of the subquery defined by the clauses [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) contains at least one row. The expression is possible for any result sets that can be defined using subquery clauses [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)). The [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), and [EXCEPT](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply when specifying clauses.

Hint

The specified columns in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the subquery are not important for EXISTS. Therefore, explicit lists are not useful. It is recommended that one [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) is specified as the only column.

Example

Reads all available flights leaving from New York from the DDIC database table SFLIGHT to the internal table free\_flights.

DATA city TYPE spfli-cityfrom VALUE 'NEW YORK'.
SELECT \*
       FROM sflight AS s
       WHERE seatsocc < s~seatsmax AND
             EXISTS ( SELECT 'X'
                             FROM spfli
                             WHERE carrid   =  s~carrid AND
                                   connid   =  s~connid AND
                                   cityfrom = @city )
       INTO TABLE @FINAL(free\_flights).