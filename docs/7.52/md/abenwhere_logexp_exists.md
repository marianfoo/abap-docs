  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)

sql\_cond - EXISTS

Syntax

... EXISTS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_subquery.htm) *\[* [UNION ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm)*\]* ) ...

Effect

Checks the results set of a subquery. The relational expression is true when the results set of the subquery defined by the clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_subquery.htm) contains at least one row. This expression is possible for all results sets that can be defined using the clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_subquery.htm). The language element [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion_clause.htm) apply for specifying clauses.

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