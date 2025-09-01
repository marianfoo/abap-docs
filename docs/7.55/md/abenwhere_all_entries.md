  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm)

SELECT, FOR ALL ENTRIES

Syntax

... FOR ALL ENTRIES IN @itab WHERE ... col [operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare.htm) @itab-comp ...

Effect

If the addition FOR ALL ENTRIES is specified in front of the language element [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) of the statement SELECT of a [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry"), the components comp of the internal table [itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) specified as a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) here can be used in [relational expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) within [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) on the right side of comparisons of a [comparison operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare.htm) in comparisons with a [column](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) col. The specified component comp must be compatible with the column col. The internal table itab can have a structured or an elementary row type. For an elementary row type, the [pseudo component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line must be specified for comp.

The entire logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) is evaluated for each individual row of the internal table itab. The result set of the SELECT statement is the union set of the result sets produced by the individual evaluations. Rows that occur more than once are removed from the result set automatically. The full content of a row is considered here.

If the internal table itab is empty, the entire WHERE condition is ignored. This means that none of the rows in the database table are skipped and are placed in the result set (once any duplicate rows are removed).

The logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm) of the WHERE condition can comprise multiple [relational expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) using AND and OR. However, if FOR ALL ENTRIES is specified, there must be at least one [comparison](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare.htm) with a column of the internal table itab that can be specified statically or dynamically.

The following restrictions apply when using the addition FOR ALL ENTRIES with other additions:

-   The addition FOR ALL ENTRIES is only possible in front of WHERE conditions in a standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement or in the [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") after [OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm), if no common table expressions are defined using [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm).

-   The addition FOR ALL ENTRIES cannot be used with the addition [SINGLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_single.htm).

-   The addition FOR ALL ENTRIES cannot be used in combination with [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm), except for columns specified individually or an aggregate expression COUNT( \* ) specified individually.

-   If the addition FOR ALL ENTRIES is used, no [LOB handles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_lob_handles.htm) can be created as [reader streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreader_stream_glosry.htm "Glossary Entry") or as [locators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocator_glosry.htm "Glossary Entry") in the [target area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) of a standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement.

-   The addition FOR ALL ENTRIES cannot be combined with [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm).

-   In a SELECT statement with FOR ALL ENTRIES, no aggregate expressions except for COUNT( \* ) can be used in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). In cases like these, the aggregate expression is not evaluated in the database, but is emulated on the AS ABAP.

-   The addition FOR ALL ENTRIES should not be used with the addition [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm). The addition GROUP BY has no effect if FOR ALL ENTRIES is used.

-   In a SELECT statement with FOR ALL ENTRIES, the addition [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) can only be used with the addition PRIMARY KEY and can only be used to access a single table or view. In this case, all columns of the primary key (except for the client column in client-dependent tables) must be in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm).

-   No [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) can be used in a SELECT statement with FOR ALL ENTRIES.

-   If the addition FOR ALL ENTRIES is used, no database fields of the built-in types STRING, RAWSTRING, and GEOM\_EWKB plus LCHR and LRAW should occur in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). These data types prevent rows that occur more than once on the database system from being removed. These rows are only removed from the result set on the AS ABAP. If specified in the SELECT list, a syntax check warning is raised that can be hidden by a pragma.

The internal table itab is evaluated once for each query. Any changes made to the content of the internal table in a SELECT loop or WITH loop are ignored by the logical expression.

Hints

-   The same internal table can be specified after FOR ALL ENTRIES and after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm). The content of the table is evaluated by FOR ALL ENTRIES and then overwritten by the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

-   A comparison with a column of an internal table can also be performed using the WHERE condition of a [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") for the same [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm).

-   With respect to rows occurring more than once in the result set, the addition FOR ALL ENTRIES has the same effect as when the addition [DISTINCT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) is specified in the definition of the selection set. Unlike DISTINCT, the rows are not always deleted from the database system but instead are sometimes first deleted from the result set on AS ABAP. The duplicate rows are then removed from the database system if the SELECT statement can be passed to the database system as a single SQL statement. The addition DISTINCT is supported here. If the SELECT statement needs to be distributed to multiple SQL statements before it is passed or if columns of the types STRING and RAWSTRING plus LCHR and LRAW are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), the rows are aggregated on AS ABAP.

-   If duplicate rows are first removed from AS ABAP, all rows specified by the WHERE condition (in some cases) are passed to an internal system table and then aggregated. The [maximum size](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmemory_consumption_2.htm) of this system table is restricted to that of normal internal tables. More specifically, the system table is always required if one of the additions [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) or [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) is used simultaneously. These then have no effect on the number of rows passed from the database server to AS ABAP, but are only used when the rows are passed from the system table to the actual target area. If the maximum size of the internal system table is exceeded, a runtime error occurs.

-   The addition FOR ALL ENTRIES bypasses [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry") for tables with generic buffering if the condition after FOR ALL ENTRIES prevents a single generic area from being specified exactly.

In all other cases, table buffering is used and the addition FOR ALL ENTRIES can be a more efficient alternative to [join expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_expression_glosry.htm "Glossary Entry").

-   Before using an internal table itab after FOR ALL ENTRIES, always check that the internal table is not initial. In an initial internal tables, all rows are read from the database regardless of any further conditions specified after WHERE. This is not usually the required behavior.

-   If the full WHERE condition is ignored because the internal table itab is empty, the implicit WHERE condition for the current client or the client specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) is not affected (if [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm) is enabled). This means that all data is only read from the current client. If [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm) is disabled using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm), no implicit WHERE condition exists for the client. Any WHERE condition specified explicitly for the client column is ignored with the full condition if the internal table itab is empty and the data from all clients is read.

-   If, in a [strict mode of the syntax check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm), FOR ALL ENTRIES is specified together with columns of the types STRING and RAWSTRING plus LCHR and LRAW in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), the syntax check is executed in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_752.htm).

Example

Gets all flight data for a specified departure city. The relevant airlines and flight numbers are first passed to an internal table entry\_tab, which is evaluated in the WHERE condition of the subsequent SELECT statement. This selection could also be carried out in a single SELECT statement by using a join in the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). Make sure that the table entry\_tab is not initial before the SELECT statement is executed using FOR ALL ENTRIES.

DATA city TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>request( CHANGING field = city ).
SELECT carrid, connid
       FROM spfli
       WHERE cityfrom = @( to\_upper( city ) )
       INTO TABLE @DATA(entry\_tab).
IF entry\_tab IS NOT INITIAL.
  SELECT carrid, connid, fldate
         FROM sflight
         FOR ALL ENTRIES IN @entry\_tab
         WHERE carrid = @entry\_tab-carrid AND
               connid = @entry\_tab-connid
         ORDER BY PRIMARY KEY
         INTO TABLE @DATA(result\_tab).
  cl\_demo\_output=>display( result\_tab ).
ENDIF.

Example

Uses FOR ALL ENTRIES with an empty internal table. All rows of the DDIC database table are respected. The number of read rows is usually, however, smaller in the first SELECT statement than in the second statement. This is because only one column is read and hence more duplicate rows can be removed. The second SELECT statement, on the other hand, moves all rows of the DDIC database table to the result set, since their structure covers the full table key.

DATA carriers TYPE TABLE OF scarr.
SELECT carrid, connid
       FROM spfli
       FOR ALL ENTRIES IN @carriers
       WHERE carrid = @carriers-carrid
       INTO TABLE @DATA(result1).
cl\_demo\_output=>write( result1 ).
SELECT carrid
       FROM spfli
       FOR ALL ENTRIES IN @carriers
       WHERE carrid = @carriers-carrid
       INTO TABLE @DATA(result2).
cl\_demo\_output=>display( result2 ).