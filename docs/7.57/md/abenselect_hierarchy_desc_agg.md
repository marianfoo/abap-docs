  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) →  [SELECT, FROM hierarchy\_aggregate\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM hierarchy_descendants_aggregate, ABENSELECT_HIERARCHY_DESC_AGG, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, FROM hierarchy\_descendants\_aggregate

Syntax

... HIERARCHY\_DESCENDANTS\_AGGREGATE(
      SOURCE [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) *\[*AS tabalias*\]*
     *\[*JOIN [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) *\[*AS tabalias*\]* ON [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))*\]*
      MEASURES agg\_func1 AS alias1*\[*,
               agg\_func2 AS alias2*\[*,
               ...*\]**\]*
     *\[*WHERE [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))*\]*
     *\[*WITH SUBTOTAL*\]*
     *\[*WITH BALANCE*\]*
     *\[*WITH NOT MATCHED*\]*
     *\[*WITH TOTAL*\]* ) ...

Additions:

[1\. ... JOIN data\_source *\[*AS tabalias*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE sql\_cond](#!ABAP_ADDITION_2@2@)
[3\. ... WITH SUBTOTAL](#!ABAP_ADDITION_3@3@)
[4\. ... WITH BALANCE](#!ABAP_ADDITION_4@4@)
[5\. ... WITH NOT MATCHED](#!ABAP_ADDITION_5@5@)
[6\. ... WITH TOTAL](#!ABAP_ADDITION_6@6@)

Effect

Specifies the [hierarchy aggregate navigator](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") HIERARCHY\_DESCENDANTS\_AGGREGATE as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). It accesses the [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) specified after SOURCE and evaluates it. After the SQL hierarchy, AS can be used to specify an alias name for it that is valid within parentheses and must be used in positions in which the SQL hierarchy is addressed.

The hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE returns a tabular result consisting of the [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") of the SQL hierarchy [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) specified after SOURCE. These nodes meet the optional WHERE condition. If no WHERE condition is specified, these are all the hierarchy nodes. For each node of the result, the aggregate functions specified after MEASURES are applied to the row set resulting from the node and all its [descendant nodes](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry"). The result of each aggregate function is stored in the current node as the content of a separate column.

A comma-separated list of [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") agg\_func1, agg\_func2, ... must be specified after MEASURES. At least one aggregate function must be specified. Each aggregate function must be assigned an alias name alias1, alias2, ... The arguments of the aggregate functions can be individual columns [col](javascript:call_link\('abenabap_sql_columns.htm'\)) of the SQL hierarchy hierarchy including its [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) or a data source data\_source specified after JOIN. The [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ can or must be used to prefix the columns with the name of the SQL hierarchy or data source. The following aggregate functions are possible:

-   If JOIN is not specified, the arguments col can be columns of the SQL hierarchy and the following aggregate functions can be used:
    
    [MIN( col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [MAX( col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [SUM( col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [COUNT( *\[*DISTINCT*\]* col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [COUNT( \* )](javascript:call_link\('abensql_agg_func.htm'\)), [COUNT(\*)](javascript:call_link\('abensql_agg_func.htm'\))
    
    The addition DISTINCT is only possible for COUNT.
    
-   If JOIN is specified, the arguments col can be columns of the SQL hierarchy and the data source after data\_source and the following aggregate functions can be used:
    
    [MIN( col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [MAX( col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [SUM( col )](javascript:call_link\('abensql_agg_func.htm'\)),
    [COUNT( *\[*DISTINCT*\]* col )](javascript:call_link\('abensql_agg_func.htm'\))
    
    The addition DISTINCT is only possible for COUNT and for columns of the SQL hierarchy.
    

The aggregate functions work as described in the [general description](javascript:call_link\('abensql_agg_func.htm'\)), except that only columns col are allowed as arguments and that the result of the function COUNT is INT8 instead of INT4. For each aggregate function, a column with the alias name defined by AS is added to the tabular result of the hierarchy navigator. This column contains the result of the aggregate function in every row. These columns are not [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)). If \* or ...~\* is specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), they are read like a column of the SQL hierarchy specified as a source and are part of a structure or internal table created using an inline declaration @DATA*|*@FINAL(...) in the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)).

In addition to the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified after SOURCE, the result set contains a further hierarchy column HIERARCHY\_AGGREGATE\_TYPE with the type INT1. In the rows of the result set created by the optional WITH additions, this column contains an indicator for the addition to be created, otherwise it contains the numeric value 0.

Example

Call of the hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE in the program DEMO\_HIERARCHY\_AGGREGATE, where the [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_PARENT\_CHILD\_AGG is specified as a source. The WHERE condition evaluates the [hierarchy column](javascript:call_link\('abenddddl_hierarchy.htm'\)) HIERARCHY\_LEVEL and only nodes with a maximum hierarchy level of 2 are added to the result set. The aggregate functions, however, respect all descendant nodes regardless of their hierarchy level. When executed, this program demonstrates how this hierarchy navigator works.

FINAL(level) = 2.
SELECT agg~\*
       FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
              SOURCE demo\_cds\_parent\_child\_agg( p\_id = 'A' )
              MEASURES MIN( num ) AS min,
                       MAX( num ) AS max,
                       SUM( num ) AS sum,
                       COUNT( \* ) AS cnt
              WHERE hierarchy\_level <= @level ) AS agg
       INTO TABLE @FINAL(cds\_hierarchy\_desc\_aggregate).

Addition 1   

... JOIN data\_source *\[*AS tabalias*\]*

Effect

The optional addition JOIN can be used to join an additional data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) with the SQL hierarchy specified after SOURCE. The same applies to data\_source as to every data source of a query, except that path expressions [sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) are not possible. After the data source, AS can be used to specify an alias name for it that is valid within parentheses and must be used in positions in which the data source is addressed.

The result set of the SQL hierarchy is joined with the result set of the data source data\_source in accordance with [LEFT OUTER JOIN](javascript:call_link\('abapselect_join.htm'\)) rules. The rules for conditions [sql\_cond in expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)) apply to the ON condition. Columns of the data source can be used as arguments of those aggregate functions after MEASURES for which their data type is suitable. However, they are not part of the tabular result of the hierarchy navigator as additional columns.

For every node of the original SQL hierarchy that meets the WHERE condition, the aggregate functions specified after MEASURES are applied to every [descendant node](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry") in the result set of the join according to the [parent-child relationship](javascript:call_link\('abenpcr_glosry.htm'\) "Glossary Entry").

Hints

-   The addition JOIN does not modify the number of rows in the result set of the hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE. If, however, the result set of the join contains more descendant nodes for a node than in the original SQL hierarchy, all these nodes are respected by the aggregate functions. Any start nodes in a calculation that occur more than once are also all respected multiple times.
-   If there are [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") in [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for a data source specified by JOIN and these are not switched off using [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)), these conditions are applied before the join is made.

Executable Example

[Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenhier_desc_agg_abexa.htm'\))

Addition 2   

... WHERE sql\_cond

Effect

The WHERE condition selects those nodes of the SQL hierarchy specified after SOURCE that are added to the result set of the hierarchy navigator. Columns of the SQL hierarchy, including the additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)), can be used in the condition [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)).

Hints

-   The WHERE condition does not restrict the descendant nodes of the selected nodes. It is used only to select those nodes for which the aggregate function is calculated.
-   The columns of a data source joined using JOIN cannot be used after WHERE.

Addition 3   

... WITH SUBTOTAL

Addition 4   

... WITH BALANCE

Addition 5   

... WITH NOT MATCHED

Addition 6   

... WITH TOTAL

Effect

Each of the optional WITH additions, which can be specified in any order, adds exactly one row to the tabular result of the hierarchy aggregate navigator HIERARCHY\_DESCENDANTS\_AGGREGATE. In the new row, all columns, including the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)), contain the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), except columns created using the addition MEASURES and the hierarchy column HIERARCHY\_AGGREGATE\_TYPE. The special hierarchy column HIERARCHY\_AGGREGATE\_TYPE uses the following values to indicate which WITH addition added the row:

WITH Addition

HIERARCHY\_AGGREGATE\_TYPE

SUBTOTAL

1

BALANCE

2

NOT MATCHED

3

TOTAL

4

In the rows not created by WITH, the hierarchy column HIERARCHY\_AGGREGATE\_TYPE contains the numeric value 0. The columns created by the addition MEASURES contain the results of their aggregate functions for the hierarchy nodes created as follows by the WITH addition:

-   WITH SUBTOTAL
    
    The aggregate functions evaluate all hierarchy nodes that meet the WHERE condition of the hierarchy navigator.
    
-   WITH BALANCE
    
    The aggregate functions evaluate all hierarchy nodes that do not meet the WHERE condition of the hierarchy navigator.
    
-   WITH NOT MATCHED
    
    This addition can only be specified together with the JOIN addition. The aggregate functions evaluate all rows of the data source data\_source specified after JOIN for which the ON condition of the join is not met.
    
-   WITH TOTAL
    
    The aggregate functions evaluate all hierarchy nodes plus the rows of a data source data\_source specified after JOIN that do not meet the ON condition.
    

Hint

If one of the WITH additions is used, the syntax check is performed in [strict mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Executable Example

[Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with WITH](javascript:call_link\('abenhier_desc_agg_with_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SELECT, Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenhier_desc_agg_abexa.htm'\))
![Example](exa.gif "Example") [SELECT, Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with WITH](javascript:call_link\('abenhier_desc_agg_with_abexa.htm'\))