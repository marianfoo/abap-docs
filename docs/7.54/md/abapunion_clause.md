  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm) → 

UNION - query\_clauses

Syntax

... *{* [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) source *}*
      *\[*[WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) [sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm)*\]*
      *\[* [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) group*\]* *\[*[HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) group\_cond*\]*
      *\[* [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) [*\[*UP TO n ROWS *\[*OFFSET o*\]**\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_up_to_offset.htm)*\]*
      *\[*[db\_hints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_db_hints.htm)*\]*  ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) of [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"), whose results sets are joined using [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm). The results set of SELECT statements joined using UNION is regarded as having multiple rows.

The following special conditions apply to clauses and additions of the SELECT statements joined using UNION:

-   The [SELECT liste](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) must consist of a list of specified columns [col\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause_col_spec.htm) as [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm). \* and data\_source~\* cannot be specified.
    
-   All [SELECT lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of SELECT statements grouped using UNION must have the same number of elements.
    
-   The columns assigned to each other must have the same type attributes with respect to [built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), length, and number of digits after the decimal point, with the following exceptions:
    

-   Numeric types [INT1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [INT8](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) can create a column. The resulting column has the data type with the greatest value range.

-   Numeric types [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) can have different lengths, but must have the same number of digits after the decimal point. The resulting column has the data type with the greatest length. The corresponding special types [CURR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [QUAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are handled here like [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).

-   The numeric types [DF16\_DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [DF34\_DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are handled like the numbers of type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) (as they are saved) and the rule above applies with respect to lengths and decimal places.

-   Character-like types [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) can have different lengths. The resulting column has the data type with the greatest length. The corresponding special types [CLNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), and [UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are handled here like [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).

All other types must be exactly the same. This applies specifically to [NUMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [RAW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), where the lengths must match. The different categories of [strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_character_byte_types.htm) cannot be combined either.

-   The addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) is not allowed in the [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) conditions of the SELECT statements in question.
    
-   An [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) clause cannot be specified for individual results sets. Instead ORDER BY can be applied to the joined results set of main queries.
    

The number of SELECT statements that can be joined using UNION is not limited by a fixed value.

Notes

-   Each of the associated SELECT statements has its own [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry"). An addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) or or the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) in the [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause applies only to the SELECT statement for which it is specified.
    
-   If required, the column names of the individual results sets can be modified using alias names after AS.
    
-   If the column names of the results sets are not identical, the column names are used from the results set of the SELECT statement on the left of UNION. In this type of case, the names are usually not visible (except for subqueries in the [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement).
    
-   The numeric types [DF16\_DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [DF34\_DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) can only be used together in a column if their decimal places match.
    
-   SQL expressions, host expressions, and host variables can be used to synchronize the columns of the results set of the SELECT statements in question.
    

Example

Creates the union set of three [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") applied to the same database table in a subquery of a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement. The union set is selected in a [common table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"), which makes it possible to use a single WHERE condition for the entire results set in the main query of the WITH statement. If the union set were created in a main query, every single SINGLE statement would have to contain the same WHERE condition or HAVING condition.

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
         INTO TABLE @DATA(result).

Executable Examples

-   [Union of Different Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_union_abexa.htm)
    
-   [Union with Aggregate Expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_union_sum_abexa.htm)
    
-   [Union with Global Temporary Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_union_sum_gtt_abexa.htm)
    
-   [Union for Building a Ranges Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendemo_union_ranges_abexa.htm)
    
-   [Union of CDS View with Input Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_union_cds_para_abexa.htm)