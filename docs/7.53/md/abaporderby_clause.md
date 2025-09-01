---
title: "SELECT - ORDER BY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm) Syntax ... ORDER BY  PRIMARY KEY    col1(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)a1 ASCENDINGDESCENDING, col2(ht
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm"
abapFile: "abaporderby_clause.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abaporderby", "clause"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) → 

SELECT - ORDER BY

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

... ORDER BY *{* *{*PRIMARY KEY*}*
             *|* *{* *{* [col1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*,
                 *{*[col2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*, ...*}*
             *|* (column\_syntax) *}* ...

Alternatives:

[1\. ... ORDER BY PRIMARY KEY](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ORDER BY *{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*,](#!ABAP_ALTERNATIVE_2@2@)
               *{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*, ...
[3\. ... ORDER BY (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

The addition ORDER BY sorts a multirow results set of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") by the content of the specified column. The order of the rows in the results set is undefined with respect to all columns that are not specified after ORDER BY, and can be different in repeated executions of the same SELECT statement. If the addition ORDER BY is not specified, the order of all the columns in the results set is undefined.

The following restrictions apply when using the addition ORDER BY with other additions:

-   The addition ORDER BY cannot be used with the addition [SINGLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm).
    
-   All columns specified after ORDER BY must also be specified after the addition [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) at the same time.
    
-   If [aggregate functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_function_glosry.htm "Glossary Entry") are specified after SELECT, all columns that are specified after ORDER BY and that do not have an alternative column name for an aggregation function must also be specified after SELECT and after GROUP BY.
    
-   If an [alternative name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) is used for sorting, this name must be unique and cannot be the same name as a column that does not have any alternative names.
    
-   If the addition [DISTINCT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) is used, only those columns can be specified after ORDER BY that are also specified after SELECT. The exception to this rule is [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry") when PRIMARY KEY is specified. If not, other columns can also be used, as long as there are no restrictions by other additions such as [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm).
    
-   If the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm) is used in front of the [WHERE condition,](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwhere.htm), ORDER BY can only be used with the addition PRIMARY KEY and all columns of the primary key (except the client column of client-specific tables) must be specified after [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm).
    

Notes

-   The data is sorted in the database system, once all other actions are completed, such as the definition of the hit list using WHERE, the calculation of aggregate functions, and grouping using GROUP BY. Only the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_up_to_offset.htm) are executed on the sorted hits.
    
-   Sorts in the database system are performed in accordance with the rules for [size comparisons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_compare.htm) and the restrictions with regard to platform dependencies apply. More specifically, sorts performed using character-like values can be platform-dependent under certain circumstances and produce different results than ABAP sorts.
    
-   If a column specified after ORDER BY contains [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry") in the results set, the sort order can be platform-dependent, since null values can be sorted either before or after the other values by the database system (in accordance with the SQL standard)
    
-   For performance reasons, a sort should only take place in the database if supported by an [index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_glosry.htm "Glossary Entry"). This guaranteed only when ORDER BY PRIMARY KEY is specified. If a suitable index is not available, the results set must be sorted at runtime. This should be done using [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm) on AS ABAP and not using ORDER BY in the database system. Even if a suitable index does exist, ORDER BY col1 col2 ... should be used for large amounts of data only if the order of the database fields col1 col2 ... is the same as the order in the index.
    
-   If a sorted resulting set is assigned to a sorted internal table, the internal table is sorted again according to the sorting instructions.
    

Alternative 1

... ORDER BY PRIMARY KEY

Effect

The results set is sorted in ascending order by the content of the [primary key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a single [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm). The following restrictions apply:

-   The addition PRIMARY KEY cannot be specified if a [join expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoin_expression_glosry.htm "Glossary Entry") or a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) is used in the SELECT statement to select the data of multiple data sources.
    
-   The addition PRIMARY KEY cannot be specified in a [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry").
    
-   The addition PRIMARY KEY cannot be specified for a result set joined with [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm).
    
-   The addition PRIMARY KEY cannot be used when accessing a common table expression defined using [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm).
    
-   The addition PRIMARY KEY cannot be specified when [views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenview_glosry.htm "Glossary Entry") that contain precisely the same number of key fields as view fields are accessed. If a [database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_view_glosry.htm "Glossary Entry") like this is specified after FROM in the dynamically specified source\_syntax, an exception is raised only in the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05. In all other cases, the results set is sorted by all columns.
    
-   If a [CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") entity is sorted by the PRIMARY KEY, its key elements must be defined at the start of the structure without any gaps.
    

Note

If ORDER BY PRIMARY KEY is used with the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm) in front of the [WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwhere.htm), all fields of the primary key (except for the client column in client-specific tables) must be in the[SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm).

Example

Reads the data from the database table SFLIGHT for Lufthansa flight 0400, sorted by the third key field (the flight date).

SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '0400'
       ORDER BY PRIMARY KEY
       INTO TABLE @DATA(result).

Alternative 2

... ORDER BY *{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*,
             *{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*, ...

Effect

For any columns specified in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm), a comma-separated list of columns can be specified after ORDER BY to be used as a sort criterion. Columns can be specified directly using the [column names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) col1 col2 ..., or the alternative column names a1, a2 ... The latter is required if columns specified as [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") are to be used as sort criteria.

The additions ASCENDING and DESCENDING determine whether the column in question is sorted in ascending or descending order. If neither addition is specified, the column is sorted in ascending order. The priority of sorting is based on the order in which the components col1 col2... or a1 a2 ... are specified.

Columns specified after ORDER BY cannot be of the [type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, or RAWSTRING.

Notes

-   If single columns are specified in the addition ORDER BY, the statement SELECT uses [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") only in the following cases:
    

-   The columns specified are a left-justified subset of the primary key in the correct order and no further columns are specified.

-   The columns specified represent the whole primary key in the correct sequence. Additional columns that are specified have no influence on the sorting.

-   The addition DESCENDING is not specified.

In other cases, table buffering is ignored.

-   When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
    
-   If specified, the columns col1, col2, ... can contain a [path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) for associations of a CDS view.
    
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_lists_obsolete.htm). Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.
    

Example

The rows of database table sflight are grouped by the columns carrid and connid, where for each group the minimum of column seatsocc is determined. The selection is sorted in ascending order by carrid and in descending order by the minimum of occupied seats. The alternative name min is used for the aggregate expression.

SELECT carrid, connid, MIN( seatsocc ) AS min
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid ASCENDING, min DESCENDING
       INTO TABLE @DATA(result).
cl\_demo\_output=>display\_data( result ).

Alternative 3

... ORDER BY (column\_syntax)

Effect

As an alternative to specifying columns statically, a parenthesized data object column\_syntax can be specified that contains the syntax of PRIMARY KEY or the list of columns when the statement is executed.

The same applies to column\_syntax as when specifying the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) dynamically. If the content of column\_syntax is initial, the addition ORDER BY is ignored. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm).

Notes

-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
    

-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Comment characters placed within literals are, however, part of the literal.

Example

Dynamic sort by two columns (to be specified).

DATA(column1) = \`carrid\`.
DATA(column2) = \`connid\`.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = column1
  )->add\_field( CHANGING field = column2 )->request( ).
DATA(column\_syntax) = column1 && \`, \` && column2.
TRY.
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           ORDER BY (column\_syntax)
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).
  CATCH cx\_sy\_dynamic\_osql\_semantics.
    cl\_demo\_output=>display( 'Error' ).
ENDTRY.

Executable Example

[Dynamic ORDER BY Clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_order_by_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, Dynamic ORDER-BY Clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_order_by_abexa.htm)