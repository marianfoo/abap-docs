  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, ORDER BY, ABAPORDERBY_CLAUSE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

SELECT, ORDER BY

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... ORDER BY *{* *{*PRIMARY KEY*}*
             *|* *{* *{* [col1](javascript:call_link\('abenabap_sql_columns.htm'\))*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}* *|* *{*NULLS LAST*}**\]*,
                 *{*[col2](javascript:call_link\('abenabap_sql_columns.htm'\))*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}* *|* *{*NULLS LAST*}**\]*, ...*}*
             *|* (column\_syntax)
             *|* expr *}* ...

Alternatives:

[1\. ... ORDER BY PRIMARY KEY](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ORDER BY *{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}* *|* *{*NULLS LAST*}**\]*,](#!ABAP_ALTERNATIVE_2@2@)
               *{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}* *|* *{*NULLS LAST*}**\]*, ...
[3\. ... ORDER BY (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... ORDER BY expr](#!ABAP_ALTERNATIVE_4@4@)

Effect

The addition ORDER BY sorts a multirow result set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") by the content of the specified column. The order of the rows in the result set is undefined with respect to all columns that are not listed after ORDER BY and can be different in repeated executions of the same SELECT statement. If the addition ORDER BY is not specified, the order of all the columns in the result set is undefined.

The following restrictions apply when using the addition ORDER BY with other additions:

-   The addition ORDER BY cannot be used with the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)).
-   All columns specified after ORDER BY must also be specified after the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) at the same time.
-   If [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") are specified after SELECT, all columns that are specified after ORDER BY and that do not have an alias name for an aggregate function must also be specified after SELECT and after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)).
-   If an alias name defined using [AS](javascript:call_link\('abapselect_list.htm'\)) is used for sorting, this name must be unique and cannot be the same name as a column to which no alias names are assigned.
-   If the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is used, only those columns can be specified after ORDER BY that are also listed after SELECT. The exception to this rule is [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") when PRIMARY KEY is specified. If not, other columns can also be used, as long as there are no restrictions by other additions such as [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)).
-   If the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used in front of the [WHERE condition](javascript:call_link\('abapwhere.htm'\)), ORDER BY can only be used with the addition PRIMARY KEY and all columns of the primary key, except the client column of client-dependent tables, must be specified after [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

Hints

-   The data is sorted in the database system, once all other actions are completed, such as determining the hit list using WHERE, calculating aggregate functions, and grouping using GROUP BY. Only the additions [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) and [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) are executed on the sorted hits.
-   Sorts in the database system are performed in accordance with the rules for [size comparisons](javascript:call_link\('abenwhere_logexp_compare.htm'\)) and the restrictions with regard to platform dependencies apply. More specifically, sorts after character-like values can be platform-dependent under certain circumstances and produce different results than ABAP sorts.
-   For performance reasons, a sort should only take place in the database if supported by an [index](javascript:call_link\('abenindex_glosry.htm'\) "Glossary Entry"). This is only guaranteed when ORDER BY PRIMARY KEY is specified. If a suitable index is not available, the result set must be sorted at runtime. This should be done using [SORT](javascript:call_link\('abapsort_itab.htm'\)) on AS ABAP and not using ORDER BY in the database system. Even if there is a suitable index, ORDER BY col1 col2 ... should be used for large amounts of data only if the order of the database fields col1 col2 ... is the same as the order in the index.
-   If a sorted resulting set is assigned to a sorted internal table, the internal table is sorted again according to the sorting instructions.

Alternative 1   

... ORDER BY PRIMARY KEY

Effect

The result set is sorted in ascending order by the content of the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a single [data source](javascript:call_link\('abapselect_data_source.htm'\)). The following restrictions apply:

-   The addition PRIMARY KEY cannot be specified if a [join expression](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry") or a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) is used in the SELECT statement to select the data of multiple data sources.
-   The addition PRIMARY KEY cannot be specified in a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").
-   The addition PRIMARY KEY cannot be specified for a result set joined with [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), or [EXCEPT](javascript:call_link\('abapunion.htm'\)).
-   The addition PRIMARY KEY cannot be used when accessing a common table expression defined using [WITH](javascript:call_link\('abapwith.htm'\)).
-   The addition PRIMARY KEY cannot be specified when [views](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") that contain exactly the same number of key fields as view fields are accessed. If a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") like this is specified after FROM in the dynamically specified source\_syntax, an exception is raised only in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05. In all other cases, the result set is sorted by all columns.
-   If a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity is sorted by the PRIMARY KEY, its key elements must be defined at the start of the structure without any gaps.

Hint

If ORDER BY PRIMARY KEY is used with the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) in front of the [WHERE condition](javascript:call_link\('abapwhere.htm'\)), all fields of the primary key, except for the client column in client-dependent table, must be in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

Example

Reading of the data from the DDIC database table SFLIGHT for Lufthansa flight 0400, sorted by the third key field, the flight date.

SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '0400'
       ORDER BY PRIMARY KEY
       INTO TABLE @FINAL(result).

Alternative 2   

... ORDER BY *{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}* *|* *{*NULLS LAST*}**\]*,
             *{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]* *\[**{*NULLS FIRST*}* *|* *{*NULLS LAST*}**\]*, ...

Effect

For any columns specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), a comma-separated list of columns can be specified after ORDER BY to be used as a sort criterion. Columns can be specified directly using the [column names](javascript:call_link\('abenabap_sql_columns.htm'\)) col1, col2 ... or using the alias names a1, a2 ... defined using [AS](javascript:call_link\('abapselect_list.htm'\)). The latter is necessary if sorting is to be done by columns of the result set that are defined in the SELECT list using non elementary [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

The additions ASCENDING and DESCENDING determine whether the column in question is sorted in ascending or descending order. If neither addition is specified, the column is sorted in ascending order. The priority of sorting is based on the order in which the components col1 col2... or a1 a2 ... are specified.

The additions NULLS FIRST and NULLS LAST determine whether [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are placed in front of or after non-null values. If neither addition is specified, potential [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are placed at the beginning of the result set. If only DESCENDING is specified and no [nulls](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") occur, [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are placed at the end of the result set.

The following table shows the default behavior of the additions ASCENDING, DESCENDING, NULLS FIRST, and NULLS LAST.

Addition

Default Behavior of Result Set

No addition

ASCENDING + NULLS FIRST

NULLS LAST

ASCENDING + NULLS LAST

DESCENDING

DESCENDING + NULLS LAST

Columns specified after ORDER BY cannot be of the [type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hints

-   If single columns are specified in the addition ORDER BY, the statement SELECT uses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") only in the following cases:
    
    -   The columns specified are a left-aligned subset of the primary key in the correct order and no further columns are specified.
    -   The columns specified represent the entire primary key in the correct sequence. Additional columns that are specified have no effect on the sorting.
    -   The addition DESCENDING is not specified.
    
    In other cases, table buffering is ignored.
    
-   When a comma-separated list is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.
-   If specified, the columns col1, col2, ... can contain a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) for [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry").
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](javascript:call_link\('abenabap_sql_lists_obsolete.htm'\)). Commas must be used, however, in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.
-   The additions NULLS FIRST and NULLS LAST are not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports the use of these additions. This requires the constant ORDER\_BY\_NULLS\_FIRST\_LAST of this class to be passed to the method in an internal table.
-   NULLS FIRST and NULLS LAST enforce [strict mode from Release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Example

The rows of DDIC database table sflight are grouped by the columns carrid and connid, where for each group the minimum of column seatsocc is determined. The selection is sorted in ascending order by carrid and in descending order by the minimum of occupied seats. The alternative name min is used for the aggregate expression.

SELECT carrid, connid, MIN( seatsocc ) AS min
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid ASCENDING, min DESCENDING
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display\_data( result ).

Example

To generate null values, a left outer join is performed on table DEMO\_SFLIGHT\_AGG and the result set is sorted by its column CARRID with zeros at the end of the table. The program DEMO\_SELECT\_ORDER\_NULLS executes the statement and displays the result.

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

The same applies to column\_syntax as when specifying the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) dynamically. If the content of column\_syntax is initial, the addition ORDER BY is ignored. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Hints

-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](javascript:call_link\('abencomment.htm'\)) and ["](javascript:call_link\('abencomment.htm'\)) as follows:
    
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

[Dynamic ORDER BY Clause](javascript:call_link\('abendynamic_order_by_abexa.htm'\))

Alternative 4   

... ORDER BY expr

Effect

[Expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") and [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") (expr) are possible in the ORDER BY clause within [CTEs](javascript:call_link\('abencte_glosry.htm'\) "Glossary Entry") and in [SELECT](javascript:call_link\('abapselect.htm'\)) statements. Currently, expressions are not supported in the ORDER BY clause of statements using [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)) and [EXCEPT](javascript:call_link\('abapunion.htm'\)).

When used within CTEs, expressions are possible in the ORDER BY clause without restrictions. Outside of CTEs, i. e. in the main SELECT statement, expressions are only possible if it can be determined at compilation time that it is a statement with new syntax. This is, for example, the case if an INTO clause is used. In statements without an INTO clause, without commas or without other @ signs, expressions are not possible in the ORDER BY clause.

Hints

-   Alias names specified in the SELECT list can be referenced within the expressions: SELECT col as x ... ORDER BY x + x ...
-   Handle the alias names specified in the SELECT with care. In the following example, the sorting is carried out based on three columns: 1, +, 1: SELECT col1 as 1 col2 as + FROM ... ORDER BY 1 + 1 ...
-   Aggregate functions are possible in the ORDER BY clause, too: SELECT col FROM ... GROUP BY col ... ORDER BY count ...
-   All fields in the SELECT list or ORDER BY clause that are outside of aggregate functions must be specified in the ORDER BY clause if they are not part of a GROUP BY expression. This is not true for aliases from the SELECT list that are used in expressions in the ORDER BY clause.
-   If an expression is used in the ORDER BY clause, e. g. col1 + col2, it is first checked whether it is a GROUP BY expression (for example, if the GROUP BY clause has the exact expression col1 + col2). Only if this is not the case, it is required to specify the fields col1 and col2 individually in the GROUP BY clause.
-   Using DISTINCT in the SELECT list and specifying a field in the ORDER BY clause lead to a syntax error.
-   ENDSELECT or ENDWITH are not needed if only constants or no fields outside of aggregate functions are specified in the SELECT list of the main SELECT statement.
-   Window functions are also possible in the ORDER BY clause: SELECT ... ORDER BY COUNT OVER( ...  ) ...
-   All expressions in the ORDER BY clause are not relevant for the table buffer.

Example

Reading of data from the DDIC database table SFLIGHT by sorting the result table by the overall number of rows using an aggregate expression.

SELECT COUNT(\*) AS cnt, carrid FROM spfli
  GROUP BY carrid
  ORDER BY COUNT(\*) DESCENDING
  INTO TABLE @FINAL(res).
cl\_demo\_output=>display( res ).

Continue
![Example](exa.gif "Example") [SELECT, Dynamic ORDER BY Clause](javascript:call_link\('abendynamic_order_by_abexa.htm'\))