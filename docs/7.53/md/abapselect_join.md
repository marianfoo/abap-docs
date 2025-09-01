---
title: "SELECT - FROM JOIN"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm) Syntax ... (  data_source(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) AS tabaliasjoin INNER JOINLEFTRIGH
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm"
abapFile: "abapselect_join.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abapselect", "join"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) → 

SELECT - FROM JOIN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

... *\[*(*\]* *{* [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) *\[*AS tabalias*\]**}**|*join
          *{**\[*INNER*\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*MANY TO ONE*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
             *{* [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) *\[*AS tabalias*\]**}**|*join *\[*ON [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm)*\]* *\[*)*\]* ... .

Extras:

[1\. ... ON sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... MANY TO ONE](#!ABAP_ADDITION_2@2@)

Effect

Joins the columns of two or more [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in a results set of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") in a join expression. A join expression joins a left side with a right side, using

-   *\[*INNER*\]* JOIN (inner join)
    
-   LEFT*|*RIGHT *\[*OUTER*\]* JOIN (outer join)
    
-   CROSS JOIN (cross join)
    

Every join expression for an inner or outer join must contain a join condition [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) after ON (see below). A join expression for a cross join cannot contain any join conditions.

The following applies to entries specified on the left side and on the right side:

-   [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) is a single data source. Database tables must be [transparent](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransparent_table_glosry.htm "Glossary Entry"). As when specified as a single source after [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) using AS, an alternative table name can be specified for the data source. A data source can exist more than once within a join expression, and can have various alternative names.
    
-   A join expression can be specified for join on both sides. A join expression can therefore be nested recursively. The number of data sources linked to each other is limited. The maximum number is defined so that the SELECT statement can be executed on all supported database systems and is currently set to 50 . If known statically, more than 49 joins produce a syntax error. If not, they produce a runtime error.
    

The priority in which nested join expressions are evaluated is specified as follows:

-   For inner and outer joins, the priority is determined by the position of the ON conditions. From left to right, each ON condition is assigned to the directly preceding JOIN and creates a join expression. Join expressions of this type can be enclosed in parentheses, ( ). This is optional. Explicitly specified parentheses must match the parentheses specified implicitly by the ON conditions.
    
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be influenced by parentheses ( ).
    

-   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.

-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.
    

Results set for inner joins

In a single results set, an inner join joins the columns of the rows in the results set of the left side with the columns of the rows in the results set of the right side. This results set contains all combinations of rows for whose columns the join condition [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) is jointly true. If there are no rows in the results set of the left and right sides that meet sql\_cond, a row is not created in the resulting results set.

Results set for outer joins

The outer join creates the same results set as the inner join. The difference is that, for each selected row on the left side as LEFT OUTER JOIN or on the right side as RIGHT OUTER JOIN, at least one row is created in the results set, even if no rows on the other side meet the condition sql\_cond. The columns on the other side that do not meet the condition [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) are filled with [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry").

Results set for cross join

The cross join forms a cross product of the results set of the left side and the results set of the right side. The cross join joins the columns of the rows in the results set of the left side with the columns of the rows in the results set of the right side. This results set contains all possible combinations of rows. The number of rows in the results set of the cross join is the product of the number of rows of both joined results sets.

Notes

-   Certain restrictions apply to other clauses in the current SELECT statement when join expressions are used. For example, a join expression cannot be used together with the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm). These restrictions are documented in the clauses in question.
    
-   A WHERE condition for a SELECT statement with joins is applied to the results set created using the joins.
    
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
    
-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.
    
-   A cross join should only be used with extreme caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the results set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.
    
-   A cross join of two client-specific data sources is converted internally to an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is not client-specific, the cross join is executed completely.
    
-   If the same column name appears in multiple data sources of a single join expression, these sources must be identified in all other additions of the SELECT statement using the [column selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~.
    
-   Join expressions bypass [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry"). Therefore they should not be applied to buffered tables. Instead it may be a good idea in these cases to use the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm), which can access the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry").
    
-   If columns from the right side are specified as LEFT OUTER JOIN or columns from the left side are specified as RIGHT OUTER JOIN, after the addition [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm), the sort order (in the case of null values) can depend on the database system.
    
-   The function [coalesce](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_coalesce.htm) can be used to replace zero values created due to an external join with other values or the result of expressions.
    
-   The syntax check is performed in [strict mode for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm) in the following cases:
    

-   Not all comparisons of an ON condition contain a column from a data source specified on the right side as an operand.

-   Multiple consecutive joins are explicitly parenthesized so that a join expression (and not a data source) is on the right side of a join expression.

-   RIGHT OUTER JOIN is used.

-   In LEFT OUTER JOIN, fields from the right side of the WHERE condition of the current SELECT statement are specified. In RIGHT OUTER JOIN, fields from the left side are specified.

-   The syntax check is performed in [strict mode for Release 7.40, SP08](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp08.htm) in the following cases:
    

-   Use of the additions LIKE, IN, and NOT plus the operators OR or NOT in an ON condition.

-   Outer join without a comparison between columns on the left and right sides.

-   The syntax check is performed in [strict mode for Release 7.51](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_751.htm) in the following cases:
    

-   Uses CROSS JOIN.

Example

Join of the columns carrname, connid, and fldate of the database tables scarr, spfli, and sflight using two inner joins. This creates a list of flights from cityfr to cityto. An alias name is assigned to each table.

DATA:
  cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT',
  cityto TYPE spfli-cityto   VALUE 'NEW YORK'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = cityfr
  )->add\_field( CHANGING field = cityto )->request( ).
SELECT c~carrname, p~connid, f~fldate
       FROM ( ( scarr AS c
         INNER JOIN spfli AS p ON p~carrid   = c~carrid
                              AND p~cityfrom = @cityfr
                              AND p~cityto   = @cityto )
         INNER JOIN sflight AS f ON f~carrid = p~carrid
                                AND f~connid = p~connid )
       ORDER BY c~carrname, p~connid, f~fldate
       INTO TABLE @DATA(itab).

Example

Joins the database tables scarr and spfli using a left outer join. For all flights not departing from cityfr, the value of the column connid is the null value. The WHERE condition causes all airlines to be displayed that do not fly from cityfr.

DATA cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>request( CHANGING field = cityfr ).
SELECT s~carrid, s~carrname
       FROM scarr AS s
       LEFT OUTER JOIN spfli AS p ON s~carrid   =  p~carrid
                                  AND p~cityfrom = @cityfr
       WHERE p~connid IS NULL
       ORDER BY s~carrid, s~carrname
       INTO TABLE @DATA(itab).
cl\_demo\_output=>display( itab ).

Example

Cross join of the table T000 of all clients of an AS ABAP with the entries for the message class SABAPDEMOS in the table T100. Without the WHERE condition, the results set would be very large.

DATA BEGIN OF wa.
DATA mandt TYPE t000-mandt.
DATA mtext TYPE t000-mtext.
INCLUDE TYPE t100.
DATA END OF wa.
DATA itab LIKE STANDARD TABLE OF wa WITH EMPTY KEY.
SELECT t000~mandt, t000~mtext, t100~\*
       FROM t000 CROSS JOIN t100
       WHERE t100~arbgb = 'SABAPDEMOS'
       ORDER BY t000~mandt, t100~sprsl, t100~msgnr
       INTO TABLE @itab.
cl\_demo\_output=>display( itab ).

Addition 1

... ON sql\_cond

Effect

Join condition. A join condition must be specified for an inner or outer join. A join condition does not have to be specified for a cross join.

The syntax of a join condition [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) is subject to the following restrictions:

-   After ON, at least one comparison must be specified.
    
-   The expression [*\[*NOT*\]* IN seltab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_seltab.htm) cannot be used.
    
-   [Subqueries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry") cannot be used.
    
-   [Path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) cannot be used.
    
-   Within a [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry"), only columns of the [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of this subquery can be specified.
    
-   A dynamic condition [(cond\_syntax)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm) can be specified only if the [FROM clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) is specified statically and is not specified dynamically as (source\_syntax).
    

A join condition is met if the logical expression sql\_cond is true.

The [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-specific data source can only be used in the ON condition if automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") is switched off using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm). This is checked in full in the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.

Notes

-   Comparisons between database columns or SQL expressions and database columns are performed on the database, which means it is essential that appropriate join conditions are formulated only between operands of the same type and the same length. This avoids the need for platform-dependent conversions.
    
-   If the pattern consists of precisely one "%" character in a comparison using [LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_like.htm), the same optimization takes place as when using WHERE. The condition col LIKE '%' is always true, even if the column col contains [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry").
    
-   If a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm) occurs on the right side of the ON condition, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.
    
-   If one of the following two conditions apply:
    

-   [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expression_glosry.htm "Glossary Entry") are used on the left side of the ON condition of any join.

-   The expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_null.htm) is used in the ON condition of an outer join.

The syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.

Executable Examples

-   [Inner, outer, and cross joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoins_abexa.htm)

-   [Multiple joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoin_joins_abexa.htm)
    

Addition 2

MANY TO ONE

Effect

Specifies the cardinality of a left outer join. This addition is positioned after LEFT OUTER, but is not possible after RIGHT OUTER. Only certain specific database systems apply this addition.

If the addition MANY TO ONE is specified, any databases that support this addition assume that the results set defined by the left outer join matches this cardinality and SQL Optimizer attempts to suppress any surplus joins. If the results set does not match the cardinality, the result is undefined and may be dependent on the entries in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm).

Notes

-   More information can be found in the documentation of the current database system. The [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"), for example, supports the addition MANY TO ONE and its description is part of the documentation of [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us).
    
-   To avoid undefined and platform-specific behavior, MANY TO ONE can be specified only if the data being read meets the relevant prerequisites.
    
-   If MANY TO ONE is specified, the syntax check is executed in [strict mode as of release 7.52](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_752.htm).
    

Example

Incorrect use of MANY TO ONE. The data in the database tables SCARR and SPFLI do not have the cardinality MANY TO ONE and have the reverse cardinality instead. On a SAP HANA database, for example, the result is dependent on the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side (and the aggregate function [COUNT(\*)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) is used), an optimization takes place. Here, only that data is read that meets the prerequisite cardinality.

DATA(out) = cl\_demo\_output=>new( ).
out->next\_section( \`Fields of left and right table\` ).
SELECT FROM scarr AS c
              LEFT OUTER MANY TO ONE JOIN spfli AS p
                ON c~carrid = p~carrid
       FIELDS c~carrid   AS carrid,
              c~carrname AS carrname,
              p~connid   AS connid
       ORDER BY c~carrid
       INTO TABLE @DATA(itab).
out->write( itab ).
out->write( sy-dbcnt ).
out->next\_section( \`Fields of left table only\` ).
SELECT FROM scarr AS c
              LEFT OUTER MANY TO ONE JOIN spfli AS p
                ON c~carrid = p~carrid
       FIELDS c~carrid   AS carrid,
              c~carrname AS carrname
       ORDER BY c~carrid
       INTO CORRESPONDING FIELDS OF TABLE @itab.
out->write( itab ).
out->write( sy-dbcnt ).
out->next\_section( \`COUNT(\*)\` ).
SELECT FROM scarr AS c
              LEFT OUTER MANY TO ONE JOIN spfli AS p
                ON c~carrid = p~carrid
       FIELDS COUNT( \* ) AS count
       INTO @DATA(count).
out->write( count ).
out->display( ).

Continue
![Example](exa.gif "Example") [Inner, Outer, and Cross Joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoins_abexa.htm)
![Example](exa.gif "Example") [Multiple Joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoin_joins_abexa.htm)