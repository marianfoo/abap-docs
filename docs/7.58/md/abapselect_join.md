  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20FROM%20JOIN%2C%20ABAPSELECT_JOIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, FROM JOIN

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm)

Syntax

... *\[*(*\]* *{* [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) *\[*AS tabalias*\]**}**|*join
          *{**\[*INNER *\[*cardinality*\]**\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*cardinality*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
             *{* [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) *\[*AS tabalias*\]**}**|*join *\[*ON [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm)*\]* *\[*)*\]* ... .

Additions:

[1\. ... ON sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... cardinality](#!ABAP_ADDITION_2@2@)

Effect

Joins the columns of two or more [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) in a result set of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") in a join expression. A join expression joins a left side with a right side, using

-   *\[*INNER*\]* JOIN ([inner join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninner_join_glosry.htm "Glossary Entry"))
-   LEFT*|*RIGHT *\[*OUTER*\]* JOIN ([outer join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenouter_join_glosry.htm "Glossary Entry"))
-   CROSS JOIN ([cross join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencross_join_glosry.htm "Glossary Entry"))

Every join expression for an inner or outer join must contain a join condition [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) after ON (see below). A join expression for a cross join cannot contain any join conditions.

The following applies to possible specifications on the left side and on the right side:

-   [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) is a single data source. DDIC database tables must be [transparent](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransparent_table_glosry.htm "Glossary Entry"). As with the individual specification after [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) using AS, an alias name can be specified for the data source. A data source can exist more than once within a join expression and must then be given different names.
-   A join expression can be specified for join on both sides. A join expression can therefore be nested recursively. The number of data sources linked to each other is limited. The maximum number is set to allow the SELECT statement to be executed on all supported database systems and is currently 50. More than 49 joins, if known statically, produce a syntax error. If they are not known statically, they produce a runtime error.

The priority in which nested join expressions are evaluated is specified as follows:

-   For inner and outer joins, the priority is determined by the position of the ON conditions. From left to right, each ON condition is assigned to the directly preceding JOIN and creates a join expression. Join expressions of this type can optionally be enclosed in parentheses, ( ). Explicitly specified parentheses must match the parentheses specified implicitly by the ON conditions.
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses ( ).
    -   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.
    -   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

Result set for inner joins

An inner join joins the columns of the rows in the result set of the left side with the columns of the rows in the result set of the right side into a single result set. This result set contains all combinations of rows for whose columns the join condition [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) is jointly true. If there are no rows in the result set of the left and right sides that meet sql\_cond, no row is created in the resulting result set.

Result set for outer joins

The outer join creates the same result set as the inner join. The difference is that, for each selected row on the left side as LEFT OUTER JOIN or on the right side as RIGHT OUTER JOIN, at least one row is created in the result set, even if no rows on the other side meet the condition sql\_cond. The columns on the other side that do not meet the condition [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) are filled with [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry").

Result set for cross join

The cross join forms a cross product of the result set of the left side and the result set of the right side. The cross join joins the columns of the rows in the result set of the left side with the columns of the rows in the result set of the right side. This result set contains all possible combinations of rows. The number of rows in the result set of the cross join is the product of the number of rows of both joined result sets.

Hints

-   Certain restrictions apply to other clauses in the current SELECT statement when join expressions are used. For example, a join expression cannot be used together with the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm). These restrictions are documented in the corresponding clauses.
-   A WHERE condition for a SELECT statement with joins affects the result set created using the joins.
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.
-   A cross join should only be used with extreme caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the result set, whose number of rows is always the product of the number of all rows of both data sources, can quickly become very large.
-   A cross join of two client-dependent data sources is converted internally to an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is not client-dependent, the cross join is executed completely.
-   If the same column name appears in multiple data sources of a single join expression, these sources must be identified in all other additions of the SELECT statement using the [column selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~.
-   Only join expressions that access only [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) but no database tables can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm). If a database table is joined, the ABAP SQL statement bypasses the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") and an internal table accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   Join expressions should not be applied to buffered tables. Instead the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_all_entries.htm) should be used, which can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm).
-   If columns from the right side are specified as LEFT OUTER JOIN or columns from the left side are specified as RIGHT OUTER JOIN, after the addition [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm), the sort order can depend on the database system in the case of null values.
-   The function [coalesce](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm) can be used to replace null values created due to an external join with other values or the result of expressions.
-   The syntax check is performed in [strict mode for ABAP release 7.40, SP05](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp05.htm) in the following cases:
    -   Not all comparisons of an ON condition contain a column from a data source specified on the right side as an operand.
    -   Multiple consecutive joins are explicitly parenthesized so that a join expression is on the right side of a join expression and not a data source.
    -   RIGHT OUTER JOIN is used.
    -   In LEFT OUTER JOIN, fields from the right side of the WHERE condition of the current SELECT statement are specified. In RIGHT OUTER JOIN, fields from the left side are specified.
-   The syntax check is performed in [strict mode for ABAP release 7.40, SP08](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm) in the following cases:
    -   Use of the additions LIKE, IN, and NOT plus the operators OR or NOT in an ON condition.
    -   Outer join without a comparison between columns on the left and right sides.
-   The syntax check is performed in [strict mode for ABAP release 7.51](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_751.htm) in the following cases:
    -   Use of CROSS JOIN.

Example

Join of the columns CARRNAME, CONNID, and FLDATE of the DDIC database tables SCARR, SPFLI, and SFLIGHT using two inner joins. This creates a list of flights from CITYFROM to CITYTO. Alternative names are used for each table.

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
       INTO TABLE @FINAL(itab).

Example

Join of the database tables SCARR and SPFLI using a left outer join. For all flights not departing from CITYFROM, the value of the column CONNID is the null value. Due to the WHERE condition, all airlines that do not fly from CITYFROM are output.

DATA cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>request( CHANGING field = cityfr ).
SELECT s~carrid, s~carrname
       FROM scarr AS s
       LEFT OUTER JOIN spfli AS p ON s~carrid   =  p~carrid
                                  AND p~cityfrom = @cityfr
       WHERE p~connid IS NULL
       ORDER BY s~carrid, s~carrname
       INTO TABLE @FINAL(itab).
cl\_demo\_output=>display( itab ).

Example

Cross join of the DDIC database table T000 of all clients of an AS ABAP with the entries for the message class SABAPDEMOS in the table T100. Without the WHERE condition, the result set would be very large.

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

Join condition. A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the [relational expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) of a join condition [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) is subject to the following restrictions:

-   After ON, at least one comparison must be specified.
-   The expression [*\[*NOT*\]* IN range\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_seltab.htm) cannot be used.
-   [Subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") cannot be used.
-   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) cannot be used.
-   Within a [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry"), only columns of the [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of this subquery can be specified.
-   A dynamic condition [(cond\_syntax)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_dynamic.htm) can be specified only if the [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) is specified statically and is not specified dynamically as (source\_syntax).

A join condition is met if the logical expression sql\_cond is true.

[Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) applies. In joins between client-dependent tables, a comparison for equality between the client columns is added to the ON condition implicitly. The [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source cannot be used as an operand in the ON condition.

Hints

-   Comparisons between database columns or SQL expressions and database columns are performed on the database, which means it is essential that appropriate join conditions are formulated only between operands of the same type and the same length. This avoids the need for platform-dependent conversions.
-   If the pattern consists of exactly one % character in a comparison using [LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_like.htm), the same optimization takes place as for WHERE. The condition col LIKE '%' is always true, even if the column col contains [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry").
-   If one of the following two conditions apply:
    -   [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expression_glosry.htm "Glossary Entry") are used on the left side of the ON condition of any join.
    -   The expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_null.htm) is used in the ON condition of an outer join.
-   The [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source can still be used in the ON condition if implicit [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_handling_glosry.htm "Glossary Entry") is disabled using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client_obsolete.htm).
-   If a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) occurs on the right side of the ON condition, the syntax check is performed in a [strict mode from ABAP release 7.50](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.
    
    The syntax check is performed in a [strict mode from ABAP release 7.50](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.
    

Executable Examples

-   [Inner, outer, and cross joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoins_abexa.htm)
-   [Multiple joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_joins_abexa.htm)

Addition 2   

cardinality

Effect

Specifies the [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") cardinality of an inner, left outer, or right outer join. It has an effect only on certain specific database systems.

The following cardinality specifications are possible:

-   ONE TO ONE
-   ONE TO MANY
-   ONE TO EXACT ONE
-   EXACT ONE TO ONE
-   EXACT ONE TO MANY
-   EXACT ONE TO EXACT ONE
-   MANY TO ONE
-   MANY TO MANY
-   MANY TO EXACT ONE

The cardinality specification is used by the [SQL Optimizer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_optimizer_glosry.htm "Glossary Entry") for performance optimizations by suppressing surplus joins on any databases that support this addition. It is important that the cardinality specification matches the data in question. Otherwise, the result is undefined and can depend on the entries in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm).

If no cardinality is specified, the implicit default cardinality is many-to-many.

Hints

-   For more information, see the documentation of the current database system. The [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), for example, supports the cardinality specification and its description is part of the documentation of [HANA-specific SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   To avoid undefined and platform-dependent behavior, a cardinality should be specified only if the data to be read meets the relevant prerequisites.
-   If a cardinality is specified, the syntax check is executed in [strict mode as of release 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_758.htm).

Example

Incorrect use of the cardinality MANY TO ONE. The data in the DDIC database tables SCARR and SPFLI do not have the [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") MANY TO ONE, but the reverse cardinality. On an SAP HANA database, for example, the result depends on the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side and the aggregate function [COUNT(\*)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) is used as an aggregate expression, an optimization takes place. Here, only that data is read that meets the prerequisite cardinality.

FINAL(out) = cl\_demo\_output=>new( ).
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
       INTO @FINAL(count).
out->write( count ).
out->display( ).

Continue
![Example](exa.gif "Example") [SELECT, Inner, Outer, and Cross Joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoins_abexa.htm)
![Example](exa.gif "Example") [SELECT, Multiple Joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_joins_abexa.htm)