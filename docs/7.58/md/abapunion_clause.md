  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [UNION, INTERSECT, EXCEPT](javascript:call_link\('abapunion.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UNION%2C%20INTERSECT%2C%20EXCEPT%2C%20query_clauses%2C%20ABAPUNION_CLAUSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UNION, INTERSECT, EXCEPT, query\_clauses

Syntax

... *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
      *\[*[WHERE](javascript:call_link\('abapwhere.htm'\)) [sql\_cond](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\))*\]*
      *\[* [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[*[HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
      *\[* [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) [*\[*UP TO n ROWS *\[*OFFSET o*\]**\]*](javascript:call_link\('abapselect_up_to_offset.htm'\))*\]*
      *\[*[db\_hints](javascript:call_link\('abenabap_sql_db_hints.htm'\))*\]*  ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") whose result sets are joined using [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), or [EXCEPT](javascript:call_link\('abapunion.htm'\)). The result set of SELECT statements joined using UNION, INTERSECT, or EXCEPT is tabular and the [target area](javascript:call_link\('abapinto_clause.htm'\)) must be used appropriately.

The following special conditions apply to clauses and additions of the SELECT statements joined using UNION, INTERSECT, or EXCEPT:

-   The [SELECT list](javascript:call_link\('abapselect_list.htm'\)) must consist of a list of specified columns [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) as [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)). \* and data\_source~\* cannot be specified.
-   All [SELECT lists](javascript:call_link\('abapselect_list.htm'\)) of SELECT statements grouped using UNION, INTERSECT, or EXCEPT must have the same number of elements.
-   The columns assigned to each other must have the same type properties with respect to [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and number of digits after the decimal point, with the following exceptions:
    
    -   Numeric types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) and [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) can create a column. The resulting column has the data type with the greatest value range.
    -   Numeric types [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) can have different lengths but must have the same number of decimal places. The resulting column has the data type with the greatest length. The corresponding special types [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) are handled here like [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)).
    -   The numeric types [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) are handled like the numbers of type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) as they are stored, and the rule above applies with respect to lengths and decimal places.
    -   Character-like types [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) can have different lengths. The resulting column has the data type with the greatest length. The corresponding special types [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) are handled here like [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)).
    
    All other types must be exactly the same. This applies specifically to [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)), where the lengths must match. The different categories of [strings](javascript:call_link\('abenddic_character_byte_types.htm'\)) cannot be combined either.
    
-   The addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is not allowed in the [WHERE](javascript:call_link\('abapwhere.htm'\)) conditions of the SELECT statements involved.
-   An [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause cannot be specified for individual result sets. Instead, ORDER BY can be applied to the union, intersection, or difference result set of main queries.

The number of SELECT statements that can be joined using UNION, INTERSECT, or EXCEPT is not limited by a fixed value.

Hints

-   If required, the column names of the individual result sets can be modified using alias names after AS.
-   If the column names of the result sets are not identical, the column names are used from the result set of the SELECT statement on the left of UNION, INTERSECT, or EXCEPT. In this type of case, the names are usually not visible, except for subqueries in the [WITH](javascript:call_link\('abapwith.htm'\)) statement.
-   The numeric types [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) can only be used together in a column if their decimal places match.
-   SQL expressions, host expressions, and host variables can be used to synchronize the columns of the result set of the SELECT statements involved.
-   Each of the joined SELECT statements has its own [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry").
-   An addition [USING](javascript:call_link\('abapselect_client.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause only affects the SELECT statement for which it is specified.
-   The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause only affects the SELECT statement for which it is specified.

Example

Creates the union set of three [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") on the same DDIC database table in a subquery of a [WITH](javascript:call_link\('abapwith.htm'\)) statement. The union set is selected in a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"), which makes it possible to use a single WHERE condition for the entire result set in the main query of the WITH statement. If the union set were created in a main query, every single SINGLE statement would have to contain the same WHERE condition or HAVING condition.

WITH +aggregates AS (
  SELECT FROM sflight
         FIELDS carrid,
                connid,
                'MAX' AS function,
                MAX( CAST( seatsocc AS DEC( 31,2 ) ) ) AS agg
         GROUP BY carrid, connid
    UNION
      SELECT FROM sflight
             FIELDS carrid,
                    connid,
                    'MIN' AS function,
                    MIN( CAST( seatsocc AS DEC( 31,2 ) ) ) AS agg
             GROUP BY carrid, connid
        UNION
          SELECT FROM sflight
                 FIELDS carrid,
                 connid, 'AVG' AS function,
                 AVG( seatsocc AS DEC( 31,2 ) ) AS agg
                 GROUP BY carrid, connid )
  SELECT \*
         FROM +aggregates
         WHERE carrid = 'LH' AND connid = '0400'
         INTO TABLE @FINAL(result).

Executable Examples

-   UNION
    -   [Union of Different Tables](javascript:call_link\('abenselect_union_abexa.htm'\))
    -   [Union with Aggregate Expression](javascript:call_link\('abenselect_union_sum_abexa.htm'\))
    -   [Union with Global Temporary Table](javascript:call_link\('abenselect_union_sum_gtt_abexa.htm'\))
    -   [Union for Building a Ranges Table](javascript:call_link\('abendemo_union_ranges_abexa.htm'\))
    -   [Union of CDS View with Input Parameters](javascript:call_link\('abenselect_union_cds_para_abexa.htm'\))
-   INTERSECT
    -   [Intersection of Multiple Tables](javascript:call_link\('abenselect_intersect_abexa.htm'\))
    -   [Intersection with Aggregate Expression](javascript:call_link\('abenselect_intersect_max_abexa.htm'\))
    -   [Intersection with Global Temporary Table](javascript:call_link\('abenselect_intersect_max_gtt_abexa.htm'\))
    -   [Intersection of CDS View with Input Parameters](javascript:call_link\('abenselect_inter_cds_para_abexa.htm'\))
-   EXCEPT
    -   [Difference of Multiple Tables](javascript:call_link\('abenselect_except_abexa.htm'\))
    -   [Difference with Aggregate Expression](javascript:call_link\('abenselect_except_min_abexa.htm'\))
    -   [Difference with Global Temporary Table](javascript:call_link\('abenselect_except_min_gtt_abexa.htm'\))
    -   [Difference of CDS View with Input Parameters](javascript:call_link\('abenselect_except_cds_para_abexa.htm'\))