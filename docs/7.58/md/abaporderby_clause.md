---
title: "SELECT, ORDER BY"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm) Syntax ... ORDER BY  PRIMARY KEY    col1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm)a1 sql_exp1(https://help.sap.com/doc/abapdoc
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm"
abapFile: "abaporderby_clause.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abaporderby", "clause"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20ORDER%20BY%2C%20ABAPORDERBY_CLAUSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, ORDER BY

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm)

Syntax

... ORDER BY
      *{* *{*PRIMARY KEY*}*
      *|* *{* *{* [col1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm)*|*a1*|* [sql\_exp1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm)*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}**|**{*NULLS LAST*}**\]*,
          *{* [col2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm)*|*a2*|* [sql\_exp2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm)*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}**|**{*NULLS LAST*}**\]*, ...*}*
      *|* (column\_syntax) *}* ...

Alternatives:

[1\. ... ORDER BY PRIMARY KEY](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ORDER BY *{*col1*|*a1*|*sql\_exp1*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}**|**{*NULLS LAST*}**\]*,](#!ABAP_ALTERNATIVE_2@2@)
               *{*col2*|*a2*|*sql\_exp2*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}**|**{*NULLS LAST*}**\]*, ...
[3\. ... ORDER BY (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

The addition ORDER BY sorts a multirow result set of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") by the content of the specified column. The order of the rows in the result set is undefined with respect to all columns that are not listed after ORDER BY and can be different in repeated executions of the same SELECT statement. If the addition ORDER BY is not specified, the order of the rows in the result set is undefined with respect to all its columns.

The following restrictions apply when using the addition ORDER BY with other additions:

-   The addition ORDER BY cannot be used with the addition [SINGLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_single.htm).
-   All columns specified after ORDER BY must also be specified after the addition [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm) at the same time.
-   If [aggregate functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_function_glosry.htm "Glossary Entry") are specified after SELECT, all columns that are specified after ORDER BY and that do not have an alias name for an aggregate function must also be specified after SELECT and after [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm).
-   If an alias name defined using [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) is used for sorting, this name must be unique and cannot be the same name as a column to which no alias name is assigned.
-   If the addition [DISTINCT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm) is used, only those columns can be specified after ORDER BY that are also listed after SELECT. The exception to this rule is the [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") when PRIMARY KEY is specified. If not, other columns can also be used, as long as there are no restrictions by other additions such as [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm).
-   If the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_all_entries.htm) is used in front of the [WHERE condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm), ORDER BY can only be used with the addition PRIMARY KEY and all columns of the primary key, except the client column of client-dependent tables, must be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm).

Hints

-   The data is sorted in the database system, once all other actions are completed, such as determining the hit list using WHERE, calculating aggregate functions, and grouping using GROUP BY. Only the additions [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) and [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) are executed on the sorted hits.
-   Sorts in the database system are performed in accordance with the rules for [size comparisons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_compare.htm) and the restrictions with regard to platform dependencies apply. More specifically, sorts after character-like values can be platform-dependent under certain circumstances and produce different results than ABAP sorts.
-   For performance reasons, a sort should only take place in the database if supported by an [index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_glosry.htm "Glossary Entry"). This is only guaranteed when ORDER BY PRIMARY KEY is specified. If a suitable index is not available, the result set must be sorted at runtime. This should be done using [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) on AS ABAP and not using ORDER BY in the database system. Even if there is a suitable index, ORDER BY col1, col2 ... should be used for large amounts of data only if the order of the database fields col1, col2 ... is the same as the order in the index.
-   If a sorted resulting set is assigned to a sorted internal table, the internal table is sorted again according to the sorting instructions.

Alternative 1   

... ORDER BY PRIMARY KEY

Effect

The result set is sorted in ascending order by the content of the [primary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a single [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm). The following restrictions apply:

-   The addition PRIMARY KEY cannot be specified if a [join expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_expression_glosry.htm "Glossary Entry") or a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) is used in the SELECT statement to select the data of multiple data sources.
-   The addition PRIMARY KEY cannot be specified in a [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry").
-   The addition PRIMARY KEY cannot be specified for a result set joined with [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm).
-   The addition PRIMARY KEY cannot be used when accessing a common table expression defined using [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm).
-   The addition PRIMARY KEY cannot be specified when [views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenview_glosry.htm "Glossary Entry") that contain exactly the same number of key fields as view fields are accessed. If a [DDIC database view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_view_glosry.htm "Glossary Entry") like this is specified after FROM in the dynamically specified source\_syntax, an exception is raised only in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05. In all other cases, the result set is sorted by all columns.
-   If a [CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") entity is sorted by the PRIMARY KEY, its key elements must be defined at the start of the structure without any gaps.

Hint

If ORDER BY PRIMARY KEY is used with the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_all_entries.htm) in front of the [WHERE condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm), all fields of the primary key, except for the client column in client-dependent table, must be in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm).

Example

Reading of the data from the DDIC database table SFLIGHT for Lufthansa flight 0400, sorted by the third key field, the flight date.

SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '0400'
       ORDER BY PRIMARY KEY
       INTO TABLE @FINAL(result).

Alternative 2   

... ORDER BY *{*col1*|*a1*|*sql\_exp1*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}**|**{*NULLS LAST*}**\]*,
             *{*col2*|*a2*|*sql\_exp2*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}**|**{*NULLS LAST*}**\]*,  ...

Additions:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... *{*NULLS FIRST*}**|**{*NULLS LAST*}*](#!ABAP_ADDITION_2@2@)

Effect

With this variant, columns or expressions can be specified in a comma-separated list as a sort criterion.

-   With col1, col2, ..., any columns of the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) list can be specified directly by their [column names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm).
-   With a1, a2, ..., columns can be specified using alias names defined with [AS](abapselect_list.htm#!ABAP_ONE_ADD@1@) in the SELECT list. This is necessary if sorting is to be done by columns of the result set that are defined in the SELECT list using non-elementary [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm).
-   sql\_exp1, sql\_exp2, ..., can be used to specify [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expression_glosry.htm "Glossary Entry"). [Alias names](abapselect_list.htm#!ABAP_ONE_ADD@1@) can be used as operands of the SQL expressions.

Hints

-   Alias names specified in the SELECT list must be handled with care. Especially, non-alphanumeric characters should be prevented. In the following example, the sorting is carried out based on three columns: 1, +, 1: SELECT col1 as 1 col2 as + FROM ... ORDER BY 1 + 1 ...
-   Columns that are specified for an SQL expression used in the ORDER BY clause need to be specified in the GROUP BY clause. If the same SQL expression is specified in the GROUP BY clause, the columns do not need to be specified there again.
-   Alias names that are used in an SQL expression in the ORDER BY clause do not need to be specified in the GROUP BY clause.
-   If only aggregate functions are specified after SELECT and in the ORDER BY clause, a SELECT statement that opens a loop must not be closed using the statements ENDSELECT or ENDWITH when reading into a non-table-like [target area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm).
-   Currently, SQL expressions are not supported in the ORDER BY clause of SELECT statements using [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm).
-   When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_lists_obsolete.htm). Commas must be used, however, in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.
-   SQL expressions rely on the SQL parser introduced with ABAP release 7.40, SP02. They can only be used in queries where the corresponding syntax is recognizable, e. g. for @ in front of host variables, in comma-separated lists, or queries in CTEs.
-   If specified, the columns col1, col2, ... can contain a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) for [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry").

Example

Reading of data from the DDIC database table SFLIGHT by sorting the result table by the overall number of rows using an aggregate expression.

SELECT COUNT(\*) AS cnt, carrid FROM spfli
  GROUP BY carrid
  ORDER BY COUNT(\*) DESCENDING
  INTO TABLE @FINAL(res).
cl\_demo\_output=>display( res ).

Addition 1   

... ASCENDING*|*DESCENDING

Effect

The additions ASCENDING and DESCENDING determine whether the column or expression in question is sorted in ascending or descending order. If neither addition is specified, the column or expression is sorted in ascending order. The priority of sorting is based on the order in which the components col1, col2... or a1, a2 ... are specified.

Example

The rows of DDIC database table sflight are grouped by the columns carrid and connid, where for each group the minimum of column seatsocc is determined. The selection is sorted in ascending order by carrid and in descending order by the minimum of occupied seats. The alternative name min is used for the aggregate expression.

SELECT carrid, connid, MIN( seatsocc ) AS min
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid ASCENDING, min DESCENDING
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display\_data( result ).

Addition 2   

... *{*NULLS FIRST*}**|**{*NULLS LAST*}*

Effect

The additions NULLS FIRST and NULLS LAST determine whether [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") are placed in front of or after non-null values. If neither addition is specified, potential [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") are placed at the beginning of the result set. If only DESCENDING is specified and no [nulls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") occur, [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") are placed at the end of the result set.

The following table shows the default behavior of the additions ASCENDING, DESCENDING, NULLS FIRST, and NULLS LAST.

Addition

Default Behavior of Result Set

No addition

ASCENDING + NULLS FIRST

NULLS LAST

ASCENDING + NULLS LAST

DESCENDING

DESCENDING + NULLS LAST

Columns specified after ORDER BY cannot be of the [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hints

-   The additions NULLS FIRST and NULLS LAST are not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports the use of these additions. This requires the constant ORDER\_BY\_NULLS\_FIRST\_LAST of this class to be passed to the method in an internal table.
-   NULLS FIRST and NULLS LAST enforce [strict mode from ABAP release 7.55](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_755.htm).

Example

To generate null values, a left outer join is performed on table DEMO\_SFLIGHT\_AGG and the result set is sorted by its column CARRID with nulls at the end of the table. The class CL\_DEMO\_SELECT\_ORDER\_NULLS executes the statement and displays the result.

SELECT FROM demo\_sflight\_agg AS a LEFT OUTER JOIN demo\_sflight\_agg AS b
      ON a~carrid = b~carrid AND
         a~connid = b~connid AND
         a~fldate = b~fldate AND
         a~connid LIKE '04%'
      FIELDS a~carrid,
             a~fldate AS a\_fldate,
             a~connid,
             a~seatsocc,
             b~carrid AS b\_carrid,
             b~fldate AS b\_fldate,
             b~connid AS b\_connid,
             b~seatsocc AS b\_seatsocc
      WHERE a~carrid LIKE 'A%'
           AND a~fldate LIKE '%'
           AND a~connid LIKE '0%'
      ORDER BY b~carrid NULLS LAST
      INTO TABLE @FINAL(result).

![Figure](abdoc_select_order_null.png)

Alternative 3   

... ORDER BY (column\_syntax)

Effect

As an alternative to specifying columns statically, a parenthesized data object column\_syntax can be specified that contains the syntax of PRIMARY KEY or the list of columns or is initial when the statement is executed.

The same applies to column\_syntax as when specifying the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) dynamically. If the content of column\_syntax is initial, the addition ORDER BY is ignored. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_inj_dyn_tokens_scrty.htm).

Hints

-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm) as follows:
    
    -   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".
    -   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".
    
    Comment characters placed within literals are, however, part of the literal.
    

Example

Dynamic sort by two columns that can be specified.

DATA(column1) = \`carrid\`.
DATA(column2) = \`connid\`.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = column1
  )->add\_field( CHANGING field = column2 )->request( ).
FINAL(column\_syntax) = column1 && \`, \` && column2.
TRY.
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           ORDER BY (column\_syntax)
           INTO TABLE @FINAL(result).
    cl\_demo\_output=>display( result ).
  CATCH cx\_sy\_dynamic\_osql\_semantics.
    cl\_demo\_output=>display( 'Error' ).
ENDTRY.

Executable Example

[Dynamic ORDER BY Clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_order_by_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, Dynamic ORDER BY Clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_order_by_abexa.htm)