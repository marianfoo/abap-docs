  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm)

sql\_cond - EXISTS

Syntax

... EXISTS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_subquery.htm) *\[* [UNION ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm)*\]* ) ...

Effect

Checks the result set of a subquery. The relational expression is true if the result set of the subquery defined by the clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_subquery.htm) contains at least one row. The expression is possible for any result sets that can be defined using subquery clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_subquery.htm). The language element [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion_clause.htm) apply to specifying clauses.

Hint

The specified columns in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) of the subquery are not important for EXISTS. Therefore, explicit lists are not useful. It is recommended to have [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) as the only specified column.

Example

Reading of all available flights leaving from New York from the DDIC database table SFLIGHT to the internal table free\_flights.

DATA city TYPE spfli-cityfrom VALUE 'NEW YORK'.
SELECT \*
       FROM sflight AS s
       WHERE seatsocc < s~seatsmax AND
             EXISTS ( SELECT 'X'
                             FROM spfli
                             WHERE carrid   =  s~carrid AND
                                   connid   =  s~connid AND
                                   cityfrom = @city )
       INTO TABLE @DATA(free\_flights).