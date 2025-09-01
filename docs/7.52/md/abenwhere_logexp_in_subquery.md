---
title: "Syntax"
description: |
  ... operand NOT IN ( SELECT subquery_clauses(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_subquery.htm) UNION ...(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) ) ... Effect Search for an operand operand in the result set
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm"
abapFile: "abenwhere_logexp_in_subquery.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abenwhere", "logexp", "subquery"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)

sql\_cond - IN subquery

Syntax

... operand *\[*NOT*\]* IN ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm)*\]* ) ...

Effect

Search for an operand operand in the result set of a [subquery](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry"). The clauses in the subquery [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_subquery.htm) must constitute a scalar subquery. The language element [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion_clause.htm) apply for specifying clauses.

The relational expression is true if the value of the operand operand is (is not) contained in the results set of the scalar subquery. [Columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

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