  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) → 

ABAP SQL in Release 7.54

[1\. Extensions of the INTO clause](#!ABAP_MODIFICATION_1@1@)
[2\. Definition of associations](#!ABAP_MODIFICATION_2@2@)
[3\. New aggregate function STRING\_AGG](#!ABAP_MODIFICATION_3@3@)
[4\. Addition DISTINCT optional in aggregate function COUNT](#!ABAP_MODIFICATION_4@4@)
[5\. Window expressions](#!ABAP_MODIFICATION_5@5@)
[6\. Temporal hierarchies](#!ABAP_MODIFICATION_6@6@)
[7\. New hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE](#!ABAP_MODIFICATION_7@7@)
[8\. Aggregate expressions in SQL expressions](#!ABAP_MODIFICATION_8@8@)
[9\. Strict mode in the syntax check](#!ABAP_MODIFICATION_9@9@)
[10\. Expansion of the CAST matrix](#!ABAP_MODIFICATION_10@10@)

Modification 1

Extensions of the INTO Clause

The [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) has been extended as follows:

-   The new addition [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_into_target.htm) can be used to implicitly create anonymous data objects as target areas. The addition NEW now also makes inline declarations possible when using dynamic tokens and after the statement [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm).

-   The new addition [INDICATORS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_indicators.htm) can be used to specify a [null indicator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_indicator_glosry.htm "Glossary Entry").
    

Modification 2

Definition of Associations

When associations of a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") are published using the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations.htm), new [CTE associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencte_association_glosry.htm "Glossary Entry") can be defined by specifying [JOIN TO ONE*|*MANY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations_defining.htm). These CTE associations can be used in the subsequent queries of the current [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement, either in [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) or as [hierarchy associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") in the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm).

Definitions of associations require [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

Modification 3

New Aggregate Function STRING\_AGG

The new aggregate function [STRING\_AGG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) can be used to chain character-like results of the rows of the results set of a query or of the current group as a string.

Modification 4

Addition DISTINCT Optional in Aggregate Function COUNT

The aggregate function [COUNT( sql\_exp )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) can now be used without the addition DISTINCT. In this case, it counts all rows in which the value of the argument is not the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry").

Modification 5

Window expressions

Window expressions defined using [OVER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm) can now be used in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) of a query. Window expressions define windows as a subset of the results set and apply [window functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwindow_function_glosry.htm "Glossary Entry") to them.

Modification 6

Temporal Hierarchies

The [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) can now use the new addition PERIOD FROM TO VALID FROM TO to create [temporal hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in which the hierarchy nodes are limited by time intervals.

Modification 7

New Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE

The new [hierarchy navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm) can be used to calculate [aggregate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_function_glosry.htm "Glossary Entry") for [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry").

Modification 8

Aggregate Expressions in SQL Expressions

From Release 7.54, [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) can be specified as operands of [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm).

Modification 9

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm), which handles the statement more strictly than the regular syntax check.

Modification 10

Expansion of the CAST Matrix

The matrix of types that can be converted to each other with a [CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm) expression has been expanded. In particular, the [new data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-ddic.htm) of the ABAP Dictionary are taken into account.