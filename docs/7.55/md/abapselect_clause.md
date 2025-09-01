---
title: "Syntax"
description: |
  ... DISTINCT select_list(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) ... Addition: ... DISTINCT(#!ABAP_ONE_ADD@1@) Effect SELECT clause of a query(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm 'Glossary Entry') stat
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm"
abapFile: "abapselect_clause.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "data", "abapselect", "clause"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) → 

SELECT, select\_clause

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm)

Syntax

... *\[*DISTINCT*\]* [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) ...

Addition:

[... DISTINCT](#!ABAP_ONE_ADD@1@)

Effect

SELECT clause of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry") statement. The SELECT defines the structure of the result set of the SELECT statement. It consists of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), which defines the columns of the result set, and an optional addition DISTINCT, which removes duplicative rows from the result set.

The SELECT list [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) can indicate all columns of a data source using \* or it defines the individual columns of the result set using an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm). It defines the names of the columns in the result set, using optional or mandatory alias names.

Hint

The SELECT clause must either be listed as the first clause after the keyword SELECT (or after the optional addition SINGLE) or after the FROM clause. After the FROM clause, the SELECT clause must be introduced using the addition [FIELDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm). A FROM clause of the SELECT clause supports tools such as the code completion in ABAP Editor.

Example

SELECT clause after FIELDS, whose SELECT list specifies individual columns plus aggregate expressions as arguments using SQL expressions.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              MAX( seatsmax - seatsocc ) AS seatsfree\_max,
              MIN( seatsmax - seatsocc ) AS seatsfree\_min
       GROUP BY carrid, connid
       HAVING carrid = CHAR\`LH\`
       INTO TABLE @DATA(result).

Addition

... DISTINCT

Effect

The addition DISTINCT removes rows that occur more than once in a multirow result set. Here the entire row content is taken into consideration.

The addition DISTINCT must not be used in the following cases:

-   If the addition [SINGLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_single.htm) is used.

-   If a column specified in the SELECT list [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) has the type STRING, RAWSTRING, LCHR, LRAW, or GEOM\_EWKB.

If DISTINCT is used, the statement SELECT bypasses [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry").

Hints

-   For the addition DISTINCT, it is not important which columns of the result set are key fields of the associated DDIC database tables, views, or CDS entities.

-   The comparison is based on the full row content, which means that the number of rows in the result set is determined by the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). If, for example, all key fields of a DDIC database table are specified directly as Columns in a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) list, there can be no rows that occur more than once. The other extreme is the case where a SELECT list contains a single [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) or a single literal. Here, all rows are deleted except one.

-   As a part of the SELECT clause, the addition DISTINCT is applied before the additions [UP TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) and [OFFSET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) are evaluated.

-   If DISTINCT is specified, it should be noted that this requires the execution of sort operations in the database system, and the statement SELECT therefore bypasses [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry").
    

Example

Gets all destinations to which Lufthansa flies from Frankfurt.

SELECT DISTINCT cityto
       FROM spfli
       WHERE carrid   = 'LH' AND
             cityfrom = 'FRANKFURT'
       INTO TABLE @DATA(destinations).
cl\_demo\_output=>display( destinations ).

Continue
[SELECT, select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm)