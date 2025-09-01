  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20EXISTS%2C%20ABENWHERE_LOGEXP_EXISTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - EXISTS

Syntax

... EXISTS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm)*\]* ) ...

Effect

Checks the result set of a subquery. The relational expression is true if the result set of the subquery defined by the clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_subquery.htm) contains at least one row. The expression is possible for any result sets that can be defined using subquery clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_subquery.htm). The [set operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm "Glossary Entry") [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm) apply when specifying clauses.

Hint

The specified columns in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) of the subquery are not important for EXISTS. Therefore, explicit lists are not useful. It is recommended that one [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_literals.htm) is specified as the only column.

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